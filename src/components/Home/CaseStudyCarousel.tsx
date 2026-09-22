// components/Home/CaseStudyCarousel.tsx
import React, { useState, useEffect, useCallback } from 'react';
import {
    Box,
    Text,
    Heading,
    Icon,
    Badge,
    Button,
    IconButton,
    Link,
    Image,
    HStack,
    VStack,
    Grid,
    GridItem,
    AspectRatio,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
    FaChevronLeft,
    FaChevronRight,
    FaLink,
    FaGithub,
    FaPause,
    FaPlay,
} from 'react-icons/fa';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { ProjectData } from '../../data/homeData';
import { getIcon } from '../../utils/iconMapper';

interface CaseStudyCarouselProps {
    projects: ProjectData[];
    autoPlayInterval?: number;
}

const slideVariants = {
    enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -80 : 80 }),
};

const ProgressBar: React.FC<{ duration: number; accent: string; paused: boolean }> = ({ duration, accent, paused }) => (
    <Box w="full" h={1} bg="whiteAlpha.300" position="relative" overflow="hidden" aria-hidden>
        <motion.div
            key={paused ? 'paused' : 'running'}
            initial={{ width: '0%' }}
            animate={{ width: paused ? '0%' : '100%' }}
            transition={{ duration: paused ? 0 : duration, ease: 'linear' }}
            style={{ height: '100%', background: accent }}
        />
    </Box>
);

const CaseStudySlide: React.FC<{ project: ProjectData; index: number; total: number }> = ({ project, index, total }) => {
    const { cardBg, textColor, accentColor, secondaryAccent, tertiaryAccent } = useThemeConstants();
    const [imgFailed, setImgFailed] = useState(false);

    const accent = project.accentType === 'secondary' ? secondaryAccent
        : project.accentType === 'tertiary' ? tertiaryAccent
        : accentColor;

    const IconComponent = getIcon(project.icon);
    const counter = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    const hasImage = Boolean(project.imageUrl) && !imgFailed;

    return (
        <Box bg={cardBg} borderRadius="0" border="2px solid" borderColor={accent} overflow="hidden">
            {/* Visual header */}
            <Box position="relative" bg="black">
                <AspectRatio ratio={{ base: 16 / 9, md: 21 / 9 }}>
                    <Box position="relative" w="full" h="full" bg="black">
                        {/* patterned backdrop */}
                        <Box
                            position="absolute"
                            inset={0}
                            bg="black"
                            sx={{
                                backgroundImage:
                                    'repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 8px), repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px)',
                            }}
                        />

                        {hasImage && (
                            <Box position="absolute" inset={0}>
                                <Image
                                    src={project.imageUrl}
                                    alt={`${project.title} preview`}
                                    objectFit="cover"
                                    w="100%"
                                    h="100%"
                                    loading="lazy"
                                    decoding="async"
                                    onError={() => setImgFailed(true)}
                                />
                            </Box>
                        )}

                        {/* Center icon (dimmed on top of a real image) */}
                        <Box
                            position="absolute"
                            inset={0}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Icon
                                as={IconComponent}
                                color={accent}
                                boxSize={{ base: 16, md: 24 }}
                                opacity={hasImage ? 0.12 : 0.9}
                                sx={{ filter: `drop-shadow(0 0 18px ${accent})` }}
                                aria-label={`${project.title} icon`}
                            />
                        </Box>

                        {/* bottom gradient for text legibility */}
                        <Box
                            position="absolute"
                            inset={0}
                            bgGradient="linear(to-t, rgba(0,0,0,0.85) 0%, transparent 40%)"
                            pointerEvents="none"
                        />
                    </Box>
                </AspectRatio>

                {/* top-right counter */}
                <Box position="absolute" top={4} right={4}>
                    <Text color="white" fontFamily="mono" fontWeight="bold" fontSize={{ base: 'sm', md: 'md' }}>
                        {counter}
                    </Text>
                </Box>

                {/* bottom title */}
                <Box position="absolute" bottom={{ base: 4, md: 6 }} left={{ base: 4, md: 8 }} right={{ base: 4, md: 8 }}>
                    <HStack spacing={2} mb={{ base: 1, md: 2 }}>
                        <Box w={3} h={3} bg={project.status === 'LIVE' ? 'green.400' : project.status === 'COMPLETED' ? accent : 'yellow.400'} />
                        <Text color="white" fontFamily="mono" fontSize={{ base: 'xs', md: 'sm' }} fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
                            {project.status ?? 'CASE STUDY'}
                        </Text>
                    </HStack>
                    <Heading
                        as="h2"
                        color="white"
                        fontFamily="mono"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        fontSize={{ base: 'lg', md: '2xl' }}
                        lineHeight={1.2}
                    >
                        {project.title}
                    </Heading>
                </Box>
            </Box>

            {/* Content */}
            <Grid templateColumns={{ base: '1fr', lg: '3fr 2fr' }}>
                <GridItem p={{ base: 5, md: 8 }} borderRight={{ base: 'none', lg: '2px dashed' }} borderColor={accent}>
                    <VStack align="start" spacing={{ base: 5, md: 6 }}>
                        <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }} lineHeight="tall">
                            {project.description}
                        </Text>

                        <Box w="full">
                            <Text color={accent} fontSize={{ base: 'xs', md: 'sm' }} fontFamily="mono" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" mb={2}>
                                {'/* Problem */'}
                            </Text>
                            <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }} lineHeight="tall">
                                {project.caseStudy.problem}
                            </Text>
                        </Box>

                        <Box w="full">
                            <Text color={accent} fontSize={{ base: 'xs', md: 'sm' }} fontFamily="mono" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" mb={2}>
                                {'/* My Role */'}
                            </Text>
                            <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }} lineHeight="tall">
                                {project.caseStudy.role}
                            </Text>
                        </Box>

                        <Box w="full">
                            <Text color={accent} fontSize={{ base: 'xs', md: 'sm' }} fontFamily="mono" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" mb={2}>
                                {'/* Stack Decision */'}
                            </Text>
                            <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }} lineHeight="tall">
                                {project.caseStudy.stackDecision}
                            </Text>
                        </Box>
                    </VStack>
                </GridItem>

                <GridItem p={{ base: 5, md: 8 }}>
                    <VStack align="start" spacing={{ base: 5, md: 6 }} h="full">
                        {project.caseStudy.outcome && (
                            <Box w="full">
                                <Text color={accent} fontSize={{ base: 'xs', md: 'sm' }} fontFamily="mono" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" mb={2}>
                                    {'// Outcome'}
                                </Text>
                                <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }} lineHeight="tall">
                                    {project.caseStudy.outcome}
                                </Text>
                            </Box>
                        )}
                        {project.caseStudy.nextSteps && (
                            <Box w="full">
                                <Text color={accent} fontSize={{ base: 'xs', md: 'sm' }} fontFamily="mono" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" mb={2}>
                                    {'// Next Up'}
                                </Text>
                                <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }} lineHeight="tall">
                                    {project.caseStudy.nextSteps}
                                </Text>
                            </Box>
                        )}

                        <Box w="full" pt={2}>
                            <Wrap spacing={2} shouldWrapChildren>
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

                        <Box flex={1} />

                        {(project.liveUrl || project.githubUrl) && (
                            <HStack spacing={3} w="full" flexWrap="wrap">
                                {project.liveUrl && (
                                    <Button
                                        as={Link}
                                        href={project.liveUrl}
                                        isExternal
                                        rightIcon={<FaLink />}
                                        size="sm"
                                        borderRadius="0"
                                        bg={accent}
                                        color="black"
                                        _hover={{ opacity: 0.9 }}
                                        rel="noopener noreferrer"
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
                                        size="sm"
                                        borderRadius="0"
                                        bg="transparent"
                                        color={textColor}
                                        border="2px solid"
                                        borderColor={accent}
                                        _hover={{ bg: accent, color: 'black' }}
                                        rel="noopener noreferrer"
                                        aria-label={`View source on GitHub for ${project.title}`}
                                    >
                                        Source
                                    </Button>
                                )}
                            </HStack>
                        )}
                    </VStack>
                </GridItem>
            </Grid>
        </Box>
    );
};

export const CaseStudyCarousel: React.FC<CaseStudyCarouselProps> = ({
    projects,
    autoPlayInterval = 7000,
}) => {
    const { textColor, accentColor, tertiaryAccent } = useThemeConstants();
    const reduce = useReducedMotion();
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [paused, setPaused] = useState(false);
    const [playing, setPlaying] = useState(true);

    const paginate = useCallback((dir: number) => {
        setDirection(dir);
        setIndex((i) => (i + dir + projects.length) % projects.length);
    }, [projects.length]);

    useEffect(() => {
        // Autoplay is skipped entirely under prefers-reduced-motion
        if (reduce || !playing || paused || projects.length <= 1) return;
        const id = setInterval(() => paginate(1), autoPlayInterval);
        return () => clearInterval(id);
    }, [paused, playing, reduce, index, autoPlayInterval, paginate, projects.length]);

    const project = projects[index];

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            paginate(-1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            paginate(1);
        }
    };

    return (
        <Box
            position="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            outline="none"
            role="region"
            aria-roledescription="carousel"
            aria-label="Case study carousel — use the left and right arrow keys to move between slides"
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            {/* Screen-reader announcement of the active slide */}
            <Text
                as="span"
                srOnly
                role="status"
                aria-live="polite"
                aria-atomic
            >
                {`Showing case study ${index + 1} of ${projects.length}: ${project.title}. Autoplay ${playing ? 'running' : 'paused'}.`}
            </Text>
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={project.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                    <CaseStudySlide project={project} index={index} total={projects.length} />
                </motion.div>
            </AnimatePresence>

            {/* Autoplay progress bar */}
            <ProgressBar duration={autoPlayInterval / 1000} accent={accentColor} paused={paused} />

            {/* Controls */}
            <HStack mt={5} justify="space-between" align="center" wrap="wrap" gap={4}>
                <HStack spacing={3}>
                    <IconButton
                        icon={<FaChevronLeft />}
                        aria-label="Previous case study"
                        onClick={() => paginate(-1)}
                        borderRadius="0"
                        bg="transparent"
                        color={textColor}
                        border="2px solid"
                        borderColor={textColor}
                        _hover={{ bg: accentColor, color: 'black', borderColor: accentColor }}
                        fontSize={16}
                        minW={10}
                        minH={10}
                    />
                    <IconButton
                        icon={<FaChevronRight />}
                        aria-label="Next case study"
                        onClick={() => paginate(1)}
                        borderRadius="0"
                        bg="transparent"
                        color={textColor}
                        border="2px solid"
                        borderColor={textColor}
                        _hover={{ bg: accentColor, color: 'black', borderColor: accentColor }}
                        fontSize={16}
                        minW={10}
                        minH={10}
                    />
                    <IconButton
                        icon={playing ? <FaPause /> : <FaPlay />}
                        aria-label={playing ? 'Pause autoplay' : 'Play autoplay'}
                        aria-pressed={!playing}
                        title={playing ? 'Pause autoplay' : 'Play autoplay'}
                        onClick={() => setPlaying((p) => !p)}
                        borderRadius="0"
                        bg="transparent"
                        color={textColor}
                        border="2px solid"
                        borderColor={textColor}
                        _hover={{ bg: accentColor, color: 'black', borderColor: accentColor }}
                        fontSize={14}
                        minW={10}
                        minH={10}
                    />
                </HStack>

                {/* Dash indicators */}
                <HStack spacing={2.5}>
                    {projects.map((p, i) => (
                        <Button
                            key={p.id}
                            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                            aria-label={`Go to case study ${i + 1}`}
                            aria-current={i === index ? 'true' : undefined}
                            bg="transparent"
                            p={0}
                            minW="auto"
                            h="auto"
                            _hover={{ bg: 'transparent' }}
                            _active={{ bg: 'transparent' }}
                        >
                            <Box
                                w={i === index ? 12 : 5}
                                h={1}
                                bg={i === index ? accentColor : tertiaryAccent}
                                opacity={i === index ? 1 : 0.6}
                                transition="all 0.3s ease"
                            />
                        </Button>
                    ))}
                </HStack>

                {/* Counter */}
                <Text color={textColor} fontFamily="mono" fontSize="sm" fontWeight="bold" opacity={0.7}>
                    {String(index + 1).padStart(2, '0')} — {String(projects.length).padStart(2, '0')} / AUTO-PLAY
                </Text>
            </HStack>
        </Box>
    );
};