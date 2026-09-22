// components/Home/HeroSection.tsx
import React from 'react';
import {
    Grid,
    GridItem,
    VStack,
    HStack,
    Box,
    Text,
    Heading,
    Icon,
    Button,
    Link,
    SimpleGrid,
} from '@chakra-ui/react';
import {
    BiWorld,
} from 'react-icons/bi';
import {
    FaFileDownload,
    FaGithub,
    FaGraduationCap,
    FaBriefcase,
    FaRocket,
} from 'react-icons/fa';
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useScroll,
    useReducedMotion,
} from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { personalInfo, socialLinks } from '../../data/homeData';
import { Typewriter } from './Typewriter';
import { MagneticButton } from '../About/MagneticButton';
import { TiltCard } from '../About/TiltCard';
import myPicProfessional from "../../assets/images/myPicProfessional.jpeg";

const rotatingTitles = [
    'FULL-STACK AI PRODUCT DEVELOPER',
    'REACT · NESTJS · TYPESCRIPT',
    'GCP CLOUD-NATIVE ENGINEER',
    'AI & LLM INTEGRATIONS',
];

const facts = [
    {
        index: '01',
        label: 'EDUCATION',
        value: personalInfo.education,
        icon: FaGraduationCap,
    },
    {
        index: '02',
        label: 'POSITION',
        value: personalInfo.position,
        icon: FaBriefcase,
    },
    {
        index: '03',
        label: 'EXPERIENCE',
        value: personalInfo.experience,
        icon: FaRocket,
    },
];

const badges = [
    { label: 'OPEN TO WORK', color: '#00ff88', top: -14, right: -10, left: undefined, bottom: undefined, pulse: true, delay: '0s', duration: '6s' },
    { label: 'TYPESCRIPT', color: '#4ecdc4', top: '42%', left: -20, right: undefined, bottom: undefined, pulse: false, delay: '0.8s', duration: '7s' },
    { label: '500+ USERS', color: '#00ff88', bottom: -14, right: -6, left: undefined, top: undefined, pulse: false, delay: '1.6s', duration: '5.5s' },
    { label: 'GCP', color: '#4ecdc4', bottom: '24%', left: -14, right: undefined, top: undefined, pulse: false, delay: '0.4s', duration: '6.5s' },
];

const darkInactive = 'rgba(255,255,255,0.16)';
const lightInactive = 'rgba(0,0,0,0.16)';

export const HeroSection: React.FC = () => {
    const { cardBg, accentColor, textColor, secondaryAccent, tertiaryAccent, isDark, bgColor } = useThemeConstants();
    const reduce = useReducedMotion();

    // Scroll parallax
    const { scrollY } = useScroll();
    const leftParallax = useTransform(scrollY, [0, 600], [0, 60]);
    const rightParallax = useTransform(scrollY, [0, 600], [0, -40]);

    // Mouse parallax
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const smx = useSpring(mx, { stiffness: 100, damping: 14 });
    const smy = useSpring(my, { stiffness: 100, damping: 14 });
    const portraitX = useTransform(smx, [-0.5, 0.5], [12, -12]);
    const portraitY = useTransform(smy, [-0.5, 0.5], [14, -14]);
    const blobX = useTransform(smx, [-0.5, 0.5], [-32, 32]);
    const blobY = useTransform(smy, [-0.5, 0.5], [-24, 24]);

    const handleMouse = (e: React.MouseEvent) => {
        if (reduce) return;
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const nameLetters = personalInfo.name.split('');
    const descriptionWords = personalInfo.description.split(' ');
    const divider = isDark ? darkInactive : lightInactive;

    return (
        <Box position="relative" onMouseMove={handleMouse} overflow="hidden">
            {/* Aurora blobs */}
            <motion.div style={{ x: blobX, y: blobY }}>
                <Box
                    className="hero-blob no-print"
                    w={72}
                    h={72}
                    top={-10}
                    left={-20}
                    bg={isDark ? 'rgba(0,255,136,0.16)' : 'rgba(40,167,69,0.14)'}
                />
            </motion.div>
            <motion.div style={{ x: blobX, y: blobY }}>
                <Box
                    className="hero-blob no-print"
                    w={80}
                    h={80}
                    bottom={-24}
                    right={-24}
                    bg={isDark ? 'rgba(78,205,196,0.13)' : 'rgba(23,162,184,0.12)'}
                    style={{ animationDelay: '3s' }}
                />
            </motion.div>

            <Grid
                templateColumns={{ base: '1fr', lg: '320px 1fr' }}
                gap={{ base: 10, lg: 14 }}
                alignItems="start"
                position="relative"
                zIndex={1}
            >
                {/* Portrait column */}
                <GridItem>
                    <motion.div style={{ y: reduce ? 0 : leftParallax }}>
                        <VStack spacing={6} align="start">
                            <Box position="relative" w={{ base: '200px', md: '300px' }} h={{ base: '200px', md: '300px' }}>
                                {/* Rotating halo */}
                                <Box className="hero-ring no-print" aria-hidden />

                                <motion.div style={{ x: reduce ? 0 : portraitX, y: reduce ? 0 : portraitY }}>
                                    <TiltCard>
                                        <Box
                                            position="relative"
                                            overflow="hidden"
                                            p={{ base: 4, md: 6 }}
                                            bg={cardBg}
                                            borderRadius="0"
                                            border="3px solid"
                                            borderColor={accentColor}
                                            boxShadow={`0 0 40px ${isDark ? 'rgba(0,255,136,0.35)' : 'rgba(40,167,69,0.3)'}`}
                                            className="shine-card"
                                        >
                                            <img
                                                src={myPicProfessional}
                                                alt="Ojage Professional portrait"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    display: 'block',
                                                }}
                                            />
                                            {/* Scan sweep over the portrait */}
                                            <Box className="ps-scan no-print" aria-hidden />
                                        </Box>
                                    </TiltCard>
                                </motion.div>

                                {/* Floating badges */}
                                {badges.map((badge) => (
                                    <Box
                                        key={badge.label}
                                        className="ps-float no-print"
                                        position="absolute"
                                        top={badge.top}
                                        right={badge.right}
                                        left={badge.left}
                                        bottom={badge.bottom}
                                        display={{ base: 'none', md: 'flex' }}
                                        alignItems="center"
                                        gap={2}
                                        px={3}
                                        py={1.5}
                                        bg={bgColor}
                                        border="1px solid"
                                        borderColor={badge.color}
                                        boxShadow={`0 0 16px ${isDark ? badge.color + '44' : badge.color + '33'}`}
                                        style={{ animationDelay: badge.delay, animationDuration: badge.duration }}
                                        pointerEvents="none"
                                        aria-hidden
                                    >
                                        <Box
                                            w={2}
                                            h={2}
                                            transform="rotate(45deg)"
                                            bg={badge.color}
                                            className={badge.pulse ? 'pulse-dot' : undefined}
                                        />
                                        <Text fontFamily="mono" fontSize="xs" fontWeight="bold" letterSpacing="wider" color={textColor}>
                                            {badge.label}
                                        </Text>
                                    </Box>
                                ))}
                            </Box>

                            {/* Location */}
                            <HStack spacing={2}>
                                <Icon as={BiWorld} color={accentColor} boxSize={5} />
                                <Text color={textColor} fontSize="sm" fontFamily="mono">LOCATION</Text>
                            </HStack>
                            <Text color={textColor} fontSize="lg" fontWeight="bold">{personalInfo.location}</Text>
                        </VStack>
                    </motion.div>
                </GridItem>

                {/* Content column */}
                <GridItem>
                    <motion.div style={{ y: reduce ? 0 : rightParallax }}>
                        <VStack spacing={8} align="start">
                            {/* Terminal window tab */}
                            <HStack
                                spacing={2.5}
                                fontFamily="mono"
                                fontSize="xs"
                                color={isDark ? '#718096' : '#4a5568'}
                                border="1px solid"
                                borderColor={divider}
                                px={4}
                                py={2}
                            >
                                <Box className="hero-window-dot" bg="#ff5f57" borderRadius="full" aria-hidden />
                                <Box className="hero-window-dot" bg="#febc2e" borderRadius="full" aria-hidden />
                                <Box className="hero-window-dot" bg="#28c840" borderRadius="full" aria-hidden />
                                <Text ml={2} as="span">salathiel@ojage:~/portfolio</Text>
                            </HStack>

                            {/* Rotating typewriter title */}
                            <Box minH={{ base: '1.6em', md: '1.7em' }}>
                                <Text
                                    color={accentColor}
                                    fontSize={{ base: 'lg', md: 'xl' }}
                                    fontFamily="mono"
                                    fontWeight="bold"
                                    letterSpacing="wider"
                                >
                                    <Typewriter phrases={rotatingTitles} />
                                    <Text as="span" className="ps-caret no-print" color={accentColor} aria-hidden>
                                        ▍
                                    </Text>
                                </Text>
                            </Box>

                            {/* Gradient shimmer name */}
                            <Heading
                                size={{ base: '2xl', md: '3xl', lg: '4xl' }}
                                fontWeight="900"
                                lineHeight="1.1"
                                fontFamily="mono"
                                mb={2}
                                textTransform="uppercase"
                                className="shimmer-text"
                                style={{
                                    backgroundImage: `linear-gradient(90deg, ${accentColor}, ${tertiaryAccent}, ${accentColor})`,
                                }}
                            >
                                {reduce ? (
                                    <span>{personalInfo.name}</span>
                                ) : (
                                    <motion.span
                                        style={{ display: 'inline-flex', flexWrap: 'wrap' }}
                                        initial="hidden"
                                        animate="visible"
                                        variants={{
                                            hidden: {},
                                            visible: { transition: { staggerChildren: 0.04, delayChildren: 0.25 } },
                                        }}
                                    >
                                        {nameLetters.map((ch, i) => (
                                            <motion.span
                                                key={i}
                                                style={{ display: 'inline-block', whiteSpace: 'pre' }}
                                                variants={{
                                                    hidden: { opacity: 0, y: 18 },
                                                    visible: { opacity: 1, y: 0 },
                                                }}
                                                transition={{ duration: 0.45, ease: 'easeOut' }}
                                            >
                                                {ch}
                                            </motion.span>
                                        ))}
                                    </motion.span>
                                )}
                            </Heading>

                            {/* Description with interactive words */}
                            <Text
                                fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                                color={textColor}
                                maxW="4xl"
                                lineHeight="tall"
                                textAlign="justify"
                                style={{ '--ps-accent': accentColor } as React.CSSProperties}
                            >
                                {reduce ? (
                                    <span>{personalInfo.description}</span>
                                ) : (
                                    <motion.span
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        variants={{
                                            hidden: {},
                                            visible: { transition: { staggerChildren: 0.012, delayChildren: 0.4 } },
                                        }}
                                    >
                                        {descriptionWords.map((word, i) => (
                                            <motion.span
                                                key={i}
                                                className="ps-word"
                                                variants={{
                                                    hidden: { opacity: 0, y: 10, filter: 'blur(5px)' },
                                                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                                }}
                                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                            >
                                                {word}
                                            </motion.span>
                                        ))}
                                    </motion.span>
                                )}
                            </Text>

                            {/* Status with pulsing live dot */}
                            <Text fontSize={{ base: 'sm', md: 'md' }} color={secondaryAccent} maxW="4xl" lineHeight="tall">
                                <Box
                                    as="span"
                                    display="inline-block"
                                    w={2.5}
                                    h={2.5}
                                    transform="rotate(45deg)"
                                    bg={secondaryAccent}
                                    mr={2}
                                    className="pulse-dot no-print"
                                    aria-hidden
                                />
                                {personalInfo.status}
                            </Text>

                            {/* CTAs */}
                            <HStack spacing={4} flexWrap="wrap">
                                <MagneticButton>
                                    <Link
                                        as={RouterLink}
                                        to="/about"
                                        display="inline-flex"
                                        alignItems="center"
                                        gap={2}
                                        bg={accentColor}
                                        color="black"
                                        fontFamily="mono"
                                        fontWeight="bold"
                                        textTransform="uppercase"
                                        fontSize={{ base: 'sm', md: 'md' }}
                                        px={6}
                                        py={4}
                                        borderRadius="0"
                                        _hover={{ opacity: 0.9, boxShadow: `0 10px 30px -10px ${accentColor}` }}
                                        aria-label="View resume"
                                    >
                                        <Icon as={FaFileDownload} />
                                        View Resume
                                    </Link>
                                </MagneticButton>
                                <MagneticButton>
                                    <Button
                                        as="a"
                                        href={socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        leftIcon={<Icon as={FaGithub} />}
                                        size={{ base: 'md', md: 'lg' }}
                                        borderRadius="0"
                                        bg="transparent"
                                        color={textColor}
                                        border="2px solid"
                                        borderColor={textColor}
                                        fontFamily="mono"
                                        fontWeight="bold"
                                        textTransform="uppercase"
                                        px={6}
                                        py={5}
                                        _hover={{ bg: textColor, color: textColor === '#212529' ? 'white' : 'black' }}
                                        aria-label="Open GitHub profile"
                                    >
                                        GitHub
                                    </Button>
                                </MagneticButton>
                            </HStack>

                            {/* Fact cards */}
                            <SimpleGrid
                                columns={{ base: 1, md: 3 }}
                                spacing={4}
                                w="full"
                                mt={2}
                            >
                                {facts.map((fact, i) => {
                                    const factAccent = i === 0 ? accentColor : i === 1 ? secondaryAccent : tertiaryAccent;
                                    return (
                                        <motion.div
                                            key={fact.label}
                                            initial={reduce ? false : { opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ duration: 0.45, delay: i * 0.12, ease: 'easeOut' }}
                                        >
                                            <Box
                                                position="relative"
                                                overflow="hidden"
                                                bg={cardBg}
                                                border="1px solid"
                                                borderColor={divider}
                                                p={4}
                                                h="full"
                                                _hover={{
                                                    transform: 'translateY(-4px)',
                                                    borderColor: factAccent,
                                                    boxShadow: `0 12px 32px -14px ${factAccent}`,
                                                }}
                                                sx={{ transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease' }}
                                            >
                                                {/* Top accent bar */}
                                                <motion.div
                                                    style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', originX: 0 }}
                                                    initial={reduce ? false : { scaleX: 0 }}
                                                    whileInView={{ scaleX: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.12 }}
                                                >
                                                    <Box h="full" bg={factAccent} />
                                                </motion.div>

                                                <HStack spacing={3} align="start">
                                                    <Box
                                                        p={2}
                                                        border="2px solid"
                                                        borderColor={factAccent}
                                                        flexShrink={0}
                                                        boxShadow={`3px 3px 0 ${isDark ? factAccent + '22' : factAccent + '18'}`}
                                                    >
                                                        <Icon as={fact.icon} color={factAccent} boxSize={4} />
                                                    </Box>
                                                    <VStack align="start" spacing={1} minW={0}>
                                                        <Text
                                                            color={factAccent}
                                                            fontSize="xs"
                                                            fontFamily="mono"
                                                            fontWeight="bold"
                                                            letterSpacing="wider"
                                                        >
                                                            {fact.index} · {fact.label}
                                                        </Text>
                                                        <Text
                                                            color={textColor}
                                                            fontSize={{ base: 'sm', md: 'md' }}
                                                            fontWeight="600"
                                                            lineHeight="1.4"
                                                        >
                                                            {fact.value}
                                                        </Text>
                                                    </VStack>
                                                </HStack>
                                            </Box>
                                        </motion.div>
                                    );
                                })}
                            </SimpleGrid>
                        </VStack>
                    </motion.div>
                </GridItem>
            </Grid>
        </Box>
    );
};