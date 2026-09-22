// Contact.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Container,
    Text,
    Heading,
    VStack,
    HStack,
    Icon,
    Link,
    Button,
    Input,
    Textarea,
    Grid,
    useToast,
    Tooltip,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Select,
    SimpleGrid,
    Spinner,
} from '@chakra-ui/react';
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedinIn,
    FaCopy,
    FaPaperPlane,
    FaPhoneAlt,
    FaTimes,
    FaCheckCircle,
    FaArrowUp,
    FaAddressCard,
    FaWhatsapp,
    FaRegClock,
} from 'react-icons/fa';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { contactInfo, socialLinks as navSocialLinks } from '../../data/navData';
import { engagementTypes } from '../../data/homeData';
import { ThemeToggle } from '../common/ThemeToggle';
import { SectionHeader } from '../Home/SectionHeader';
import { Reveal } from '../About/Reveal';
import { MagneticButton } from '../About/MagneticButton';

const MAX = { name: 60, email: 120, message: 1000 };
const TIMEZONE = 'Africa/Douala';
const PHONE_DIGITS = contactInfo.phone.replace(/\s/g, '');

const waLink =
    navSocialLinks.find((s) => s.href.includes('wa.me'))?.href ??
    `https://wa.me/${PHONE_DIGITS}`;
const whatsappHref = `${waLink}?text=${encodeURIComponent(
    'Hi Ojage! I saw your portfolio and would like to talk.'
)}`;

const linkedin = navSocialLinks.find((s) => s.href.includes('linkedin'))?.href ??
    'https://linkedin.com/in/ojage-sala/';
const github = 'https://github.com/ojage';

interface FormState {
    name: string;
    email: string;
    message: string;
    subject: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const emptyForm: FormState = { name: '', email: '', message: '', subject: '' };

const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const Contact = () => {
    const { bgColor, cardBg, textColor, accentColor, secondaryAccent, isDark, tertiaryAccent } =
        useThemeConstants();
    const toast = useToast();
    const [form, setForm] = useState<FormState>(emptyForm);
    const [errors, setErrors] = useState<FormErrors>({});
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [honeypot, setHoneypot] = useState('');
    const [now, setNow] = useState(() => new Date());
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const messageBox = useRef<HTMLDivElement>(null);

    // Live local clock (WAT / UTC+1)
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 30_000);
        return () => clearInterval(id);
    }, []);

    const localTime = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: TIMEZONE,
    });
    const hourWAT = Number(
        new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            hour12: false,
            timeZone: TIMEZONE,
        }).format(now)
    );
    const onlineNow = hourWAT >= 8 && hourWAT <= 23;

    const handleCopy = async (text: string, label: string) => {
        try {
            await navigator.clipboard.writeText(text);
            toast({
                title: `${label} copied`,
                description: `${text} copied to clipboard`,
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        } catch {
            toast({
                title: 'Copy failed',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    };

    const handleCopyAll = () =>
        handleCopy(
            [
                `Name: ${contactInfo.name}`,
                `Email: ${contactInfo.email}`,
                `Phone: ${contactInfo.phone}`,
                `Web: https://salathiel.ojage.com`,
            ].join('\n'),
            'Contact details'
        );

    const handleDownloadVCard = () => {
        const vcf = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `FN:${contactInfo.name}`,
            `TITLE:FULL-STACK AI PRODUCT DEVELOPER`,
            `EMAIL;TYPE=INTERNET:${contactInfo.email}`,
            `TEL;TYPE=CELL:${PHONE_DIGITS}`,
            `URL:https://salathiel.ojage.com`,
            `ADR;TYPE=WORK:;;Buea;;Cameroon`,
            'END:VCARD',
        ].join('\r\n');
        const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'ojage_salathiel_ayuk.vcf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        toast({
            title: 'vCard downloaded',
            description: 'Save it straight into your contacts.',
            status: 'success',
            duration: 2500,
            isClosable: true,
        });
    };

    const setField = (field: keyof FormState, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const validate = (): FormErrors => {
        const next: FormErrors = {};
        if (!form.name.trim()) next.name = 'Please tell me your name.';
        else if (form.name.trim().length < 2) next.name = 'Name must be at least 2 characters.';
        if (form.email.trim() && !validateEmail(form.email.trim()))
            next.email = 'That email address does not look valid.';
        if (!form.message.trim()) next.message = 'Please add a short message.';
        else if (form.message.trim().length < 10)
            next.message = `Make it a little longer (${form.message.trim().length}/10 minimum).`;
        setErrors(next);
        return next;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Honeypot: bots that fill the hidden field are silently "accepted"
        if (honeypot) {
            setSent(true);
            window.setTimeout(() => setSent(false), 6000);
            return;
        }
        const next = validate();
        if (next.name || next.email || next.message) {
            toast({
                title: 'Almost there',
                description: 'Please fix the highlighted fields.',
                status: 'warning',
                duration: 2500,
                isClosable: true,
            });
            if (next.name) messageBox.current?.querySelector<HTMLInputElement>('#contact-name')?.focus();
            return;
        }

        setSending(true);
        window.setTimeout(() => {
            const subject = encodeURIComponent(
                `[Portfolio Contact] ${form.subject ? `${form.subject} — ` : ''}${form.name.trim()}`
            );
            const body = encodeURIComponent(
                `${form.message.trim()}\n\n— ${form.name.trim()}${form.email.trim() ? ` (${form.email.trim()})` : ''}`
            );
            window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
            setSending(false);
            setSent(true);
            window.setTimeout(() => setSent(false), 6000);
        }, 650);
    };

    const handleReset = () => {
        setForm(emptyForm);
        setErrors({});
        setSent(false);
        setHoneypot('');
        if (messageRef.current) {
            messageRef.current.style.height = 'auto';
        }
    };

    const autoResize = () => {
        const el = messageRef.current;
        if (!el) return;
        el.style.height = 'auto';
        el.style.height = `${Math.min(el.scrollHeight, 340)}px`;
    };

    const steps = [
        { index: '01', title: 'You reach out', body: 'Send a message here, email me, or ping me on WhatsApp.' },
        { index: '02', title: 'I reply fast', body: 'Expect a response within 24–48h — usually quicker on WhatsApp.' },
        { index: '03', title: 'We get going', body: 'A quick call or chat to scope the work, then we kick off.' },
    ];

    return (
        <Box minH="100vh" bg={bgColor} mt="4rem" py={16} position="relative" overflow="hidden">
            {/* Ambient backdrop */}
            <Box className="contact-grid no-print" aria-hidden />
            <Box
                className="hero-blob no-print"
                aria-hidden
                w={72}
                h={72}
                top={-16}
                left={-20}
                bg={isDark ? 'rgba(0,255,136,0.14)' : 'rgba(40,167,69,0.12)'}
            />
            <Box
                className="hero-blob no-print"
                aria-hidden
                w={80}
                h={80}
                bottom={-24}
                right={-24}
                bg={isDark ? 'rgba(78,205,196,0.1)' : 'rgba(23,162,184,0.1)'}
                style={{ animationDelay: '4s' }}
            />

            {/* Theme Toggle */}
            <Box
                position="fixed"
                top={{ base: 6, md: 20, lg: 24 }}
                right={{ base: 3, md: 4 }}
                zIndex={1000}
                className="no-print"
            >
                <ThemeToggle />
            </Box>

            <Container maxW="7xl" px={{ base: 4, sm: 6 }} position="relative" zIndex={1}>
                <Reveal amount={0.3}>
                    <SectionHeader title="GET IN TOUCH" color={accentColor} as="h1" />
                </Reveal>

                <Grid templateColumns={{ base: '1fr', lg: '5fr 4fr' }} gap={{ base: 6, md: 8 }}>
                    {/* Contact form */}
                    <Reveal amount={0.1}>
                        <Box
                            ref={messageBox}
                            bg={cardBg}
                            borderRadius="0"
                            border="2px solid"
                            borderColor={secondaryAccent}
                            position="relative"
                            overflow="hidden"
                            p={{ base: 6, md: 8 }}
                        >
                            <Box className="contact-scan no-print" aria-hidden />

                            <HStack justify="space-between" align="center" mb={6} wrap="wrap" gap={3}>
                                <Heading as="h2" size="lg" color={textColor} fontFamily="mono" textTransform="uppercase" letterSpacing="wide">
                                    Send a Message
                                </Heading>
                                <Text
                                    color={onlineNow ? accentColor : tertiaryAccent}
                                    fontFamily="mono"
                                    fontSize="xs"
                                    fontWeight="bold"
                                    letterSpacing="wider"
                                    display="inline-flex"
                                    alignItems="center"
                                    gap={2}
                                >
                                    <Box
                                        as="span"
                                        display="inline-block"
                                        w={2}
                                        h={2}
                                        transform="rotate(45deg)"
                                        bg={onlineNow ? accentColor : tertiaryAccent}
                                        className="pulse-dot no-print"
                                        aria-hidden
                                    />
                                    {onlineNow ? 'ONLINE' : 'OFFLINE'}
                                </Text>
                            </HStack>

                            <form onSubmit={handleSubmit} noValidate aria-describedby="contact-form-note">
                                <VStack spacing={4} align="stretch">
                                    {/* Honeypot (hidden from humans) */}
                                    <Input
                                        name="company"
                                        value={honeypot}
                                        onChange={(e) => setHoneypot(e.target.value)}
                                        aria-hidden="true"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        style={{
                                            position: 'absolute',
                                            left: '-9999px',
                                            width: '1px',
                                            height: '1px',
                                            overflow: 'hidden',
                                        }}
                                    />

                                    {/* Topic select */}
                                    <FormControl isInvalid={false}>
                                        <FormLabel htmlFor="contact-subject" color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" mb={1}>
                                            TOPIC
                                        </FormLabel>
                                        <Select
                                            id="contact-subject"
                                            value={form.subject}
                                            onChange={(e) => setField('subject', e.target.value)}
                                            bg={bgColor}
                                            borderColor={textColor}
                                            borderRadius="0"
                                            color={textColor}
                                            _placeholder={{ color: textColor, opacity: 0.4 }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                            iconColor={accentColor}
                                        >
                                            <option value="" style={{ color: '#000' }}>SELECT A TOPIC (OPTIONAL)…</option>
                                            {engagementTypes.map((topic, idx) => (
                                                <option key={idx} value={topic} style={{ color: '#000' }}>
                                                    {topic}
                                                </option>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    {/* Name */}
                                    <FormControl isInvalid={!!errors.name}>
                                        <FormLabel htmlFor="contact-name" color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" mb={1}>
                                            NAME <Box as="span" color={errors.name ? secondaryAccent : tertiaryAccent} ml={1}>{`${form.name.length}/${MAX.name}`}</Box>
                                        </FormLabel>
                                        <Input
                                            id="contact-name"
                                            type="text"
                                            value={form.name}
                                            onChange={(e) => setField('name', e.target.value)}
                                            placeholder="Your name"
                                            maxLength={MAX.name}
                                            aria-required="true"
                                            aria-invalid={!!errors.name}
                                            aria-describedby={errors.name ? 'contact-name-error' : undefined}
                                            bg={bgColor}
                                            borderColor={errors.name ? secondaryAccent : textColor}
                                            borderRadius="0"
                                            color={textColor}
                                            _placeholder={{ color: textColor, opacity: 0.4 }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                        {errors.name && (
                                            <FormErrorMessage id="contact-name-error" role="alert" fontFamily="mono" fontSize="xs">
                                                {errors.name}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>

                                    {/* Email */}
                                    <FormControl isInvalid={!!errors.email}>
                                        <FormLabel htmlFor="contact-email" color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" mb={1}>
                                            EMAIL <Box as="span" color={errors.email ? secondaryAccent : tertiaryAccent} ml={1}>{`${form.email.length}/${MAX.email}`}</Box>
                                        </FormLabel>
                                        <Input
                                            id="contact-email"
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => setField('email', e.target.value)}
                                            placeholder="your@email.com"
                                            maxLength={MAX.email}
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? 'contact-email-error' : undefined}
                                            bg={bgColor}
                                            borderColor={errors.email ? secondaryAccent : textColor}
                                            borderRadius="0"
                                            color={textColor}
                                            _placeholder={{ color: textColor, opacity: 0.4 }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                        {errors.email && (
                                            <FormErrorMessage id="contact-email-error" role="alert" fontFamily="mono" fontSize="xs">
                                                {errors.email}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>

                                    {/* Message */}
                                    <FormControl isInvalid={!!errors.message}>
                                        <FormLabel htmlFor="contact-message" color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" mb={1}>
                                            MESSAGE{' '}
                                            <Box
                                                as="span"
                                                ml={1}
                                                color={form.message.length > MAX.message - 80 ? secondaryAccent : tertiaryAccent}
                                            >
                                                {`${form.message.length}/${MAX.message}`}
                                            </Box>
                                        </FormLabel>
                                        <Textarea
                                            id="contact-message"
                                            ref={messageRef}
                                            value={form.message}
                                            onChange={(e) => {
                                                setField('message', e.target.value);
                                                autoResize();
                                            }}
                                            placeholder={`Tell me about your project…\n\nLet me know: what you're building, your timeline, and your budget range.`}
                                            rows={6}
                                            maxLength={MAX.message}
                                            resize="none"
                                            aria-required="true"
                                            aria-invalid={!!errors.message}
                                            aria-describedby={errors.message ? 'contact-message-error' : undefined}
                                            bg={bgColor}
                                            borderColor={errors.message ? secondaryAccent : textColor}
                                            borderRadius="0"
                                            color={textColor}
                                            _placeholder={{ color: textColor, opacity: 0.4 }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                            minH="140px"
                                        />
                                        {errors.message && (
                                            <FormErrorMessage id="contact-message-error" role="alert" fontFamily="mono" fontSize="xs">
                                                {errors.message}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>

                                    {/* Post-send success banner */}
                                    {sent && (
                                        <HStack
                                            spacing={3}
                                            bg={isDark ? 'rgba(0,255,136,0.08)' : 'rgba(40,167,69,0.1)'}
                                            border="2px solid"
                                            borderColor={accentColor}
                                            p={3}
                                            role="status"
                                            aria-live="polite"
                                        >
                                            <Icon as={FaCheckCircle} color={accentColor} boxSize={5} aria-hidden />
                                            <Text color={textColor} fontSize="sm" fontFamily="mono">
                                                Message ready — your email client should be opening. If it didn&apos;t, email me directly at {contactInfo.email}.
                                            </Text>
                                        </HStack>
                                    )}

                                    {/* Actions */}
                                    <HStack spacing={3} wrap="wrap">
                                        <Button
                                            type="submit"
                                            isDisabled={sending || !form.message.trim()}
                                            leftIcon={sending ? <Spinner size="sm" speed="0.8s" /> : undefined}
                                            rightIcon={sending ? undefined : <FaPaperPlane />}
                                            borderRadius="0"
                                            bg={accentColor}
                                            color="black"
                                            fontFamily="mono"
                                            fontWeight="bold"
                                            textTransform="uppercase"
                                            letterSpacing="wider"
                                            _hover={{ opacity: 0.9 }}
                                        >
                                            {sending ? 'Preparing…' : 'Send'}
                                        </Button>
                                        <Button
                                            type="button"
                                            onClick={handleReset}
                                            isDisabled={sending}
                                            leftIcon={<FaTimes />}
                                            borderRadius="0"
                                            bg="transparent"
                                            color={textColor}
                                            border="2px solid"
                                            borderColor={textColor}
                                            fontFamily="mono"
                                            fontWeight="bold"
                                            textTransform="uppercase"
                                            letterSpacing="wider"
                                            _hover={{ bg: textColor, color: textColor === '#212529' ? 'white' : 'black' }}
                                        >
                                            Clear
                                        </Button>
                                    </HStack>
                                </VStack>
                            </form>

                            <Text id="contact-form-note" color={textColor} opacity={0.6} fontSize="xs" fontFamily="mono" mt={4}>
                                * The button opens your email client with the message pre-filled (no backend).
                            </Text>
                        </Box>
                    </Reveal>

                    {/* Right column */}
                    <VStack spacing={{ base: 6, md: 8 }} align="stretch">
                        <Reveal delay={0.1} amount={0.15}>
                            {/* Availability card */}
                            <Box bg={cardBg} borderRadius="0" border="2px solid" borderColor={accentColor} p={{ base: 5, md: 6 }} position="relative">
                                <HStack spacing={3} mb={3}>
                                    <Box p={2} border="2px solid" borderColor={accentColor} boxShadow={`3px 3px 0 ${isDark ? accentColor + '22' : accentColor + '18'}`}>
                                        <Icon as={FaRegClock} color={accentColor} boxSize={4} aria-hidden />
                                    </Box>
                                    <Text color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
                                        Availability
                                    </Text>
                                </HStack>

                                <HStack spacing={3} align="baseline" mb={2}>
                                    <Text
                                        color={textColor}
                                        fontFamily="mono"
                                        fontSize={{ base: '3xl', md: '4xl' }}
                                        fontWeight="bold"
                                        lineHeight={1}
                                        aria-label={`${localTime} West Africa Time`}
                                    >
                                        {localTime}
                                    </Text>
                                    <Text color={isDark ? '#a0aec0' : '#4a5568'} fontFamily="mono" fontSize="sm">
                                        WAT
                                    </Text>
                                </HStack>

                                <HStack spacing={2} mb={3} wrap="wrap">
                                    <Box
                                        as="span"
                                        display="inline-block"
                                        w={2}
                                        h={2}
                                        transform="rotate(45deg)"
                                        bg={onlineNow ? accentColor : tertiaryAccent}
                                        className="pulse-dot no-print"
                                        aria-hidden
                                    />
                                    <Text color={textColor} fontSize="sm" fontFamily="mono">
                                        {onlineNow
                                            ? 'Usually online during working hours'
                                            : 'Away right now — replies within 24–48h'}
                                    </Text>
                                </HStack>

                                <HStack spacing={2}>
                                    <Text
                                        color={accentColor}
                                        fontFamily="mono"
                                        fontSize="xs"
                                        fontWeight="bold"
                                        letterSpacing="wider"
                                        textTransform="uppercase"
                                        border="2px solid"
                                        borderColor={accentColor}
                                        px={3}
                                        py={1.5}
                                    >
                                        ↔ 24–48H RESPONSE
                                    </Text>
                                    <HStack spacing={2} align="center" wrap="wrap">
                                        <Icon as={FaMapMarkerAlt} color={tertiaryAccent} boxSize={3.5} aria-hidden />
                                        <Text color={isDark ? '#a0aec0' : '#4a5568'} fontFamily="mono" fontSize="xs">
                                            Buea, Cameroon · 4.16° N, 9.26° E
                                        </Text>
                                    </HStack>
                                </HStack>
                            </Box>
                        </Reveal>

                        <Reveal delay={0.15} amount={0.1}>
                            <Box>
                                <Heading as="h2" size="lg" color={textColor} fontFamily="mono" textTransform="uppercase" letterSpacing="wide" mb={4}>
                                    Direct Channels
                                </Heading>
                                <VStack spacing={4} align="stretch">
                                    {/* Email tile */}
                                    <MagneticButton strength={0.12}>
                                        <Box className="channel-tile" bg={cardBg} borderRadius="0" border="2px solid" borderColor={accentColor} p={4}>
                                            <HStack spacing={3} mb={2}>
                                                <Box p={2} border="2px solid" borderColor={accentColor} boxShadow={`3px 3px 0 ${isDark ? accentColor + '22' : accentColor + '18'}`}>
                                                    <Icon as={FaEnvelope} color={accentColor} boxSize={4} aria-hidden />
                                                </Box>
                                                <Text color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" textTransform="uppercase">Email</Text>
                                            </HStack>
                                            <Text color={textColor} fontSize="md" fontFamily="mono" mb={3} wordBreak="break-all">
                                                {contactInfo.email}
                                            </Text>
                                            <HStack spacing={2}>
                                                <Tooltip label="Copy email address" aria-label="Copy email address" placement="top">
                                                    <Button size="xs" leftIcon={<FaCopy />} onClick={() => handleCopy(contactInfo.email, 'Email')} borderRadius="0" bg="transparent" color={textColor} border="2px solid" borderColor={textColor} _hover={{ bg: accentColor, color: 'black', borderColor: accentColor }} fontFamily="mono" fontWeight="bold" textTransform="uppercase">
                                                        Copy
                                                    </Button>
                                                </Tooltip>
                                                <Button as="a" href={`mailto:${contactInfo.email}`} size="xs" leftIcon={<FaPaperPlane />} borderRadius="0" bg={accentColor} color="black" _hover={{ opacity: 0.9 }} fontFamily="mono" fontWeight="bold" textTransform="uppercase">
                                                    Compose
                                                </Button>
                                            </HStack>
                                        </Box>
                                    </MagneticButton>

                                    {/* WhatsApp tile */}
                                    <MagneticButton strength={0.12}>
                                        <Box className="channel-tile" bg={cardBg} borderRadius="0" border="2px solid" borderColor={tertiaryAccent} p={4}>
                                            <HStack spacing={3} mb={2}>
                                                <Box p={2} border="2px solid" borderColor={tertiaryAccent} boxShadow={`3px 3px 0 ${isDark ? tertiaryAccent + '22' : tertiaryAccent + '18'}`}>
                                                    <Icon as={FaWhatsapp} color={tertiaryAccent} boxSize={4} aria-hidden />
                                                </Box>
                                                <Text color={tertiaryAccent} fontFamily="mono" fontSize="sm" fontWeight="bold" textTransform="uppercase">WhatsApp</Text>
                                            </HStack>
                                            <Text color={textColor} fontSize="md" fontFamily="mono" mb={3}>
                                                {contactInfo.phone} — fastest reply
                                            </Text>
                                            <HStack spacing={2}>
                                                <Tooltip label="Copy phone number" aria-label="Copy phone number" placement="top">
                                                    <Button size="xs" leftIcon={<FaCopy />} onClick={() => handleCopy(contactInfo.phone, 'Phone')} borderRadius="0" bg="transparent" color={textColor} border="2px solid" borderColor={textColor} _hover={{ bg: tertiaryAccent, color: 'black', borderColor: tertiaryAccent }} fontFamily="mono" fontWeight="bold" textTransform="uppercase">
                                                        Copy
                                                    </Button>
                                                </Tooltip>
                                                <Button as="a" href={whatsappHref} target="_blank" rel="noopener noreferrer" size="xs" leftIcon={<FaWhatsapp />} borderRadius="0" bg={tertiaryAccent} color="black" _hover={{ opacity: 0.9 }} fontFamily="mono" fontWeight="bold" textTransform="uppercase">
                                                    Chat
                                                </Button>
                                            </HStack>
                                        </Box>
                                    </MagneticButton>

                                    {/* Phone tile */}
                                    <Box className="channel-tile" bg={cardBg} borderRadius="0" border="2px solid" borderColor={secondaryAccent} p={4}>
                                        <HStack spacing={3} mb={2}>
                                            <Box p={2} border="2px solid" borderColor={secondaryAccent} boxShadow={`3px 3px 0 ${isDark ? secondaryAccent + '22' : secondaryAccent + '18'}`}>
                                                <Icon as={FaPhoneAlt} color={secondaryAccent} boxSize={4} aria-hidden />
                                            </Box>
                                            <Text color={secondaryAccent} fontFamily="mono" fontSize="sm" fontWeight="bold" textTransform="uppercase">Phone</Text>
                                        </HStack>
                                        <Text as="a" href={`tel:${PHONE_DIGITS}`} color={textColor} fontSize="md" fontFamily="mono" mb={3} display="block" _hover={{ color: secondaryAccent }}>
                                            {contactInfo.phone}
                                        </Text>
                                        <HStack spacing={2}>
                                            <Tooltip label="Copy phone number" aria-label="Copy phone number" placement="top">
                                                <Button size="xs" leftIcon={<FaCopy />} onClick={() => handleCopy(contactInfo.phone, 'Phone')} borderRadius="0" bg="transparent" color={textColor} border="2px solid" borderColor={textColor} _hover={{ bg: secondaryAccent, color: 'black', borderColor: secondaryAccent }} fontFamily="mono" fontWeight="bold" textTransform="uppercase">
                                                    Copy
                                                </Button>
                                            </Tooltip>
                                            <Button as="a" href={`tel:${PHONE_DIGITS}`} size="xs" leftIcon={<FaPhoneAlt />} borderRadius="0" bg={secondaryAccent} color="white" _hover={{ opacity: 0.9 }} fontFamily="mono" fontWeight="bold" textTransform="uppercase">
                                                Call
                                            </Button>
                                        </HStack>
                                    </Box>

                                    {/* Utility row */}
                                    <HStack spacing={3} wrap="wrap">
                                        <MagneticButton strength={0.12}>
                                            <Button
                                                size="sm"
                                                onClick={handleDownloadVCard}
                                                leftIcon={<FaAddressCard />}
                                                borderRadius="0"
                                                bg="transparent"
                                                color={accentColor}
                                                border="2px solid"
                                                borderColor={accentColor}
                                                fontFamily="mono"
                                                fontWeight="bold"
                                                textTransform="uppercase"
                                                fontSize="xs"
                                                letterSpacing="wider"
                                                _hover={{ bg: accentColor, color: 'black' }}
                                            >
                                                Save My vCard
                                            </Button>
                                        </MagneticButton>
                                        <Button
                                            size="sm"
                                            onClick={handleCopyAll}
                                            leftIcon={<FaCopy />}
                                            borderRadius="0"
                                            bg="transparent"
                                            color={textColor}
                                            border="2px solid"
                                            borderColor={textColor}
                                            fontFamily="mono"
                                            fontWeight="bold"
                                            textTransform="uppercase"
                                            fontSize="xs"
                                            letterSpacing="wider"
                                            _hover={{ bg: textColor, color: textColor === '#212529' ? 'white' : 'black' }}
                                        >
                                            Copy All Details
                                        </Button>
                                    </HStack>
                                </VStack>
                            </Box>
                        </Reveal>

                        <Reveal delay={0.2} amount={0.1}>
                            <Box>
                                <HStack spacing={3} mb={3}>
                                    <Icon as={FaGithub} color={accentColor} boxSize={5} aria-hidden />
                                    <Icon as={FaLinkedinIn} color={accentColor} boxSize={5} aria-hidden />
                                    <Text color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
                                        Elsewhere
                                    </Text>
                                </HStack>
                                <SimpleGrid columns={{ base: 2, sm: 3, md: 2, lg: 3 }} spacing={3}>
                                    <Link href={github} isExternal rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
                                        <Box className="social-tile" bg={cardBg} border="2px solid" borderColor={textColor} p={3} textAlign="center" minH="96px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={2} _hover={{ borderColor: accentColor, boxShadow: `0 8px 24px -12px ${accentColor}` }}>
                                            <Icon as={FaGithub} color={textColor} boxSize={5} aria-hidden />
                                            <Text color={textColor} fontFamily="mono" fontSize="xs" fontWeight="bold" textTransform="uppercase">GitHub · ojage</Text>
                                        </Box>
                                    </Link>
                                    <Link href={linkedin} isExternal rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
                                        <Box className="social-tile" bg={cardBg} border="2px solid" borderColor={textColor} p={3} textAlign="center" minH="96px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={2} _hover={{ borderColor: tertiaryAccent, boxShadow: `0 8px 24px -12px ${tertiaryAccent}` }}>
                                            <Icon as={FaLinkedinIn} color={textColor} boxSize={5} aria-hidden />
                                            <Text color={textColor} fontFamily="mono" fontSize="xs" fontWeight="bold" textTransform="uppercase">LinkedIn · ojage-sala</Text>
                                        </Box>
                                    </Link>
                                    {navSocialLinks
                                        .filter((social) => !social.href.includes('linkedin'))
                                        .map((social) => (
                                        <Link key={social.label} href={social.href} isExternal rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
                                            <Box className="social-tile" bg={cardBg} border="2px solid" borderColor={textColor} p={3} textAlign="center" minH="96px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={2} _hover={{ borderColor: accentColor, boxShadow: `0 8px 24px -12px ${accentColor}` }}>
                                                <Icon as={social.icon} color={textColor} boxSize={5} aria-hidden />
                                                <Text color={textColor} fontFamily="mono" fontSize="xs" fontWeight="bold" textTransform="uppercase">{social.label}</Text>
                                            </Box>
                                        </Link>
                                    ))}
                                </SimpleGrid>
                            </Box>
                        </Reveal>
                    </VStack>
                </Grid>

                {/* What happens next */}
                <Reveal amount={0.1}>
                    <Box mt={{ base: 10, md: 14 }}>
                        <SectionHeader title="WHAT HAPPENS NEXT" color={tertiaryAccent} marginBottom={6} />
                        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 4, md: 6 }}>
                            {steps.map((step, i) => {
                                const stepAccent = i === 0 ? accentColor : i === 1 ? secondaryAccent : tertiaryAccent;
                                return (
                                    <Box key={step.index} className="step-square" bg={cardBg} border="2px solid" borderColor={stepAccent} p={{ base: 5, md: 6 }} position="relative">
                                        <MotionBarTop accent={stepAccent} />
                                        <HStack spacing={3} mb={3}>
                                            <Text color={stepAccent} fontFamily="mono" fontSize="lg" fontWeight="bold">
                                                {step.index}
                                            </Text>
                                            <Text color={stepAccent} fontFamily="mono" fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
                                                {step.title}
                                            </Text>
                                        </HStack>
                                        <Text color={textColor} fontSize="sm" lineHeight="tall">
                                            {step.body}
                                        </Text>
                                    </Box>
                                );
                            })}
                        </SimpleGrid>
                    </Box>
                </Reveal>

                {/* Footer micro-copy */}
                <Reveal amount={0.4}>
                    <HStack as="footer" justify="space-between" align="center" wrap="wrap" gap={3} mt={{ base: 10, md: 14 }} pb={4} borderTop="1px solid" borderColor={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'} pt={6}>
                        <Text color={isDark ? '#a0aec0' : '#4a5568'} fontSize="xs" fontFamily="mono">
                            © {new Date().getFullYear()} Ojage Salathiel Ayuk · Buea, Cameroon
                        </Text>
                        <Link href="#main-content" color={accentColor} fontFamily="mono" fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" _hover={{ opacity: 0.8 }}>
                            <HStack spacing={1.5}>
                                <Icon as={FaArrowUp} boxSize={3} aria-hidden />
                                <Text as="span">Back to top</Text>
                            </HStack>
                        </Link>
                    </HStack>
                </Reveal>
            </Container>
        </Box>
    );
};

const MotionBarTop: React.FC<{ accent: string }> = ({ accent }) => (
    <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="3px"
        bg={accent}
        aria-hidden
    />
);

export default Contact;