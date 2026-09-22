import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Icon,
    Link,
    Wrap,
    WrapItem,
    Stack,
} from '@chakra-ui/react';
import {
    FaEnvelope,
    FaPhone,
    FaLinkedin,
    FaGlobe,
    FaMapMarkerAlt,
    FaUser,
} from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import { useAboutThemeConstants } from '../../hooks/useAboutThemeConstants';
import { PersonalInfo } from '../../data/aboutData';

interface PersonalHeaderProps {
    personal: PersonalInfo;
}

const PersonalHeader: React.FC<PersonalHeaderProps> = ({ personal }) => {
    const theme = useAboutThemeConstants();
    const reduce = useReducedMotion();

    const nameLetters = personal.name.split('');
    const titleWords = personal.title ? personal.title.split(' ') : [];

    const contactItems = [
        {
            icon: FaEnvelope,
            text: personal.email,
            href: personal.email ? `mailto:${personal.email}` : undefined,
            label: 'Email',
            aria: personal.email ? `Email ${personal.email}` : 'Email',
        },
        {
            icon: FaPhone,
            text: personal.phone,
            href: personal.phone ? `tel:${personal.phone}` : undefined,
            label: 'Phone',
            aria: personal.phone ? `Call ${personal.phone}` : 'Phone',
        },
        { icon: FaMapMarkerAlt, text: personal.location, label: 'Location', aria: 'Location' },
        {
            icon: FaLinkedin,
            text: personal.linkedin ? 'LinkedIn' : undefined,
            href: personal.linkedin,
            label: 'LinkedIn',
            aria: 'Open LinkedIn profile',
        },
        {
            icon: FaGlobe,
            text: personal.website ? 'Portfolio' : undefined,
            href: personal.website,
            label: 'Website',
            aria: 'Open portfolio website',
        },
    ].filter((i) => Boolean(i.text));

    return (
        <Box
            bg={theme.cardBg}
            borderRadius="0"
            p={{ base: 4, sm: 6, md: 8, lg: 10 }}
            border="2px solid"
            borderColor={theme.cardBorder}
            position="relative"
            overflow="hidden"
        >
            {/* Blueprint grid overlay */}
            <Box className="blueprint-grid" position="absolute" inset={0} pointerEvents="none" />

            {/* Accent baseline that draws in */}
            <motion.div
                style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '3px', originX: 0 }}
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
            >
                <Box h="full" bg={theme.headerGradient} />
            </motion.div>

            <VStack align="start" spacing={{ base: 4, md: 6 }} width="full" position="relative">
                {/* Header */}
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    spacing={{ base: 3, sm: 4, md: 6 }}
                    align={{ base: 'start', sm: 'center' }}
                    w="full"
                >
                    {/* Icon */}
                    <motion.div
                        initial={reduce ? false : { opacity: 0, rotate: -8, scale: 0.9 }}
                        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        <Box
                            p={{ base: 2.5, sm: 3, md: 4 }}
                            bg={theme.accent}
                            borderRadius="0"
                            border="2px solid"
                            borderColor={theme.accent}
                            flexShrink={0}
                            aria-label="Profile"
                            boxShadow={`6px 6px 0 ${theme.accentLight}`}
                        >
                            <Icon as={FaUser} color="black" boxSize={{ base: 7, sm: 8, md: 10 }} />
                        </Box>
                    </motion.div>

                    {/* Name + Title */}
                    <VStack align="start" spacing={{ base: 1, md: 2 }} minW={0} flex={1}>
                        <Text
                            color={theme.accent}
                            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                            fontFamily="mono"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wider"
                        >
                            01_PERSONAL_INFO
                        </Text>

                        <Heading
                            as="h1"
                            color={theme.primaryText}
                            fontFamily="mono"
                            textTransform="uppercase"
                            letterSpacing="wide"
                            lineHeight={1.2}
                            fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                        >
                            {reduce ? (
                                <span>{personal.name}</span>
                            ) : (
                                <motion.span
                                    style={{ display: 'inline-flex', flexWrap: 'wrap' }}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: {},
                                        visible: { transition: { staggerChildren: 0.035, delayChildren: 0.15 } },
                                    }}
                                >
                                    {nameLetters.map((ch, i) => (
                                        <motion.span
                                            key={i}
                                            style={{ display: 'inline-block', whiteSpace: 'pre' }}
                                            variants={{
                                                hidden: { opacity: 0, y: 14 },
                                                visible: { opacity: 1, y: 0 },
                                            }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            {ch}
                                        </motion.span>
                                    ))}
                                </motion.span>
                            )}
                        </Heading>

                        {personal.title && (
                            <Text
                                fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                                color={theme.accent}
                                fontFamily="mono"
                                fontWeight="600"
                                textTransform="uppercase"
                                letterSpacing="wider"
                                sx={{ overflowWrap: 'anywhere' }}
                            >
                                {reduce ? (
                                    <span>{personal.title}</span>
                                ) : (
                                    <motion.span
                                        style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.35em' }}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={{
                                            hidden: {},
                                            visible: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } },
                                        }}
                                    >
                                        {titleWords.map((word, i) => (
                                            <motion.span
                                                key={i}
                                                variants={{
                                                    hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
                                                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                                }}
                                                transition={{ duration: 0.45, ease: 'easeOut' }}
                                            >
                                                {word}
                                            </motion.span>
                                        ))}
                                    </motion.span>
                                )}
                            </Text>
                        )}
                    </VStack>
                </Stack>

                {/* Contacts */}
                <Box width="full">
                    <Text
                        color={theme.accent}
                        fontSize={{ base: 'xs', sm: 'sm' }}
                        fontFamily="mono"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        mb={{ base: 2, sm: 3, md: 4 }}
                    >
                        Contact Details:
                    </Text>

                    <Wrap spacing={{ base: 3, sm: 4, md: 6 }} align="center">
                        {contactItems.map((item, index) => {
                            const isHttp = Boolean(item.href && item.href.startsWith('http'));
                            return (
                                <WrapItem key={`${item.label}-${index}`}>
                                    <HStack
                                        spacing={{ base: 2, sm: 3 }}
                                        minW={0}
                                        _hover={{ transform: 'translateY(-2px)' }}
                                        sx={{ transition: 'transform 0.2s ease' }}
                                    >
                                        <Box
                                            p={{ base: 1.5, sm: 2 }}
                                            bg="transparent"
                                            border="2px solid"
                                            borderColor={theme.contactIcon}
                                            borderRadius="0"
                                            flexShrink={0}
                                        >
                                            <Icon as={item.icon} color={theme.contactIcon} boxSize={{ base: 3.5, sm: 4 }} />
                                        </Box>

                                        <VStack align="start" spacing={0} minW={0}>
                                            <Text
                                                color={theme.mutedText}
                                                fontSize={{ base: '10px', sm: 'xs' }}
                                                fontFamily="mono"
                                                textTransform="uppercase"
                                                fontWeight="bold"
                                            >
                                                {item.label}
                                            </Text>

                                            {item.href ? (
                                                <Link
                                                    href={item.href}
                                                    color={theme.primaryText}
                                                    fontSize={{ base: 'sm', sm: 'sm' }}
                                                    fontWeight="500"
                                                    _hover={{ color: theme.accent, textDecoration: 'underline' }}
                                                    isExternal={isHttp}
                                                    rel={isHttp ? 'noopener noreferrer' : undefined}
                                                    fontFamily="mono"
                                                    aria-label={item.aria}
                                                    sx={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                                                >
                                                    {item.text}
                                                </Link>
                                            ) : (
                                                <Text
                                                    color={theme.primaryText}
                                                    fontSize={{ base: 'sm', sm: 'sm' }}
                                                    fontWeight="500"
                                                    fontFamily="mono"
                                                    sx={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                                                >
                                                    {item.text}
                                                </Text>
                                            )}
                                        </VStack>
                                    </HStack>
                                </WrapItem>
                            );
                        })}
                    </Wrap>
                </Box>
            </VStack>
        </Box>
    );
};

export default PersonalHeader;