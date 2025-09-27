import React from 'react';
import { Box, Heading, Text, HStack, Icon, VStack } from "@chakra-ui/react";
import { FaLightbulb } from "react-icons/fa";
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
            p={{ base: 6, md: 10 }}
            border="2px solid"
            borderColor={theme.cardBorder}
            position="relative"
            overflow="hidden"
        >
            <VStack align="start" spacing={6} width="full">
                {/* Header with Icon */}
                <HStack spacing={4} align="center">
                    <Box
                        p={3}
                        bg={theme.accent}
                        borderRadius="0"
                        border="2px solid"
                        borderColor={theme.accent}
                    >
                        <Icon
                            as={FaLightbulb}
                            color="black"
                            boxSize={6}
                        />
                    </Box>

                    <VStack align="start" spacing={1}>
                        <Text
                            color={theme.accent}
                            fontSize="sm"
                            fontFamily="mono"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wider"
                        >
                            02_PROFESSIONAL_SUMMARY
                        </Text>
                        <Heading
                            as="h2"
                            size="xl"
                            color={theme.primaryText}
                            fontFamily="mono"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            About Me
                        </Heading>
                    </VStack>
                </HStack>

                {/* Summary Content */}
                <Text
                    color={theme.primaryText}
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="tall"
                    letterSpacing="0.01em"
                    maxW="none"
                    fontWeight="400"
                >
                    {summary}
                </Text>

                {/* Bottom accent line */}
                <Box
                    w="full"
                    h="2px"
                    bg={theme.accent}
                    mt={2}
                />
            </VStack>
        </Box>
    );
};

export default ProfessionalSummary;