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
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { FaLink, FaGithub } from 'react-icons/fa';
import { MorphCard } from '../common/MorphCard';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { ProjectData } from '../../data/homeData';
import { getIcon } from '../../utils/iconMapper';

interface ProjectCardProps {
    project: ProjectData;
    isHighlighted?: boolean;
    colSpan?: number;
}

const CaseStudyBlock: React.FC<{ label: string; text: string; color: string; textColor: string }> = ({
    label,
    text,
    color,
    textColor,
}) => (
    <Box w="full">
        <Text
            color={color}
            fontSize={{ base: 'xs', sm: 'sm' }}
            fontFamily="mono"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wider"
            mb={{ base: 1, md: 1.5 }}
        >
            {label}
        </Text>
        <Text color={textColor} fontSize={{ base: 'sm', sm: 'md' }} lineHeight={{ base: 'tall', md: 'taller' }}>
            {text}
        </Text>
    </Box>
);

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
                    <Stack direction="row" spacing={{ base: 3, md: 4 }} align="center" w="full">
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
                        <VStack align="start" spacing={{ base: 0.5, md: 1 }} minW={0} flex={1}>
                            <Heading
                                size="xl"
                                color={textColor}
                                fontFamily="mono"
                                textTransform="uppercase"
                                letterSpacing="wide"
                                fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
                                lineHeight={{ base: 1.2, md: 1.25 }}
                            >
                                {project.title}
                            </Heading>
                            {project.status && (
                                <HStack spacing={2} color="gainsboro">
                                    <Box
                                        w={2}
                                        h={2}
                                        bg={project.status === 'LIVE' ? 'green.400' : project.status === 'COMPLETED' ? tertiaryAccent : 'yellow.400'}
                                    />
                                    <Text fontSize={{ base: 'xs', sm: 'sm' }} fontFamily="mono" fontWeight="bold">
                                        {project.status}
                                    </Text>
                                </HStack>
                            )}
                        </VStack>
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

                    {/* Case study blocks */}
                    {project.caseStudy && (
                        <VStack align="start" spacing={{ base: 4, md: 5 }} w="full">
                            <CaseStudyBlock
                                label="Problem"
                                text={project.caseStudy.problem}
                                color={accent}
                                textColor={textColor}
                            />
                            <CaseStudyBlock
                                label="My Role"
                                text={project.caseStudy.role}
                                color={accent}
                                textColor={textColor}
                            />
                            <CaseStudyBlock
                                label="Stack Decision"
                                text={project.caseStudy.stackDecision}
                                color={accent}
                                textColor={textColor}
                            />
                            {project.caseStudy.outcome && (
                                <CaseStudyBlock
                                    label="Outcome"
                                    text={project.caseStudy.outcome}
                                    color={accent}
                                    textColor={textColor}
                                />
                            )}
                            {project.caseStudy.nextSteps && (
                                <CaseStudyBlock
                                    label="Next Up"
                                    text={project.caseStudy.nextSteps}
                                    color={accent}
                                    textColor={textColor}
                                />
                            )}
                        </VStack>
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
                        </Wrap>
                    </Box>

                    {/* CTA Buttons */}
                    {(project.liveUrl || project.githubUrl) && (
                        <HStack mt={{ base: 4, md: 6 }} spacing={{ base: 3, md: 4 }} w="full" flexWrap="wrap">
                            {project.liveUrl && (
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
                                    aria-label={`Open live site for ${project.title}`}
                                >
                                    View Live
                                </Button>
                            )}
                            {project.githubUrl && (
                                <Button
                                    as={Link}
                                    href={project.githubUrl}
                                    isExternal
                                    leftIcon={<FaGithub />}
                                    size={{ base: 'sm', sm: 'md' }}
                                    borderRadius="0"
                                    bg="transparent"
                                    color={textColor}
                                    border="2px solid"
                                    borderColor={accent}
                                    _hover={{ bg: accent, color: 'black' }}
                                    rel="noopener noreferrer"
                                    w={{ base: 'full', sm: 'auto' }}
                                    aria-label={`View source on GitHub for ${project.title}`}
                                >
                                    Source
                                </Button>
                            )}
                        </HStack>
                    )}
                </VStack>
            </CardBody>
        </MorphCard>
    );
};