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
    Link,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MotionButton } from '../common/MotionElts';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { engagementTypes, socialLinks } from '../../data/homeData';

export const CTASection: React.FC = () => {
    const { cardBg, textColor, accentColor } = useThemeConstants();

    return (
        <Card
            bg={cardBg}
            borderRadius="0"
            border="3px solid"
            borderColor={accentColor}
            overflow="hidden"
        >
            <CardBody p={{ base: 6, sm: 8, md: 10, lg: 12 }}>
                <Grid
                    templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
                    gap={{ base: 6, sm: 8, md: 10, lg: 12 }}
                    alignItems="center"
                >
                    <GridItem>
                        <VStack spacing={{ base: 4, md: 6 }} align="start">
                            <Heading
                                color={textColor}
                                fontFamily="mono"
                                textTransform="uppercase"
                                lineHeight={{ base: 1.2, md: 1.2 }}
                                fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
                            >
                                LET&apos;S BUILD THE FUTURE TOGETHER
                            </Heading>

                            <Text
                                color={textColor}
                                lineHeight={{ base: 'tall', md: 'taller' }}
                                fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                            >
                                READY TO COLLABORATE ON GAME-CHANGING PROJECTS THAT REDEFINE INDUSTRY STANDARDS.
                                SPECIALIZED IN HIGH-IMPACT SOLUTIONS THAT DELIVER MEASURABLE BUSINESS VALUE.
                            </Text>

                            <VStack spacing={{ base: 2, md: 3 }} align="start" w="full">
                                <Text
                                    color={accentColor}
                                    fontFamily="mono"
                                    fontWeight="bold"
                                    fontSize={{ base: 'xs', sm: 'sm' }}
                                >
                                    ENGAGEMENT TYPES:
                                </Text>
                                <UnorderedList
                                    spacing={{ base: 1.5, md: 2 }}
                                    ml={{ base: 5, md: 6 }}
                                    stylePosition="outside"
                                >
                                    {engagementTypes.map((type, idx) => (
                                        <ListItem key={idx}>
                                            <Text color={textColor} fontSize={{ base: 'sm', sm: 'md' }}>
                                                {type}
                                            </Text>
                                        </ListItem>
                                    ))}
                                </UnorderedList>
                            </VStack>
                        </VStack>
                    </GridItem>

                    <GridItem>
                        <VStack spacing={{ base: 4, sm: 5, md: 6 }} align="center" w="full">
                            <MotionButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                leftIcon={<Icon as={FaGithub} boxSize={{ base: 4, sm: 5 }} aria-hidden />}
                                bg={textColor}
                                color={textColor === '#212529' ? 'white' : 'black'}
                                variant="solid"
                                size={{ base: 'md', sm: 'lg' }}
                                borderRadius="0"
                                fontFamily="mono"
                                fontWeight="bold"
                                px={{ base: 6, sm: 8 }}
                                py={{ base: 5, sm: 6 }}
                                as={Link}
                                href={socialLinks.github}
                                isExternal
                                rel="noopener noreferrer"
                                fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                                textTransform="uppercase"
                                border="2px solid"
                                borderColor={textColor}
                                _hover={{
                                    bg: 'transparent',
                                    color: textColor,
                                    borderColor: textColor,
                                }}
                                w="full"
                                aria-label="View GitHub profile"
                            >
                                VIEW GITHUB
                            </MotionButton>

                            <MotionButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                leftIcon={<Icon as={FaLinkedin} boxSize={{ base: 4, sm: 5 }} aria-hidden />}
                                bg={accentColor}
                                color={accentColor !== '#00ff88' ? 'whiteAlpha.900' : 'black'}
                                variant="solid"
                                size={{ base: 'md', sm: 'lg' }}
                                borderRadius="0"
                                fontFamily="mono"
                                fontWeight="bold"
                                px={{ base: 6, sm: 8 }}
                                py={{ base: 5, sm: 6 }}
                                as={Link}
                                href={socialLinks.linkedin}
                                isExternal
                                rel="noopener noreferrer"
                                fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                                textTransform="uppercase"
                                border="2px solid"
                                borderColor={accentColor}
                                _hover={{
                                    bg: 'transparent',
                                    color: accentColor,
                                    borderColor: accentColor,
                                }}
                                w="full"
                                aria-label="Connect on LinkedIn"
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
