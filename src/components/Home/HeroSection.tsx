import React from 'react';
import {
    Grid,
    GridItem,
    VStack,
    HStack,
    Box,
    Text,
    Heading,
    Icon
} from '@chakra-ui/react';
import { BiWorld } from 'react-icons/bi';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { personalInfo } from '../../data/homeData';
import myPicProfessional from "../../assets/images/myPicProfessional.jpeg";

export const HeroSection: React.FC = () => {
    const { bgColor, cardBg, accentColor, textColor, secondaryAccent, tertiaryAccent } = useThemeConstants();

    return (
        <Grid templateColumns={{ base: "1fr", lg: "300px 1fr" }} gap={12} alignItems="start">
            <GridItem>
                <VStack spacing={6} align="start">
                    <Box
                        p={6}
                        bg={cardBg}
                        borderRadius="0"
                        border="3px solid"
                        borderColor={accentColor}
                        boxShadow="0 0 30px rgba(0, 255, 136, 0.3)"
                    >
                        <img src={myPicProfessional} alt="Ojage Professional portrait" />
                    </Box>

                    <VStack spacing={3} align="start">
                        <HStack spacing={2}>
                            <Icon as={BiWorld} color={accentColor} boxSize={5} />
                            <Text color={textColor} fontSize="sm" fontFamily="mono">LOCATION</Text>
                        </HStack>
                        <Text color={textColor} fontSize="lg" fontWeight="bold">{personalInfo.location}</Text>
                    </VStack>
                </VStack>
            </GridItem>

            <GridItem>
                <VStack spacing={8} align="start">
                    <Box>
                        <Text
                            color={accentColor}
                            fontSize="lg"
                            fontFamily="mono"
                            fontWeight="bold"
                            mb={4}
                            letterSpacing="wider"
                        >
                            [{personalInfo.title}]
                        </Text>
                        <Heading
                            size="4xl"
                            color={textColor}
                            fontWeight="900"
                            lineHeight="1.1"
                            fontFamily="mono"
                            mb={6}
                            textTransform="uppercase"
                        >
                            {personalInfo.name}
                        </Heading>
                        <Text fontSize="xl" color={textColor} maxW="4xl" lineHeight="tall" mb={8}>
                            {personalInfo.description}
                        </Text>
                    </Box>

                    <HStack spacing={8} flexWrap="wrap">
                        <VStack spacing={2} align="start">
                            <Text color={accentColor} fontSize="sm" fontFamily="mono" fontWeight="bold">EDUCATION</Text>
                            <Text color={textColor} fontSize="lg">{personalInfo.education}</Text>
                        </VStack>
                        <VStack spacing={2} align="start">
                            <Text color={secondaryAccent} fontSize="sm" fontFamily="mono" fontWeight="bold">POSITION</Text>
                            <Text color={textColor} fontSize="lg">{personalInfo.position}</Text>
                        </VStack>
                        <VStack spacing={2} align="start">
                            <Text color={tertiaryAccent} fontSize="sm" fontFamily="mono" fontWeight="bold">EXPERIENCE</Text>
                            <Text color={textColor} fontSize="lg">{personalInfo.experience}</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </GridItem>
        </Grid>
    );
};