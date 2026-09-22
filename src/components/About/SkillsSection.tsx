import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    Badge,
    Wrap,
    HStack,
    Icon,
    Stack,
} from "@chakra-ui/react";
import { FaCode, FaDatabase, FaBrain, FaLaptopCode, FaTerminal } from "react-icons/fa";
import { motion, useReducedMotion } from 'framer-motion';
import { useAboutThemeConstants } from '../../hooks/useAboutThemeConstants';
import { SkillCategory } from '../../data/aboutData';

interface SkillsSectionProps {
    skills: SkillCategory[];
}

const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
        case 'frontend':
            return FaCode;
        case 'backend':
            return FaLaptopCode;
        case 'databases':
            return FaDatabase;
        case 'ai & llm':
            return FaBrain;
        case 'cloud & devops':
            return FaDatabase;
        case 'automation':
            return FaTerminal;
        case 'third-party apis':
            return FaLaptopCode;
        case 'engineering':
            return FaTerminal;
        default:
            return FaCode;
    }
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
    const theme = useAboutThemeConstants();
    const reduce = useReducedMotion();

    const allSkills = skills.flatMap((category) => category.skills);
    const marqueeSkills = [...allSkills, ...allSkills];

    return (
        <Box
            bg={theme.cardBg}
            borderRadius="0"
            p={{ base: 6, md: 8 }}
            border="2px solid"
            borderColor={theme.cardBorder}
            position="relative"
            overflow="hidden"
        >
            <VStack align="start" spacing={6} width="full">
                {/* Header */}
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
                        boxShadow={`5px 5px 0 ${theme.accentLight}`}
                    >
                        <Icon
                            as={FaCode}
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
                            03_TECHNICAL_SKILLS
                        </Text>
                        <Heading
                            as="h2"
                            size="xl"
                            color={theme.primaryText}
                            fontFamily="mono"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            Expertise
                        </Heading>
                    </VStack>
                </Stack>

                {/* Marquee strip (decorative, hidden on print) */}
                <Box className="no-print marquee-mask" w="full" borderY="1px solid" borderColor={theme.divider} py={3}>
                    <Box className="marquee-track">
                        {marqueeSkills.map((skill, index) => (
                            <Text
                                key={index}
                                as="span"
                                fontFamily="mono"
                                fontSize="sm"
                                fontWeight="bold"
                                color={theme.primaryText}
                                textTransform="uppercase"
                                letterSpacing="wider"
                                whiteSpace="nowrap"
                                mx={4}
                            >
                                <Text as="span" color={theme.accent} mr={2}>
                                    ◆
                                </Text>
                                {skill}
                            </Text>
                        ))}
                    </Box>
                </Box>

                {/* Skills Categories */}
                <VStack spacing={6} align="stretch" w="full">
                    {skills.map((skillCategory, categoryIndex) => {
                        const IconComponent = getCategoryIcon(skillCategory.category);

                        return (
                            <Box key={skillCategory.id}>
                                {/* Category Header */}
                                <HStack spacing={3} mb={4}>
                                    <Box
                                        p={2}
                                        bg="transparent"
                                        border="2px solid"
                                        borderColor={theme.accent}
                                        borderRadius="0"
                                    >
                                        <Icon
                                            as={IconComponent}
                                            color={theme.accent}
                                            boxSize={4}
                                        />
                                    </Box>
                                    <VStack align="start" spacing={0} w="full">
                                        <Text
                                            color={theme.accent}
                                            fontSize="xs"
                                            fontFamily="mono"
                                            fontWeight="bold"
                                            textTransform="uppercase"
                                            letterSpacing="wider"
                                        >
                                            {String(categoryIndex + 1).padStart(2, '0')}_CATEGORY
                                        </Text>
                                        <Heading
                                            as="h3"
                                            size="sm"
                                            color={theme.primaryText}
                                            fontFamily="mono"
                                            textTransform="uppercase"
                                            letterSpacing="wide"
                                        >
                                            {skillCategory.category}
                                        </Heading>
                                        {/* Animated underline */}
                                        <motion.div
                                            style={{ width: '100%', originX: 0 }}
                                            initial={reduce ? false : { scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                        >
                                            <Box w={24} h="2px" bg={theme.accent} mt={1} />
                                        </motion.div>
                                    </VStack>
                                </HStack>

                                {/* Skills Badges */}
                                <Wrap spacing={3}>
                                    {skillCategory.skills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            initial={reduce ? false : { opacity: 0, y: 12 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.4 }}
                                            transition={{
                                                duration: 0.35,
                                                delay: categoryIndex * 0.04 + index * 0.03,
                                                ease: 'easeOut',
                                            }}
                                        >
                                            <Badge
                                                bg={theme.badgeBg}
                                                color={theme.badgeText}
                                                border="2px solid"
                                                borderColor={theme.badgeBorder}
                                                borderRadius="0"
                                                px={4}
                                                py={2}
                                                fontSize="sm"
                                                fontWeight="bold"
                                                textTransform="uppercase"
                                                fontFamily="mono"
                                                letterSpacing="wider"
                                                _hover={{
                                                    bg: theme.cardBg,
                                                    color: theme.accent,
                                                    borderColor: theme.accent,
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: `0 6px 18px -6px ${theme.accentLight}`,
                                                    transition: 'all 0.2s ease',
                                                }}
                                                cursor="default"
                                                transition="all 0.2s ease"
                                            >
                                                {skill}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </Wrap>
                            </Box>
                        );
                    })}
                </VStack>

                {/* Bottom accent line */}
                <Box
                    w="full"
                    h="2px"
                    bg={theme.accent}
                    mt={4}
                />
            </VStack>
        </Box>
    );
};

export default SkillsSection;