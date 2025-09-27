import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    Badge,
    Wrap,
    WrapItem,
    HStack,
    Icon,
    Stack
} from "@chakra-ui/react";
import { FaCode, FaDatabase, FaTools, FaBrain, FaLaptopCode } from "react-icons/fa";
import { useAboutThemeConstants } from '../../hooks/useAboutThemeConstants';
import { SkillCategory } from '../../data/aboutData';

interface SkillsSectionProps {
    skills: SkillCategory[];
}

const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
        case 'frontend development':
            return FaCode;
        case 'backend development':
            return FaLaptopCode;
        case 'database & tools':
            return FaDatabase;
        case 'emerging technologies':
            return FaBrain;
        case 'platforms & tools':
            return FaTools;
        default:
            return FaCode;
    }
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
    const theme = useAboutThemeConstants();

    return (
        <Box
            bg={theme.cardBg}
            borderRadius="0"
            p={{ base: 6, md: 8 }}
            border="2px solid"
            borderColor={theme.cardBorder}
            position="relative"
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
                                    <VStack align="start" spacing={0}>
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
                                    </VStack>
                                </HStack>

                                {/* Skills Badges */}
                                <Wrap spacing={3}>
                                    {skillCategory.skills.map((skill, index) => (
                                        <WrapItem key={index}>
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
                                                    transition: 'all 0.2s ease'
                                                }}
                                                cursor="default"
                                                transition="all 0.2s ease"
                                            >
                                                {skill}
                                            </Badge>
                                        </WrapItem>
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