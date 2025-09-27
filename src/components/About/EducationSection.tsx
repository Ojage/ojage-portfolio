import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    UnorderedList,
    ListItem,
    Icon,
    Stack
} from "@chakra-ui/react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useAboutThemeConstants } from '../../hooks/useAboutThemeConstants';
import { Education } from '../../data/aboutData';

interface EducationSectionProps {
    education: Education[];
}

interface EducationCardProps {
    education: Education;
    index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
    const theme = useAboutThemeConstants();

    return (
        <Box
            bg={theme.cardBg}
            borderRadius="0"
            p={{ base: 6, md: 8 }}
            border="2px solid"
            borderColor={theme.cardBorder}
            position="relative"
            mb={4}
        >
            <VStack align="start" spacing={4}>
                {/* Header with Icon and Degree */}
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    spacing={4}
                    align={{ base: 'start', sm: 'center' }}
                    w="full"
                >
                    <Box
                        p={3}
                        bg={theme.accent}
                        borderRadius="0"
                        border="2px solid"
                        borderColor={theme.accent}
                        flexShrink={0}
                    >
                        <Icon
                            as={FaGraduationCap}
                            color="black"
                            boxSize={6}
                        />
                    </Box>

                    <VStack align="start" spacing={1} flex={1} minW={0}>
                        <Text
                            color={theme.accent}
                            fontSize="sm"
                            fontFamily="mono"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wider"
                        >
                            {String(index + 1).padStart(2, '0')}_EDUCATION
                        </Text>
                        <Heading
                            as="h3"
                            size="lg"
                            color={theme.primaryText}
                            fontFamily="mono"
                            textTransform="uppercase"
                            letterSpacing="wide"
                            fontSize={{ base: 'md', md: 'lg' }}
                            lineHeight={1.2}
                        >
                            {education.degree}
                        </Heading>
                        <Text
                            color={theme.accent}
                            fontSize={{ base: 'sm', md: 'md' }}
                            fontFamily="mono"
                            fontWeight="600"
                        >
                            {education.institution}
                        </Text>
                    </VStack>
                </Stack>

                {/* Meta Information */}
                <HStack
                    spacing={6}
                    wrap="wrap"
                    divider={<Box w="2px" h="4" bg={theme.divider} />}
                >
                    <HStack spacing={2}>
                        <Icon as={FaCalendarAlt} color={theme.accent} size="14px" />
                        <Text
                            color={theme.primaryText}
                            fontSize="sm"
                            fontFamily="mono"
                            fontWeight="bold"
                        >
                            {education.period}
                        </Text>
                    </HStack>
                    <HStack spacing={2}>
                        <Icon as={FaMapMarkerAlt} color={theme.accent} size="14px" />
                        <Text
                            color={theme.primaryText}
                            fontSize="sm"
                            fontFamily="mono"
                            fontWeight="bold"
                        >
                            {education.location}
                        </Text>
                    </HStack>
                </HStack>

                {/* Highlights */}
                {education.highlights && education.highlights.length > 0 && (
                    <Box w="full">
                        <Text
                            color={theme.accent}
                            fontSize="sm"
                            fontFamily="mono"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wider"
                            mb={3}
                        >
                            Key Highlights:
                        </Text>
                        <UnorderedList spacing={2} ml={6}>
                            {education.highlights.map((highlight, idx) => (
                                <ListItem
                                    key={idx}
                                    color={theme.primaryText}
                                    fontSize="sm"
                                    lineHeight="1.6"
                                >
                                    {highlight}
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                )}

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

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
    const theme = useAboutThemeConstants();

    return (
        <VStack spacing={4} align="stretch">
            {education.map((edu, index) => (
                <EducationCard
                    key={edu.id}
                    education={edu}
                    index={index}
                />
            ))}
        </VStack>
    );
};

export default EducationSection;