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
} from '@chakra-ui/react';
import { BiWorld } from 'react-icons/bi';
import { FaFileDownload, FaGithub } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { personalInfo, socialLinks } from '../../data/homeData';
import myPicProfessional from "../../assets/images/myPicProfessional.jpeg";

export const HeroSection: React.FC = () => {
    const { cardBg, accentColor, textColor, secondaryAccent, tertiaryAccent } = useThemeConstants();

    return (
        <Grid templateColumns={{ base: "1fr", lg: "300px 1fr" }} gap={12} alignItems="start">
            <GridItem>
                <VStack spacing={6} align="start">
                    <Box
                        p={{ base: 4, md: 6 }}
                        bg={cardBg}
                        borderRadius="0"
                        border="3px solid"
                        borderColor={accentColor}
                        boxShadow="0 0 30px rgba(0, 255, 136, 0.3)"
                        w={{ base: "200px", md: "300px" }}
                        h={{ base: "200px", md: "300px" }}
                    >
                        <img
                            src={myPicProfessional}
                            alt="Ojage Professional portrait"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
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
                            {personalInfo.title}
                        </Text>
                        <Heading
                            size={{base: "2xl", md: "3xl", lg: "4xl"}}
                            color={textColor}
                            fontWeight="900"
                            lineHeight="1.1"
                            fontFamily="mono"
                            mb={6}
                            textTransform="uppercase"
                        >
                            {personalInfo.name}
                        </Heading>
                        <Text fontSize={{base: "md", md: "lg", lg: "xl"}} color={textColor} maxW="4xl" lineHeight="tall" mb={4}>
                            {personalInfo.description}
                        </Text>
                        <Text fontSize={{base: "sm", md: "md"}} color={secondaryAccent} maxW="4xl" lineHeight="tall" mb={8}>
                            {personalInfo.status}
                        </Text>
                    </Box>

                    <HStack spacing={4} flexWrap="wrap">
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
                            _hover={{ opacity: 0.9 }}
                            aria-label="View resume"
                        >
                            <Icon as={FaFileDownload} />
                            View Resume
                        </Link>
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
                    </HStack>

                    <HStack spacing={8} flexWrap="wrap" mt={4}>
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