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
    CardBody
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
            <CardBody p={12}>
                <Grid templateColumns={{ base: "1fr", lg: "1fr 2fr" }} gap={12} alignItems="center">
                    <GridItem>
                        <VStack spacing={6} align="start">
                            <Box
                                p={6}
                                bg={tertiaryAccent}
                                borderRadius="0"
                                border="2px solid"
                                borderColor={tertiaryAccent}
                            >
                                <Icon as={FaRocket} color="black" boxSize={12} />
                            </Box>
                            <VStack spacing={2} align="start">
                                <Text color={tertiaryAccent} fontSize="sm" fontFamily="mono" fontWeight="bold">CURRENT ROLE</Text>
                                <Heading size="lg" color={textColor} fontFamily="mono">CO-FOUNDER</Heading>
                                <Text color={textColor} fontSize="lg" fontWeight="bold">NNACT</Text>
                            </VStack>
                        </VStack>
                    </GridItem>

                    <GridItem>
                        <VStack spacing={6} align="start">
                            <Text fontSize="xl" color={textColor} lineHeight="tall">
                                CURRENTLY ARCHITECTING THE FUTURE OF TECHNOLOGY AT NNACT AS CO-FOUNDER.
                                FORMER TECHNICAL DIRECTOR AT ORA CONSULTING, WHERE I LED CROSS-FUNCTIONAL
                                TEAMS AND DELIVERED MISSION-CRITICAL SOFTWARE SOLUTIONS.
                            </Text>

                            <VStack spacing={4} align="start" w="full">
                                <Text color={tertiaryAccent} fontFamily="mono" fontWeight="bold">LEADERSHIP METRICS:</Text>
                                <Grid templateColumns="repeat(2, 1fr)" gap={6} w="full">
                                    {leadershipMetrics.map((metric, idx) => (
                                        <VStack key={idx} align="start" spacing={1}>
                                            <Text color={textColor} fontSize="2xl" fontWeight="bold" fontFamily="mono">
                                                {metric.value}
                                            </Text>
                                            <Text color={textColor} fontSize="sm">{metric.label}</Text>
                                        </VStack>
                                    ))}
                                </Grid>
                            </VStack>
                        </VStack>
                    </GridItem>
                </Grid>
            </CardBody>
        </Card>
    );
};