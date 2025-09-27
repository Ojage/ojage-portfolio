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
    const { isOpen, onToggle } = useDisclosure();
    const previewCount = useBreakpointValue({ base: 3, sm: 4, md: experience.responsibilities.length }) ?? 3;
    const showToggle = experience.responsibilities.length > (previewCount ?? 0);

    const visibleItems =
        isOpen || previewCount === experience.responsibilities.length
            ? experience.responsibilities
            : experience.responsibilities.slice(0, previewCount);

    return (
        <Box
            bg={theme.cardBg}
            borderRadius="0"
            p={{ base: 4, sm: 5, md: 7, lg: 8 }}
            border={{ base: '1px solid', md: '2px solid' }}
            borderColor={theme.cardBorder}
            position="relative"
            overflow="hidden"
            mb={{ base: 3, md: 4 }}
            sx={{
                overflowWrap: 'anywhere',
                wordBreak: 'break-word',
                hyphens: 'auto',
            }}
        >
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

                {/* Meta: period + location (mobile-first grid) */}
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
                        {visibleItems.map((responsibility, idx) => (
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
                        >
                            {isOpen ? 'Show less' : 'Show more'}
                        </Button>
                    )}
                    {/* For a11y: keep a collapsible region id referenced above (content is the same list) */}
                    <Collapse in={false} animateOpacity id={`exp-resp-${index}`} />
                </Box>

                {/* Accent line */}
                <Box w="full" h={{ base: '1px', md: '2px' }} bg={theme.accent} mt={{ base: 1, md: 2 }} />
            </VStack>
        </Box>
    );
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
    return (
        <VStack spacing={{ base: 3, md: 4 }} align="stretch">
            {experiences.map((experience, index) => (
                <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
        </VStack>
    );
};

export default ExperienceSection;
