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
    Stack,
} from "@chakra-ui/react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion, useReducedMotion } from 'framer-motion';
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
    const reduce = useReducedMotion();

    return (
        <Box position="relative" pl={{ base: 8, sm: 10, md: 12 }}>
            {/* Timeline rail */}
            <Box
                position="absolute"
                left={{ base: '14px', sm: '18px' }}
                top={2}
                bottom={2}
                w="2px"
                bg={theme.timelineLine}
                aria-hidden
            />

            {/* Timeline node */}
            <Box
                position="absolute"
                left={0}
                top={7}
                w="15px"
                h="15px"
                transform="rotate(45deg)"
                border="2px solid"
                borderColor={theme.tertiaryAccent}
                bg={theme.cardBg}
                boxShadow={`0 0 0 2px ${theme.accentLight}`}
                aria-hidden
            />

            <Box
                bg={theme.cardBg}
                borderRadius="0"
                p={{ base: 6, md: 8 }}
                border="2px solid"
                borderColor={theme.cardBorder}
                position="relative"
                overflow="hidden"
                sx={{
                    overflowWrap: 'anywhere',
                    wordBreak: 'break-word',
                    transition: `box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease`,
                }}
                _hover={{
                    boxShadow: `0 12px 40px -12px ${theme.accentLight}`,
                    borderColor: theme.tertiaryAccent,
                }}
            >
                {/* Top accent bar drawing in */}
                <motion.div
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', originX: 0 }}
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                >
                    <Box h="full" bg={theme.headerGradient} />
                </motion.div>

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
                            bg={theme.tertiaryAccent}
                            borderRadius="0"
                            border="2px solid"
                            borderColor={theme.tertiaryAccent}
                            flexShrink={0}
                            boxShadow={`5px 5px 0 ${theme.accentLight}`}
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
        </Box>
    );
};

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
    const reduce = useReducedMotion();

    return (
        <VStack spacing={{ base: 6, md: 8 }} align="stretch">
            {education.map((edu, index) => (
                <motion.div
                    key={edu.id}
                    initial={reduce ? false : { opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: 'easeOut' }}
                >
                    <EducationCard
                        education={edu}
                        index={index}
                    />
                </motion.div>
            ))}
        </VStack>
    );
};

export default EducationSection;