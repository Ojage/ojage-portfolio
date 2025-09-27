// components/Home/ProjectCard.tsx
import React from 'react';
import {
    VStack,
    HStack,
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
    CardBody
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

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isHighlighted = false, colSpan = 1 }) => {
    const { cardBg, textColor, accentColor, secondaryAccent, tertiaryAccent } = useThemeConstants();

    const getAccentColor = () => {
        switch (project.accentType) {
            case 'secondary': return secondaryAccent;
            case 'tertiary': return tertiaryAccent;
            default: return accentColor;
        }
    };

    const IconComponent = getIcon(project.icon);
    const accent = getAccentColor();

    return (
        <MorphCard
            bg={cardBg}
            borderRadius="0"
            border={isHighlighted ? "3px solid" : "2px solid"}
            borderColor={accent}
            h="full"
            overflow="hidden"
            sx={isHighlighted ? { boxShadow: `0 0 0 1px ${accent}, 0 0 40px -10px ${accent}` } : {}}
        >
            <CardBody p={{ base: 8, md: 10 }}>
                <VStack align="start" spacing={8} h="full">
                    {/* Header */}
                    <HStack spacing={4} align="center">
                        <Box
                            p={4}
                            bg={accent}
                            borderRadius="0"
                            border="2px solid"
                            borderColor={accent}
                        >
                            <Icon as={IconComponent} color={project.accentType === 'secondary' ? "white" : "black"} boxSize={8} />
                        </Box>
                        <VStack align="start" spacing={1}>
                            <Text color={accent} fontSize="sm" fontFamily="mono" fontWeight="bold">
                                {project.moduleNumber}
                            </Text>
                            <Heading
                                size="xl"
                                color={textColor}
                                fontFamily="mono"
                                textTransform="uppercase"
                                letterSpacing="wide"
                            >
                                {project.title}
                            </Heading>
                        </VStack>
                    </HStack>

                    {/* Description */}
                    <Text color={textColor} fontSize={{ base: "md", md: "lg" }} lineHeight="tall" maxW="3xl">
                        {project.description}
                    </Text>

                    {/* Project Image (for highlighted cards) */}
                    {isHighlighted && project.imageUrl && (
                        <Box w="full">
                            <AspectRatio ratio={16 / 9} border="2px solid" borderColor={secondaryAccent}>
                                <Box position="relative" bg="black">
                                    <Skeleton startColor="gray.700" endColor="gray.600" isLoaded={true}>
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
                            <Text fontWeight="bold" color={accent} mb={4} fontFamily="mono">
                                FLAGSHIP PROJECTS:
                            </Text>
                            <VStack align="start" spacing={3} pl={6}>
                                {project.projects.map((proj, idx) => (
                                    <Box key={idx}>
                                        <Text color={textColor} fontWeight="bold">{proj.name}</Text>
                                        <Text color={textColor} fontSize="sm">{proj.description}</Text>
                                    </Box>
                                ))}
                            </VStack>
                        </Box>
                    )}

                    {/* Badges */}
                    <HStack spacing={3} flexWrap="wrap">
                        {project.badges.map((badge, idx) => (
                            <Badge
                                key={idx}
                                bg={accent}
                                color={project.accentType === 'secondary' ? "white" : "black"}
                                fontFamily="mono"
                                fontSize="xs"
                                px={3}
                                py={1}
                                borderRadius="0"
                            >
                                {badge}
                            </Badge>
                        ))}
                        {isHighlighted && (
                            <HStack ml="auto" spacing={2} color="gainsboro">
                                <Icon as={FaLightbulb} />
                                <Text fontSize="sm">Live</Text>
                            </HStack>
                        )}
                    </HStack>

                    {/* CTA Buttons (for highlighted cards with live URLs) */}
                    {isHighlighted && project.liveUrl && (
                        <HStack mt={6} spacing={4}>
                            <Button
                                as={Link}
                                href={project.liveUrl}
                                isExternal
                                rightIcon={<FaLink />}
                                size="md"
                                borderRadius="0"
                                bg={accent}
                                color="black"
                                _hover={{ opacity: 0.9 }}
                                rel="noopener noreferrer"
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