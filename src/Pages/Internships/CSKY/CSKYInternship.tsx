import { Box, Text, VStack, Heading, Divider, List, ListItem, HStack, Badge, Link, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useStylesConstants } from "../../../hooks/useStylesConstants";
import { ChevronLeftIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const CSKYInternship = () => {
    const { bgColor, cardBg, textColor, accentColor, secondaryAccent, isDark } = useStylesConstants();
    const muted = isDark ? '#a0aec0' : '#4a5568';

    return (
        <Flex mt={55} bg={bgColor} minH="100vh" color={textColor} p={{ base: 4, md: 8 }} gap={6} wrap="wrap">
            {/* Main Content */}
            <Box flex="1" minW={0} bg={cardBg} p={{ base: 5, md: 8 }} borderRadius="0" border="2px solid" borderColor={secondaryAccent}>
                {/* Back button */}
                <Flex align="center" mb={8}>
                    <Link as={RouterLink} to="/internships" color={accentColor} _hover={{ textDecoration: 'none' }}>
                        <HStack spacing={2}>
                            <ChevronLeftIcon boxSize={6} />
                            <Text fontSize="lg" fontFamily="mono" fontWeight="bold">Back to Internships</Text>
                        </HStack>
                    </Link>
                </Flex>

                <VStack spacing={6} align="stretch">
                    <Box>
                        <HStack spacing={4} align="center" mb={4} wrap="wrap">
                            <Box p={3} bg={secondaryAccent} borderRadius="0" border="2px solid" borderColor={secondaryAccent} flexShrink={0}>
                                <IconBriefcase />
                            </Box>
                            <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color={textColor} fontFamily="mono" textTransform="uppercase" letterSpacing="wide">
                                Full-Stack Engineering Intern
                            </Heading>
                        </HStack>

                        <Heading as="h2" size={{ base: 'lg', md: 'xl' }} mb={4} color={secondaryAccent} fontFamily="mono">
                            CSKY Telecom
                        </Heading>

                        <HStack spacing={4} wrap="wrap" mb={6}>
                            <Badge bg={secondaryAccent} color="black" px={3} py={1} fontSize="md" borderRadius="0">
                                Oct 2025 - Nov 2025
                            </Badge>
                            <HStack spacing={2} color={accentColor}>
                                <CheckCircleIcon />
                                <Text fontSize="sm" fontFamily="mono" fontWeight="bold" textTransform="uppercase">Completed</Text>
                            </HStack>
                            <HStack spacing={2} color={muted}>
                                <FaCalendarAlt />
                                <Text fontSize="sm" fontFamily="mono">2-month internship</Text>
                            </HStack>
                            <HStack spacing={2} color={muted}>
                                <FaMapMarkerAlt />
                                <Text fontSize="sm" fontFamily="mono">Limbe, Cameroon</Text>
                            </HStack>
                        </HStack>
                        <Divider mb={6} borderColor={secondaryAccent} />
                    </Box>

                    <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6}>
                        <GridItem>
                            <VStack spacing={6} align="start">
                                <Box>
                                    <Heading as="h3" size="lg" mb={3} color={accentColor} fontFamily="mono">About the Role</Heading>
                                    <Text fontSize="lg" lineHeight="tall">
                                        Contributed to production web applications and backend services built with NestJS,
                                        TypeScript, and React, deployed on Google Cloud Platform. Worked within a small
                                        engineering team shipping to production multiple times per week.
                                    </Text>
                                </Box>

                                <Box>
                                    <Heading as="h3" size="lg" mb={3} color={accentColor} fontFamily="mono">Key Contributions</Heading>
                                    <List spacing={3}>
                                        <ListItem>• Built and maintained NestJS backend services and React interfaces</ListItem>
                                        <ListItem>• Worked within CI/CD pipelines powered by GitHub Actions and Google Cloud Build</ListItem>
                                        <ListItem>• Assisted with async background processing and GCP Cloud Logging instrumentation</ListItem>
                                        <ListItem>• Used AI-assisted development tools (Claude Code, GitHub Copilot) in daily work</ListItem>
                                    </List>
                                </Box>
                            </VStack>
                        </GridItem>

                        <GridItem>
                            <Box border="2px solid" borderColor={secondaryAccent} p={5} borderRadius="0">
                                <Heading as="h3" size="md" mb={4} color={accentColor} fontFamily="mono">Technologies Used</Heading>
                                <Flex wrap="wrap" gap={3}>
                                    {["NestJS", "TypeScript", "React", "GCP Cloud Run", "Cloud Build", "GitHub Actions", "Docker"].map((tech) => (
                                        <Badge key={tech} bg="transparent" color={secondaryAccent} border="2px solid" borderColor={secondaryAccent} px={4} py={2} fontSize="sm" fontWeight="bold" textTransform="uppercase" fontFamily="mono" borderRadius="0">
                                            {tech}
                                        </Badge>
                                    ))}
                                </Flex>
                            </Box>
                        </GridItem>
                    </Grid>

                    <Box p={5} border="2px solid" borderColor={accentColor} borderRadius="0">
                        <Text color={textColor} fontSize="md">
                            <strong style={{ color: accentColor }}>Note:</strong>&nbsp;
                            Following the internship, I joined CSKY Telecom full-time as a Full-Stack Engineer
                            (NestJS, TypeScript, React on GCP Cloud Run).
                        </Text>
                    </Box>
                </VStack>
            </Box>
        </Flex>
    );
};

const IconBriefcase = () => (
    <FaBriefcase color="black" size="28px" aria-label="Full-Stack Engineering Intern" />
);

export default CSKYInternship;