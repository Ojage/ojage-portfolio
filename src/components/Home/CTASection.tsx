import React from 'react';
import {
    VStack,
    Text,
    Heading,
    Icon,
    Grid,
    GridItem,
    Card,
    CardBody,
    Link
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MotionButton } from '../common/MotionElts';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { engagementTypes, socialLinks } from '../../data/homeData';

export const CTASection: React.FC = () => {
    const { cardBg, textColor, accentColor } = useThemeConstants();

    return (
        <Card bg={cardBg} borderRadius="0" border="3px solid" borderColor={accentColor} overflow="hidden">
            <CardBody p={12}>
                <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={12} alignItems="center">
                    <GridItem>
                        <VStack spacing={6} align="start">
                            <Heading size="2xl" color={textColor} fontFamily="mono" textTransform="uppercase" lineHeight="1.2">
                                LET'S BUILD THE FUTURE TOGETHER
                            </Heading>
                            <Text color={textColor} fontSize="xl" lineHeight="tall">
                                READY TO COLLABORATE ON GAME-CHANGING PROJECTS THAT REDEFINE
                                INDUSTRY STANDARDS. SPECIALIZED IN HIGH-IMPACT SOLUTIONS THAT
                                DELIVER MEASURABLE BUSINESS VALUE.
                            </Text>

                            <VStack spacing={3} align="start">
                                <Text color={accentColor} fontFamily="mono" fontWeight="bold">ENGAGEMENT TYPES:</Text>
                                {engagementTypes.map((type, idx) => (
                                    <Text key={idx} color={textColor}>• {type}</Text>
                                ))}
                            </VStack>
                        </VStack>
                    </GridItem>

                    <GridItem>
                        <VStack spacing={6} align="center">
                            <MotionButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                leftIcon={<Icon as={FaGithub} />}
                                bg={textColor}
                                color={textColor === "#212529" ? "white" : "black"}
                                variant="solid"
                                size="lg"
                                borderRadius="0"
                                fontFamily="mono"
                                fontWeight="bold"
                                px={8}
                                py={6}
                                as={Link}
                                href={socialLinks.github}
                                fontSize="lg"
                                textTransform="uppercase"
                                border="2px solid"
                                borderColor={textColor}
                                _hover={{
                                    bg: "transparent",
                                    color: textColor,
                                    borderColor: textColor
                                }}
                                w="full"
                            >
                                VIEW GITHUB
                            </MotionButton>

                            <MotionButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                leftIcon={<Icon as={FaLinkedin } />}
                                bg={accentColor}
                                color={accentColor === "#00ff88" ? "gray" : "black"}
                                variant="solid"
                                size="lg"
                                borderRadius="0"
                                fontFamily="mono"
                                fontWeight="bold"
                                px={8}
                                py={6}
                                as={Link}
                                href={socialLinks.linkedin}
                                fontSize="lg"
                                textTransform="uppercase"
                                border="2px solid"
                                borderColor={accentColor}
                                _hover={{
                                    bg: "transparent",
                                    color: accentColor,
                                    borderColor: accentColor
                                }}
                                w="full"
                            >
                                CONNECT NOW
                            </MotionButton>
                        </VStack>
                    </GridItem>
                </Grid>
            </CardBody>
        </Card>
    );
};