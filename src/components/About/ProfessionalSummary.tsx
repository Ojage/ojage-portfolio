// components/About/ProfessionalSummary.tsx
import React from 'react';
import { Box, Heading, Text, HStack, Icon, VStack } from '@chakra-ui/react';
import { FaLightbulb } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import { useAboutThemeConstants } from '../../hooks/useAboutThemeConstants';

interface ProfessionalSummaryProps {
    summary: string;
}

const corners = [
    { key: 'tl', top: 0, left: 0, borderTopWidth: 2, borderRightWidth: 0, borderBottomWidth: 0, borderLeftWidth: 2 },
    { key: 'tr', top: 0, right: 0, borderTopWidth: 2, borderRightWidth: 2, borderBottomWidth: 0, borderLeftWidth: 0 },
    { key: 'bl', bottom: 0, left: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 2, borderLeftWidth: 2 },
    { key: 'br', bottom: 0, right: 0, borderTopWidth: 0, borderRightWidth: 2, borderBottomWidth: 2, borderLeftWidth: 0 },
];

const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({ summary }) => {
    const theme = useAboutThemeConstants();
    const reduce = useReducedMotion();
    const words = summary.split(' ');

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
            {/* Drifting aurora glow + scan line */}
            <Box className="ps-aurora no-print" aria-hidden />
            <Box className="ps-scan no-print" aria-hidden />

            {/* HUD corner brackets */}
            {corners.map((c, i) => {
                const { key, ...borderProps } = c;
                return (
                    <motion.div
                        key={key}
                        style={{
                            position: 'absolute',
                            width: 18,
                            height: 18,
                            top: c.top,
                            right: c.right,
                            bottom: c.bottom,
                            left: c.left,
                            zIndex: 2,
                            pointerEvents: 'none',
                        }}
                        initial={reduce ? false : { opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.1 }}
                    >
                        <Box w="full" h="full" borderColor={theme.accent} borderStyle="solid" {...borderProps} />
                    </motion.div>
                );
            })}

            {/* Floating network SVG */}
            <Box
                className="no-print ps-float"
                position="absolute"
                top={{ md: -4 }}
                right={{ md: -4 }}
                opacity={0.5}
                pointerEvents="none"
                display={{ base: 'none', md: 'block' }}
                aria-hidden
            >
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke={theme.accent} strokeOpacity="0.5" strokeWidth="1">
                        <path className="ps-dash" d="M22 32 L64 72 L104 44" />
                        <path className="ps-dash" d="M64 72 L84 112" style={{ animationDelay: '0.6s' }} />
                        <path className="ps-dash" d="M22 32 L84 112" style={{ animationDelay: '1.2s' }} />
                    </g>
                    <circle cx="22" cy="32" r="3" fill={theme.accent} />
                    <circle cx="64" cy="72" r="4" fill={theme.accent} />
                    <circle cx="104" cy="44" r="3" fill={theme.accent} />
                    <rect x="80" y="108" width="9" height="9" fill="none" stroke={theme.accent} strokeWidth="1.5" />
                    <circle cx="140" cy="10" r="2" fill={theme.tertiaryAccent} />
                </svg>
            </Box>

            {/* Header with Icon */}
            <VStack align="start" spacing={{ base: 4, md: 6 }} width="full" position="relative" zIndex={1}>
                <HStack spacing={{ base: 3, md: 4 }} align="center" w="full">
                    <motion.div
                        initial={reduce ? false : { opacity: 0, rotate: -8, scale: 0.9 }}
                        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        <Box
                            p={{ base: 2, sm: 2.5, md: 3 }}
                            bg={theme.accent}
                            borderRadius="0"
                            border="2px solid"
                            borderColor={theme.accent}
                            flexShrink={0}
                            aria-label="Professional summary icon"
                            boxShadow={`5px 5px 0 ${theme.accentLight}`}
                        >
                            <Icon as={FaLightbulb} color="black" boxSize={{ base: 5, sm: 6, md: 7 }} aria-hidden />
                        </Box>
                    </motion.div>

                    <VStack align="start" spacing={{ base: 0.5, md: 1 }} minW={0}>
                        <Text
                            color={theme.accent}
                            fontSize={{ base: 'xs', sm: 'sm' }}
                            fontFamily="mono"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wider"
                        >
                            02_PROFESSIONAL_SUMMARY
                        </Text>
                        <Heading
                            as="h2"
                            color={theme.primaryText}
                            fontFamily="mono"
                            textTransform="uppercase"
                            letterSpacing="wide"
                            lineHeight={1.2}
                            fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                            noOfLines={{ base: 2, md: undefined }}
                        >
                            About Me
                        </Heading>
                    </VStack>
                </HStack>

                {/* Summary Content - full-width, interactive words */}
                <Text
                    color={theme.primaryText}
                    fontSize={{ base: 'md', sm: 'lg', lg: 'xl' }}
                    lineHeight={{ base: 1.7, md: 1.8 }}
                    letterSpacing="0.01em"
                    fontWeight="400"
                    w="full"
                    textAlign="justify"
                    style={{ '--ps-accent': theme.accent } as React.CSSProperties}
                    sx={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                >
                    {reduce ? (
                        <span>{summary}</span>
                    ) : (
                        <motion.span
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.01, delayChildren: 0.2 } },
                            }}
                        >
                            {words.map((word, i) => (
                                <motion.span
                                    key={i}
                                    className="ps-word"
                                    variants={{
                                        hidden: { opacity: 0, y: 8, filter: 'blur(5px)' },
                                        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                    }}
                                    transition={{ duration: 0.35, ease: 'easeOut' }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.span>
                    )}
                </Text>

                {/* Terminal prompt */}
                <HStack
                    className="no-print"
                    spacing={2}
                    fontFamily="mono"
                    fontSize={{ base: 'xs', sm: 'sm' }}
                    flexWrap="wrap"
                    mt={1}
                    color={theme.secondaryText}
                >
                    <Text as="span" color={theme.accent} fontWeight="bold" aria-hidden>
                        ❯
                    </Text>
                    <Text as="span">npm run deploy -- --profile=full_stack_ai_product_dev</Text>
                    <Text as="span" className="ps-caret" color={theme.accent} aria-hidden>
                        ▍
                    </Text>
                </HStack>

                {/* Bottom accent line */}
                <motion.div
                    style={{ width: '100%', originX: 0 }}
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                >
                    <Box w="full" h={{ base: '1px', md: '2px' }} bg={theme.accent} mt={{ base: 1, md: 2 }} />
                </motion.div>
            </VStack>
        </Box>
    );
};

export default ProfessionalSummary;