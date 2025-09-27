// components/Home/ProjectCard.tsx
import React from 'react';
import {
    VStack,
    HStack,
    Stack,
    Box,
    Text,
    Heading,
    Icon,
    Badge,
    Button,
    Link,
    Image,
    Skeleton,
    AspectRatio,
    CardBody,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { FaLink, FaLightbulb } from 'react-icons/fa';
import { MorphCard } from '../common/MorphCard';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { ProjectData } from '../../data/homeData';
import { getIcon } from '../../utils/iconMapper';

interface ProjectCardProps {
    project: ProjectData;
    isHighlighted?: boolean;
    colSpan?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    project,
    isHighlighted = false,
    colSpan = 1,
}) => {
    const { cardBg, textColor, accentColor, secondaryAccent, tertiaryAccent } = useThemeConstants();

    const getAccentColor = () => {
        switch (project.accentType) {
            case 'secondary':
                return secondaryAccent;
            case 'tertiary':
                return tertiaryAccent;
            default:
                return accentColor;
        }
    };

    const IconComponent = getIcon(project.icon);
    const accent = getAccentColor();

    return (
        <MorphCard
            bg={cardBg}
            borderRadius="0"
            border={isHighlighted ? '3px solid' : '2px solid'}
            borderColor={accent}
            h="full"
            overflow="hidden"
            sx={isHighlighted ? { boxShadow: `0 0 0 1px ${accent}, 0 0 40px -10px ${accent}` } : {}}
        >
            <CardBody p={{ base: 4, sm: 6, md: 8, lg: 10 }}>
                <VStack align="start" spacing={{ base: 5, md: 8 }} h="full">
                    {/* Header */}
                    <Stack direction={{ base: 'row', md: 'row' }} spacing={{ base: 3, md: 4 }} align="center" w="full">
                        <Box
                            p={{ base: 2.5, sm: 3, md: 4 }}
                            bg={accent}
                            borderRadius="0"
                            border="2px solid"
                            borderColor={accent}
                            flexShrink={0}
                        >
                            <Icon
                                as={IconComponent}
                                color={project.accentType === 'secondary' ? 'white' : 'black'}
                                boxSize={{ base: 6, sm: 7, md: 8 }}
                                aria-label={`${project.title} icon`}
                            />
                        </Box>
                        <VStack align="start" spacing={{ base: 0.5, md: 1 }} minW={0}>
                            <Text
                                color={accent}
                                fontSize={{ base: 'xs', sm: 'sm' }}
                                fontFamily="mono"
                                fontWeight="bold"
                                noOfLines={1}
                            >
                                {project.moduleNumber}
                            </Text>
                            <Heading
                                size="xl"
                                color={textColor}
                                fontFamily="mono"
                                textTransform="uppercase"
                                letterSpacing="wide"
                                fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
                                lineHeight={{ base: 1.2, md: 1.25 }}
                                noOfLines={{ base: 2, md: 1 }}
                            >
                                {project.title}
                            </Heading>
                        </VStack>
                        {isHighlighted && (
                            <HStack ml="auto" spacing={2} color="gainsboro" display={{ base: 'none', md: 'flex' }}>
                                <Icon as={FaLightbulb} />
                                <Text fontSize="sm">Live</Text>
                            </HStack>
                        )}
                    </Stack>

                    {/* Description */}
                    <Text
                        color={textColor}
                        fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                        lineHeight={{ base: 'tall', md: 'taller' }}
                        maxW="3xl"
                    >
                        {project.description}
                    </Text>

                    {/* Project Image (for highlighted cards) */}
                    {isHighlighted && project.imageUrl && (
                        <Box w="full">
                            <AspectRatio
                                ratio={{ base: 4 / 3, sm: 16 / 9 }}
                                border="2px solid"
                                borderColor={secondaryAccent}
                            >
                                <Box position="relative" bg="black">
                                    <Skeleton startColor="gray.700" endColor="gray.600" isLoaded>
                                        <Image
                                            src={project.imageUrl}
                                            alt={`${project.title} preview`}
                                            objectFit="cover"
                                            w="100%"
                                            h="100%"
                                            fallbackSrc="/android-chrome-512x512.png"
                                        />
                                    </Skeleton>
                                    <Box
                                        position="absolute"
                                        inset={0}
                                        bgGradient="linear(to-t, blackAlpha.500 5%, transparent 35%)"
                                        pointerEvents="none"
                                    />
                                </Box>
                            </AspectRatio>
                        </Box>
                    )}

                    {/* Projects List (for non-highlighted cards) */}
                    {!isHighlighted && project.projects && (
                        <Box flex={1} w="full">
                            <Text
                                fontWeight="bold"
                                color={accent}
                                mb={{ base: 2, md: 4 }}
                                fontFamily="mono"
                                fontSize={{ base: 'xs', sm: 'sm' }}
                            >
                                FLAGSHIP PROJECTS:
                            </Text>

                            {/* On mobile, collapse into an accordion for scannability */}
                            <Box display={{ base: 'block', md: 'none' }}>
                                <Accordion allowMultiple reduceMotion>
                                    {project.projects.map((proj, idx) => (
                                        <AccordionItem key={idx} border="none">
                                            <h3>
                                                <AccordionButton px={0}>
                                                    <Box as="span" flex="1" textAlign="left" color={textColor} fontWeight="bold" pr={2}>
                                                        {proj.name}
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h3>
                                            <AccordionPanel px={0} pt={2} pb={3} color={textColor} fontSize="sm">
                                                {proj.description}
                                            </AccordionPanel>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </Box>

                            {/* On md+ show the full list */}
                            <VStack align="start" spacing={3} pl={6} display={{ base: 'none', md: 'flex' }}>
                                {project.projects.map((proj, idx) => (
                                    <Box key={idx}>
                                        <Text color={textColor} fontWeight="bold" fontSize={{ md: 'md' }}>
                                            {proj.name}
                                        </Text>
                                        <Text color={textColor} fontSize={{ md: 'sm' }}>
                                            {proj.description}
                                        </Text>
                                    </Box>
                                ))}
                            </VStack>
                        </Box>
                    )}

                    {/* Badges */}
                    <Box w="full">
                        <Wrap spacing={{ base: 2, md: 3 }} shouldWrapChildren>
                            {project.badges.map((badge, idx) => (
                                <WrapItem key={idx}>
                                    <Badge
                                        bg={accent}
                                        color={project.accentType === 'secondary' ? 'white' : 'black'}
                                        fontFamily="mono"
                                        fontSize={{ base: '10px', sm: 'xs' }}
                                        px={{ base: 2, sm: 3 }}
                                        py={{ base: 0.5, sm: 1 }}
                                        borderRadius="0"
                                    >
                                        {badge}
                                    </Badge>
                                </WrapItem>
                            ))}
                            {isHighlighted && (
                                <WrapItem display={{ base: 'flex', md: 'none' }} ml="auto">
                                    <HStack spacing={2} color="gainsboro">
                                        <Icon as={FaLightbulb} boxSize={{ base: 3.5, sm: 4 }} />
                                        <Text fontSize={{ base: 'xs', sm: 'sm' }}>Live</Text>
                                    </HStack>
                                </WrapItem>
                            )}
                        </Wrap>
                    </Box>

                    {/* CTA Buttons (for highlighted cards with live URLs) */}
                    {isHighlighted && project.liveUrl && (
                        <HStack mt={{ base: 4, md: 6 }} spacing={{ base: 3, md: 4 }} w="full">
                            <Button
                                as={Link}
                                href={project.liveUrl}
                                isExternal
                                rightIcon={<FaLink />}
                                size={{ base: 'sm', sm: 'md' }}
                                borderRadius="0"
                                bg={accent}
                                color="black"
                                _hover={{ opacity: 0.9 }}
                                rel="noopener noreferrer"
                                w={{ base: 'full', sm: 'auto' }}
                                aria-label={`Open ${project.title}`}
                            >
                                Open {project.title.split(' ')[0]}
                            </Button>
                        </HStack>
                    )}
                </VStack>
            </CardBody>
        </MorphCard>
    );
};
