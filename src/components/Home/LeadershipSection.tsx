import React from 'react';
import {
    VStack,
    Box,
    Text,
    Heading,
    Icon,
    Grid,
    GridItem,
    Card,
    CardBody,
    SimpleGrid,
} from '@chakra-ui/react';
import { FaRocket } from 'react-icons/fa';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { leadershipMetrics } from '../../data/homeData';

export const LeadershipSection: React.FC = () => {
    const { accentCardBg, textColor, tertiaryAccent } = useThemeConstants();

    return (
        <Card
            bg={accentCardBg}
            borderRadius="0"
            border="2px solid"
            borderColor={tertiaryAccent}
            overflow="hidden"
        >
            <CardBody p={{ base: 6, sm: 8, md: 10, lg: 12 }}>
                <Grid
                    templateColumns={{ base: '1fr', lg: '1fr 2fr' }}
                    gap={{ base: 6, sm: 8, md: 10, lg: 12 }}
                    alignItems="center"
                >
                    {/* Left column: role + icon */}
                    <GridItem>
                        <VStack spacing={{ base: 4, md: 6 }} align="start">
                            <Box
                                p={{ base: 3, sm: 4, md: 6 }}
                                bg={tertiaryAccent}
                                borderRadius="0"
                                border="2px solid"
                                borderColor={tertiaryAccent}
                                aria-label="Leadership icon"
                            >
                                <Icon as={FaRocket} color="black" boxSize={{ base: 8, sm: 10, md: 12 }} />
                            </Box>

                            <VStack spacing={{ base: 1, md: 2 }} align="start" minW={0}>
                                <Text
                                    color={tertiaryAccent}
                                    fontSize={{ base: 'xs', sm: 'sm' }}
                                    fontFamily="mono"
                                    fontWeight="bold"
                                    noOfLines={1}
                                >
                                    CURRENT ROLE
                                </Text>
                                <Heading
                                    size="lg"
                                    color={textColor}
                                    fontFamily="mono"
                                    fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                                    lineHeight={{ base: 1.2, md: 1.25 }}
                                >
                                    CO-FOUNDER
                                </Heading>
                                <Text
                                    color={textColor}
                                    fontSize={{ base: 'md', md: 'lg' }}
                                    fontWeight="bold"
                                    noOfLines={1}
                                >
                                    NNACT
                                </Text>
                            </VStack>
                        </VStack>
                    </GridItem>

                    {/* Right column: bio + metrics */}
                    <GridItem>
                        <VStack spacing={{ base: 4, md: 6 }} align="start">
                            <Text
                                fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                                color={textColor}
                                lineHeight={{ base: 'tall', md: 'taller' }}
                            >
                                CURRENTLY ARCHITECTING THE FUTURE OF TECHNOLOGY AT NNACT AS CO-FOUNDER. FORMER
                                TECHNICAL DIRECTOR AT ORA CONSULTING, WHERE I LED CROSS-FUNCTIONAL TEAMS AND
                                DELIVERED MISSION-CRITICAL SOFTWARE SOLUTIONS.
                            </Text>

                            <VStack spacing={{ base: 2, md: 4 }} align="start" w="full">
                                <Text
                                    color={tertiaryAccent}
                                    fontFamily="mono"
                                    fontWeight="bold"
                                    fontSize={{ base: 'xs', sm: 'sm' }}
                                >
                                    LEADERSHIP METRICS:
                                </Text>

                                {/* Responsive metrics grid */}
                                <SimpleGrid
                                    columns={{ base: 1, sm: 2, xl: 3 }}
                                    spacing={{ base: 4, md: 6 }}
                                    w="full"
                                >
                                    {leadershipMetrics.map((metric, idx) => (
                                        <VStack key={idx} align="start" spacing={{ base: 0.5, md: 1 }}>
                                            <Text
                                                color={textColor}
                                                fontSize={{ base: 'xl', sm: '2xl' }}
                                                fontWeight="bold"
                                                fontFamily="mono"
                                            >
                                                {metric.value}
                                            </Text>
                                            <Text color={textColor} fontSize={{ base: 'sm', md: 'sm' }}>
                                                {metric.label}
                                            </Text>
                                        </VStack>
                                    ))}
                                </SimpleGrid>
                            </VStack>
                        </VStack>
                    </GridItem>
                </Grid>
            </CardBody>
        </Card>
    );
};
