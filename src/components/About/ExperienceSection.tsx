// components/About/ExperienceSection.tsx
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
    SimpleGrid,
    Button,
    Collapse,
    useDisclosure,
    useBreakpointValue,
} from '@chakra-ui/react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import { useAboutThemeConstants } from '../../hooks/useAboutThemeConstants';
import { Experience } from '../../data/aboutData';

interface ExperienceSectionProps {
    experiences: Experience[];
}

interface ExperienceCardProps {
    experience: Experience;
    index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
    const theme = useAboutThemeConstants();
    const reduce = useReducedMotion();
    const { isOpen, onToggle } = useDisclosure();
    const previewCount =
        useBreakpointValue({ base: 3, sm: 4, md: experience.responsibilities.length }) ?? 3;
    const showToggle = experience.responsibilities.length > previewCount;
    const isCurrent = experience.period.toLowerCase().includes('present');
    const hiddenItems = showToggle
        ? experience.responsibilities.slice(previewCount)
        : [];

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
                borderColor={theme.accent}
                bg={theme.cardBg}
                className={isCurrent ? 'pulse-dot' : undefined}
                boxShadow={`0 0 0 2px ${theme.accentLight}`}
                aria-hidden
            />

            {/* Card */}
            <Box
                bg={theme.cardBg}
                borderRadius="0"
                p={{ base: 4, sm: 5, md: 7, lg: 8 }}
                border={{ base: '1px solid', md: '2px solid' }}
                borderColor={theme.cardBorder}
                position="relative"
                overflow="hidden"
                sx={{
                    overflowWrap: 'anywhere',
                    wordBreak: 'break-word',
                    hyphens: 'auto',
                    transition: `box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease`,
                }}
                _hover={{
                    boxShadow: `0 12px 40px -12px ${theme.accentLight}`,
                    borderColor: theme.accent,
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

                <VStack align="start" spacing={{ base: 3.5, md: 5 }} w="full">
                    {/* Header: icon + role/company */}
                    <Stack
                        direction={{ base: 'row', sm: 'row' }}
                        spacing={{ base: 3, sm: 4 }}
                        align="start"
                        w="full"
                    >
                        <Box
                            p={{ base: 2, sm: 2.5, md: 3 }}
                            bg={theme.accent}
                            borderRadius="0"
                            border="2px solid"
                            borderColor={theme.accent}
                            flexShrink={0}
                            aria-label="Experience"
                            boxShadow={`5px 5px 0 ${theme.accentLight}`}
                        >
                            <Icon as={FaBriefcase} color="black" boxSize={{ base: 5, sm: 6 }} aria-hidden />
                        </Box>

                        <VStack align="start" spacing={{ base: 1, md: 1.5 }} flex={1} minW={0}>
                            <Text
                                color={theme.accent}
                                fontSize={{ base: 'xs', sm: 'sm' }}
                                fontFamily="mono"
                                fontWeight="bold"
                                textTransform="uppercase"
                                letterSpacing="wider"
                            >
                                {String(index + 1).padStart(2, '0')}_EXPERIENCE
                                {isCurrent && (
                                    <Text
                                        as="span"
                                        ml={2}
                                        bg={theme.accentLight}
                                        color={theme.accent}
                                        fontSize="10px"
                                        px={1.5}
                                        py={0.5}
                                        border="1px solid"
                                        borderColor={theme.accent}
                                    >
                                        CURRENT
                                    </Text>
                                )}
                            </Text>

                            <Heading
                                as="h3"
                                color={theme.primaryText}
                                fontFamily="mono"
                                textTransform="uppercase"
                                letterSpacing="wide"
                                lineHeight={1.2}
                                fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
                                noOfLines={{ base: 2, md: 1 }}
                            >
                                {experience.position}
                            </Heading>

                            {experience.company && (
                                <Text
                                    color={theme.accent}
                                    fontSize={{ base: 'sm', md: 'lg' }}
                                    fontFamily="mono"
                                    fontWeight="600"
                                    noOfLines={1}
                                >
                                    {experience.company}
                                </Text>
                            )}
                        </VStack>
                    </Stack>

                    {/* Meta: period + location */}
                    <SimpleGrid
                        columns={{ base: 1, xs: 2, sm: 2 }}
                        spacingY={{ base: 2, md: 0 }}
                        spacingX={{ base: 0, xs: 6 }}
                        w="full"
                    >
                        <HStack spacing={2} minW={0}>
                            <Icon as={FaCalendarAlt} color={theme.accent} boxSize={{ base: 3.5, sm: 4 }} aria-hidden />
                            <Text color={theme.primaryText} fontSize={{ base: 'xs', sm: 'sm' }} fontFamily="mono" fontWeight="bold">
                                {experience.period}
                            </Text>
                        </HStack>

                        <HStack spacing={2} minW={0}>
                            <Icon as={FaMapMarkerAlt} color={theme.accent} boxSize={{ base: 3.5, sm: 4 }} aria-hidden />
                            <Text color={theme.primaryText} fontSize={{ base: 'xs', sm: 'sm' }} fontFamily="mono" fontWeight="bold">
                                {experience.location}
                            </Text>
                        </HStack>
                    </SimpleGrid>

                    {/* Responsibilities (collapsible on small screens) */}
                    <Box w="full">
                        <Text
                            color={theme.accent}
                            fontSize={{ base: 'xs', sm: 'sm' }}
                            fontFamily="mono"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wider"
                            mb={{ base: 1.5, md: 2.5 }}
                        >
                            Key Responsibilities:
                        </Text>

                        <UnorderedList
                            spacing={{ base: 1.5, md: 2 }}
                            ml={{ base: 4, md: 6 }}
                            maxW={{ base: 'none', lg: '68ch' }}
                        >
                            {experience.responsibilities.slice(0, previewCount).map((responsibility, idx) => (
                                <ListItem
                                    key={idx}
                                    color={theme.primaryText}
                                    fontSize={{ base: 'sm', md: 'sm' }}
                                    lineHeight={{ base: 1.6, md: 1.7 }}
                                >
                                    {responsibility}
                                </ListItem>
                            ))}
                        </UnorderedList>

                        <Collapse in={isOpen} animateOpacity startingHeight={0}>
                            <UnorderedList
                                spacing={{ base: 1.5, md: 2 }}
                                ml={{ base: 4, md: 6 }}
                                maxW={{ base: 'none', lg: '68ch' }}
                                id={`exp-resp-${index}`}
                            >
                                {hiddenItems.map((responsibility, idx) => (
                                    <ListItem
                                        key={idx}
                                        color={theme.primaryText}
                                        fontSize={{ base: 'sm', md: 'sm' }}
                                        lineHeight={{ base: 1.6, md: 1.7 }}
                                    >
                                        {responsibility}
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        </Collapse>

                        {showToggle && (
                            <Button
                                onClick={onToggle}
                                variant="link"
                                color={theme.accent}
                                fontFamily="mono"
                                fontWeight="bold"
                                mt={{ base: 1, md: 1.5 }}
                                fontSize={{ base: 'sm', md: 'sm' }}
                                _hover={{ textDecoration: 'underline' }}
                                aria-expanded={isOpen}
                                aria-controls={`exp-resp-${index}`}
                                rightIcon={undefined}
                                iconSpacing={2}
                            >
                                {isOpen ? 'Show less ▲' : 'Show more ▼'}
                            </Button>
                        )}
                    </Box>

                    {/* Accent line */}
                    <Box w="full" h={{ base: '1px', md: '2px' }} bg={theme.accent} mt={{ base: 1, md: 2 }} />
                </VStack>
            </Box>
        </Box>
    );
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
    const reduce = useReducedMotion();

    return (
        <VStack spacing={{ base: 6, md: 8 }} align="stretch">
            {experiences.map((experience, index) => (
                <motion.div
                    key={experience.id}
                    initial={reduce ? false : { opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: 'easeOut' }}
                >
                    <ExperienceCard experience={experience} index={index} />
                </motion.div>
            ))}
        </VStack>
    );
};

export default ExperienceSection;