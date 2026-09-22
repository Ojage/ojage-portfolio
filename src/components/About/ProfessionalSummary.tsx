// components/About/ProfessionalSummary.tsx
import React from 'react';
import { Box, Heading, Text, HStack, Icon, VStack } from '@chakra-ui/react';
import { FaLightbulb } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import { useAboutThemeConstants } from '../../hooks/useAboutThemeConstants';

interface ProfessionalSummaryProps {
    summary: string;
}

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
            <VStack align="start" spacing={{ base: 4, md: 6 }} width="full">
                {/* Header with Icon */}
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

                {/* Summary Content */}
                <Text
                    color={theme.primaryText}
                    fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}
                    lineHeight={{ base: 'tall', md: 'taller' }}
                    letterSpacing="0.01em"
                    maxW={{ base: 'none', lg: '65ch' }}
                    fontWeight="400"
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
                                visible: { transition: { staggerChildren: 0.012, delayChildren: 0.2 } },
                            }}
                        >
                            {words.map((word, i) => (
                                <motion.span
                                    key={i}
                                    style={{ display: 'inline-block', marginRight: '0.3em' }}
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