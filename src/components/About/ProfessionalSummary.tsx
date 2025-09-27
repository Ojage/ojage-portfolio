// components/About/ProfessionalSummary.tsx
import React from 'react';
import { Box, Heading, Text, HStack, Icon, VStack } from '@chakra-ui/react';
import { FaLightbulb } from 'react-icons/fa';
import { useAboutThemeConstants } from '../../hooks/useAboutThemeConstants';

interface ProfessionalSummaryProps {
    summary: string;
}

const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({ summary }) => {
    const theme = useAboutThemeConstants();

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
                    <Box
                        p={{ base: 2, sm: 2.5, md: 3 }}
                        bg={theme.accent}
                        borderRadius="0"
                        border="2px solid"
                        borderColor={theme.accent}
                        flexShrink={0}
                        aria-label="Professional summary icon"
                    >
                        <Icon as={FaLightbulb} color="black" boxSize={{ base: 5, sm: 6, md: 7 }} aria-hidden />
                    </Box>

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
                    {summary}
                </Text>

                {/* Bottom accent line */}
                <Box w="full" h={{ base: '1px', md: '2px' }} bg={theme.accent} mt={{ base: 1, md: 2 }} />
            </VStack>
        </Box>
    );
};

export default ProfessionalSummary;
