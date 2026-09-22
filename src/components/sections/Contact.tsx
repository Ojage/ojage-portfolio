// Contact.tsx
import { useState } from 'react';
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
} from '@chakra-ui/react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaCopy, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { contactInfo, socialLinks } from '../../data/navData';
import { ThemeToggle } from '../common/ThemeToggle';
import { SectionHeader } from '../Home/SectionHeader';

const Contact = () => {
    const { bgColor, cardBg, textColor, accentColor, secondaryAccent } = useThemeConstants();
    const toast = useToast();
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(contactInfo.email);
            toast({
                title: 'Email copied',
                description: `${contactInfo.email} copied to clipboard`,
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

    const handleCopyPhone = async () => {
        try {
            await navigator.clipboard.writeText(contactInfo.phone);
            toast({
                title: 'Phone copied',
                description: `${contactInfo.phone} copied to clipboard`,
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name.trim() || !form.message.trim()) {
            toast({
                title: 'Almost there',
                description: 'Please add your name and a message before sending.',
                status: 'warning',
                duration: 2500,
                isClosable: true,
            });
            return;
        }
        if (form.email.trim() && !form.email.includes('@')) {
            toast({
                title: 'Check your email',
                description: `${form.email} does not look like a valid address.`,
                status: 'warning',
                duration: 2500,
                isClosable: true,
            });
            return;
        }
        const subject = encodeURIComponent(`[Portfolio Contact] ${form.name || 'Inquiry'}`);
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`);
        toast({
            title: 'Opening your email client…',
            description: `Message pre-filled for ${contactInfo.email}`,
            status: 'info',
            duration: 2500,
            isClosable: true,
        });
        window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    };

    const linkedin = socialLinks.find((s) => s.href.includes('linkedin'))?.href ?? 'https://linkedin.com/in/ojage-sala/';
    const github = 'https://github.com/ojage';

    return (
        <Box minH="100vh" bg={bgColor} mt="4rem" py={16} position="relative">
            <Box position="fixed" top={100} right={4} zIndex={1000}>
                <ThemeToggle />
            </Box>

            <Container maxW="6xl" px={8}>
                <SectionHeader title="GET IN TOUCH" color={accentColor} />

                <Grid templateColumns={{ base: '1fr', lg: '5fr 4fr' }} gap={8}>
                    {/* Contact form */}
                    <Box bg={cardBg} borderRadius="0" border="2px solid" borderColor={secondaryAccent} p={{ base: 6, md: 8 }}>
                        <Heading as="h2" size="lg" color={textColor} fontFamily="mono" textTransform="uppercase" letterSpacing="wide" mb={6}>
                            Send a Message
                        </Heading>
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4} align="stretch">
                                <Box>
                                    <Text color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" mb={1}>NAME</Text>
                                    <Input
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        placeholder="Your name"
                                        bg={bgColor}
                                        borderColor={textColor}
                                        borderRadius="0"
                                        color={textColor}
                                        _placeholder={{ color: textColor, opacity: 0.4 }}
                                        _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                    />
                                </Box>
                                <Box>
                                    <Text color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" mb={1}>EMAIL</Text>
                                    <Input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        placeholder="your@email.com"
                                        bg={bgColor}
                                        borderColor={textColor}
                                        borderRadius="0"
                                        color={textColor}
                                        _placeholder={{ color: textColor, opacity: 0.4 }}
                                        _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                    />
                                </Box>
                                <Box>
                                    <Text color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" mb={1}>MESSAGE</Text>
                                    <Textarea
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        placeholder="Tell me about your project…"
                                        rows={6}
                                        bg={bgColor}
                                        borderColor={textColor}
                                        borderRadius="0"
                                        color={textColor}
                                        _placeholder={{ color: textColor, opacity: 0.4 }}
                                        _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                    />
                                </Box>
                                <Button
                                    type="submit"
                                    isDisabled={!form.message.trim()}
                                    rightIcon={<FaPaperPlane />}
                                    borderRadius="0"
                                    bg={accentColor}
                                    color="black"
                                    fontFamily="mono"
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    letterSpacing="wider"
                                    _hover={{ opacity: 0.9 }}
                                    alignSelf="flex-start"
                                >
                                    Send
                                </Button>
                            </VStack>
                        </form>
                        <Text color={textColor} opacity={0.6} fontSize="xs" fontFamily="mono" mt={4}>
                            * The button opens your email client with the message pre-filled (no backend).
                        </Text>
                    </Box>

                    {/* Direct contact info */}
                    <Box bg={cardBg} borderRadius="0" border="2px solid" borderColor={accentColor} p={{ base: 6, md: 8 }}>
                        <Heading as="h2" size="lg" color={textColor} fontFamily="mono" textTransform="uppercase" letterSpacing="wide" mb={6}>
                            Direct Channels
                        </Heading>

                        <VStack align="start" spacing={6}>
                            <Box w="full">
                                <HStack spacing={3} mb={1}>
                                    <Icon as={FaEnvelope} color={accentColor} boxSize={5} />
                                    <Text color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" textTransform="uppercase">EMAIL</Text>
                                </HStack>
                                <HStack justify="space-between" wrap="wrap" gap={2}>
                                    <Text color={textColor} fontSize="md" fontFamily="mono">{contactInfo.email}</Text>
                                    <Tooltip label="Copy email address" aria-label="Copy email address" placement="top">
                                        <Button
                                            onClick={handleCopy}
                                            size="sm"
                                            leftIcon={<FaCopy />}
                                            borderRadius="0"
                                            bg="transparent"
                                            color={textColor}
                                            border="2px solid"
                                            borderColor={textColor}
                                            _hover={{ bg: accentColor, color: 'black', borderColor: accentColor }}
                                        >
                                            Copy
                                        </Button>
                                    </Tooltip>
                                </HStack>
                            </Box>

                            <Box w="full">
                                <HStack spacing={3} mb={1}>
                                    <Icon as={FaPhoneAlt} color={accentColor} boxSize={5} />
                                    <Text color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" textTransform="uppercase">PHONE</Text>
                                </HStack>
                                <HStack justify="space-between" wrap="wrap" gap={2}>
                                    <Text as="a" href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} color={textColor} fontSize="md" fontFamily="mono" _hover={{ color: accentColor }}>
                                        {contactInfo.phone}
                                    </Text>
                                    <HStack spacing={2}>
                                        <Tooltip label="Copy phone number" aria-label="Copy phone number" placement="top">
                                            <Button
                                                onClick={handleCopyPhone}
                                                size="sm"
                                                leftIcon={<FaCopy />}
                                                borderRadius="0"
                                                bg="transparent"
                                                color={textColor}
                                                border="2px solid"
                                                borderColor={textColor}
                                                _hover={{ bg: accentColor, color: 'black', borderColor: accentColor }}
                                            >
                                                Copy
                                            </Button>
                                        </Tooltip>
                                        <Button
                                            as="a"
                                            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                                            size="sm"
                                            leftIcon={<FaPhoneAlt />}
                                            borderRadius="0"
                                            bg="transparent"
                                            color={textColor}
                                            border="2px solid"
                                            borderColor={textColor}
                                            _hover={{ bg: accentColor, color: 'black', borderColor: accentColor }}
                                        >
                                            Call
                                        </Button>
                                    </HStack>
                                </HStack>
                            </Box>

                            <Box w="full">
                                <HStack spacing={3} mb={1}>
                                    <Icon as={FaMapMarkerAlt} color={accentColor} boxSize={5} />
                                    <Text color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" textTransform="uppercase">LOCATION</Text>
                                </HStack>
                                <Text color={textColor} fontSize="md">Buea, Cameroon</Text>
                            </Box>

                            <Box w="full">
                                <HStack spacing={3} mb={3}>
                                    <Icon as={FaGithub} color={accentColor} boxSize={5} />
                                    <Icon as={FaLinkedinIn} color={accentColor} boxSize={5} />
                                    <Text color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold" textTransform="uppercase">SOCIALS</Text>
                                </HStack>
                                <HStack spacing={3} wrap="wrap">
                                    <Button
                                        as={Link}
                                        href={github}
                                        isExternal
                                        size="sm"
                                        leftIcon={<FaGithub />}
                                        borderRadius="0"
                                        bg="transparent"
                                        color={textColor}
                                        border="2px solid"
                                        borderColor={textColor}
                                        _hover={{ bg: accentColor, color: 'black', borderColor: accentColor }}
                                    >
                                        GitHub
                                    </Button>
                                    <Button
                                        as={Link}
                                        href={linkedin}
                                        isExternal
                                        size="sm"
                                        leftIcon={<FaLinkedinIn />}
                                        borderRadius="0"
                                        bg="transparent"
                                        color={textColor}
                                        border="2px solid"
                                        borderColor={textColor}
                                        _hover={{ bg: accentColor, color: 'black', borderColor: accentColor }}
                                    >
                                        LinkedIn
                                    </Button>
                                    {socialLinks
                                        .filter((s) => !s.href.includes('linkedin'))
                                        .map((s) => (
                                            <Button
                                                key={s.label}
                                                as={Link}
                                                href={s.href}
                                                isExternal
                                                size="sm"
                                                borderRadius="0"
                                                bg="transparent"
                                                color={textColor}
                                                border="2px solid"
                                                borderColor={textColor}
                                                _hover={{ bg: accentColor, color: 'black', borderColor: accentColor }}
                                            >
                                                {s.label}
                                            </Button>
                                        ))}
                                </HStack>
                            </Box>
                        </VStack>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;