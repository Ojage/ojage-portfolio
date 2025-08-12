import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Card,
  CardBody,
  Badge,
  Grid,
  GridItem,
  Avatar,
  Flex,
  Icon,
  useColorModeValue,
  Divider,
  Link
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BiBriefcase, BiCode, BiWorld } from 'react-icons/bi';
import { FaBrain, FaGithub, FaGraduationCap, FaLinkedinIn, FaRocket, FaAward, FaCog } from 'react-icons/fa';
import { MotionBox, MotionButton } from '../common/MotionElts';
import { MorphCard } from '../common/MorphCard';
import { itemVariantTypes } from '../../types';



const Home = () => {
  const bgColor = useColorModeValue('#0a0a0a', '#000000');
  const cardBg = useColorModeValue('#1a1a1a', '#111111');
  const accentCardBg = useColorModeValue('#2d2d2d', '#1f1f1f');
  const textColor = useColorModeValue('#e0e0e0', '#f0f0f0');
  const accentColor = useColorModeValue('#00ff88', '#00ff88');
  const secondaryAccent = useColorModeValue('#ff6b35', '#ff6b35');
  const tertiaryAccent = useColorModeValue('#4ecdc4', '#4ecdc4');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };


  const itemVariants: itemVariantTypes = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -4,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box minH="100vh" mt="2rem" bg={bgColor} py={16}>
      <Container maxW="8xl" px={8}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <MotionBox variants={itemVariants} mb={20}>
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
                    <Avatar
                      size="2xl"
                      name="Ojage Salathiel Ayuk"
                      bg={accentColor}
                      color="black"
                      fontSize="3xl"
                      borderRadius="0"
                    />
                  </Box>

                  <VStack spacing={3} align="start">
                    <HStack spacing={2}>
                      <Icon as={BiWorld} color={accentColor} boxSize={5} />
                      <Text color={textColor} fontSize="sm" fontFamily="mono">LOCATION</Text>
                    </HStack>
                    <Text color={textColor} fontSize="lg" fontWeight="bold">Buea, Cameroon</Text>
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
                      [ELITE SOFTWARE ARCHITECT]
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
                      OJAGE SALATHIEL AYUK
                    </Heading>
                    <Text fontSize="xl" color={textColor} maxW="4xl" lineHeight="tall" mb={8}>
                      FULL STACK SOFTWARE ENGINEER & AI INNOVATOR SPECIALIZING IN
                      ENTERPRISE-GRADE REACT ECOSYSTEMS, TYPESCRIPT ARCHITECTURES,
                      AND CUTTING-EDGE AI/ML SOLUTIONS FOR CULTURAL INTEGRATION.
                    </Text>
                  </Box>

                  <HStack spacing={8} flexWrap="wrap">
                    <VStack spacing={2} align="start">
                      <Text color={accentColor} fontSize="sm" fontFamily="mono" fontWeight="bold">EDUCATION</Text>
                      <Text color={textColor} fontSize="lg">HIMS BUEA</Text>
                    </VStack>
                    <VStack spacing={2} align="start">
                      <Text color={secondaryAccent} fontSize="sm" fontFamily="mono" fontWeight="bold">POSITION</Text>
                      <Text color={textColor} fontSize="lg">CO-FOUNDER @ NNACT</Text>
                    </VStack>
                    <VStack spacing={2} align="start">
                      <Text color={tertiaryAccent} fontSize="sm" fontFamily="mono" fontWeight="bold">EXPERIENCE</Text>
                      <Text color={textColor} fontSize="lg">FORMER TECHNICAL DIRECTOR</Text>
                    </VStack>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>
          </MotionBox>

          {/* Core Competencies Grid */}
          <MotionBox variants={itemVariants} mb={20}>
            <VStack spacing={8} align="start" mb={12}>
              <Text
                color={accentColor}
                fontSize="lg"
                fontFamily="mono"
                fontWeight="bold"
                letterSpacing="wider"
              >
                [CORE COMPETENCIES]
              </Text>
            </VStack>

            <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={8}>
              <GridItem>
                <MorphCard
                  bg={cardBg}
                  borderRadius="0"
                  border="2px solid"
                  borderColor={secondaryAccent}
                  h="full"
                  overflow="hidden"
                >
                  <CardBody p={10}>
                    <VStack align="start" spacing={6} h="full">
                      <HStack spacing={4}>
                        <Box
                          p={4}
                          bg={accentColor}
                          borderRadius="0"
                          border="2px solid"
                          borderColor={accentColor}
                        >
                          <Icon as={BiCode} color="black" boxSize={8} />
                        </Box>
                        <VStack align="start" spacing={1}>
                          <Text color={accentColor} fontSize="sm" fontFamily="mono" fontWeight="bold">MODULE_01</Text>
                          <Heading size="xl" color={textColor} fontFamily="mono" textTransform="uppercase">
                            REACT ENGINEERING
                          </Heading>
                        </VStack>
                      </HStack>

                      <Text color={textColor} fontSize="lg" lineHeight="tall">
                        ARCHITECTING ENTERPRISE-SCALE SAAS PLATFORMS WITH REACT, TYPESCRIPT,
                        AND ADVANCED WEB TECHNOLOGIES. SPECIALIZING IN COMPLEX STATE MANAGEMENT,
                        OFFLINE-FIRST APPLICATIONS, AND HIGH-PERFORMANCE UI SYSTEMS.
                      </Text>

                      <Box flex={1} w="full">
                        <Text fontWeight="bold" color={accentColor} mb={4} fontFamily="mono">
                          FLAGSHIP PROJECTS:
                        </Text>
                        <VStack align="start" spacing={3} pl={6}>
                          <Box>
                            <Text color={textColor} fontWeight="bold">LIAHAPPLY</Text>
                            <Text color={textColor} fontSize="sm">Advanced job management system with enterprise-grade role-based access control</Text>
                          </Box>
                          <Box>
                            <Text color={textColor} fontWeight="bold">SAAS PLATFORMS</Text>
                            <Text color={textColor} fontSize="sm">Multiple modern SaaS solutions with offline-first architecture</Text>
                          </Box>
                        </VStack>
                      </Box>

                      <HStack spacing={3} flexWrap="wrap">
                        <Badge bg={accentColor} color="black" fontFamily="mono" fontSize="xs" px={3} py={1} borderRadius="0">REACT</Badge>
                        <Badge bg={accentColor} color="black" fontFamily="mono" fontSize="xs" px={3} py={1} borderRadius="0">TYPESCRIPT</Badge>
                        <Badge bg={accentColor} color="black" fontFamily="mono" fontSize="xs" px={3} py={1} borderRadius="0">NESTJS</Badge>
                        <Badge bg={accentColor} color="black" fontFamily="mono" fontSize="xs" px={3} py={1} borderRadius="0">SAAS</Badge>
                      </HStack>
                    </VStack>
                  </CardBody>
                </MorphCard>
              </GridItem>

              <GridItem>
                <MorphCard
                  // variants={itemVariants}
                  // whileHover={cardHoverVariants}
                  bg={cardBg}
                  borderRadius="0"
                  border="2px solid"
                  borderColor={secondaryAccent}
                  h="full"
                  overflow="hidden"
                >
                  <CardBody p={10}>
                    <VStack align="start" spacing={6} h="full">
                      <HStack spacing={4}>
                        <Box
                          p={4}
                          bg={secondaryAccent}
                          borderRadius="0"
                          border="2px solid"
                          borderColor={secondaryAccent}
                        >
                          <Icon as={FaBrain} color="white" boxSize={8} />
                        </Box>
                        <VStack align="start" spacing={1}>
                          <Text color={secondaryAccent} fontSize="sm" fontFamily="mono" fontWeight="bold">MODULE_02</Text>
                          <Heading size="xl" color={textColor} fontFamily="mono" textTransform="uppercase">
                            AI/ML INNOVATION
                          </Heading>
                        </VStack>
                      </HStack>

                      <Text color={textColor} fontSize="lg" lineHeight="tall">
                        PIONEERING ARTIFICIAL INTELLIGENCE SOLUTIONS FOR CULTURAL AND
                        LINGUISTIC INTEGRATION. DEVELOPING PIDGIN AND EJAGHAM-AWARE MODELS
                        THAT BRIDGE LANGUAGE BARRIERS AND PRESERVE CULTURAL HERITAGE.
                      </Text>

                      <Box flex={1} w="full">
                        <Text fontWeight="bold" color={secondaryAccent} mb={4} fontFamily="mono">
                          BREAKTHROUGH INNOVATIONS:
                        </Text>
                        <VStack align="start" spacing={3} pl={6}>
                          <Box>
                            <Text color={textColor} fontWeight="bold">LOKKITO GPT</Text>
                            <Text color={textColor} fontSize="sm">Revolutionary AI chatbot with Pidgin/English voice synthesis and cultural context</Text>
                          </Box>
                          <Box>
                            <Text color={textColor} fontWeight="bold">NAUGHTML</Text>
                            <Text color={textColor} fontSize="sm">Automated data preparation engine for machine learning workflows</Text>
                          </Box>
                          <Box>
                            <Text color={textColor} fontWeight="bold">CULTURAL AI MODELS</Text>
                            <Text color={textColor} fontSize="sm">Custom linguistic models preserving African language structures</Text>
                          </Box>
                        </VStack>
                      </Box>

                      <HStack spacing={3} flexWrap="wrap">
                        <Badge bg={secondaryAccent} color="white" fontFamily="mono" fontSize="xs" px={3} py={1} borderRadius="0">AI/ML</Badge>
                        <Badge bg={secondaryAccent} color="white" fontFamily="mono" fontSize="xs" px={3} py={1} borderRadius="0">NLP</Badge>
                        <Badge bg={secondaryAccent} color="white" fontFamily="mono" fontSize="xs" px={3} py={1} borderRadius="0">VOICE AI</Badge>
                        <Badge bg={secondaryAccent} color="white" fontFamily="mono" fontSize="xs" px={3} py={1} borderRadius="0">CULTURAL TECH</Badge>
                      </HStack>
                    </VStack>
                  </CardBody>
                </MorphCard>
              </GridItem>
              <GridItem>
                <MorphCard
                  bg={cardBg}
                  borderRadius="0"
                  border="2px solid"
                  borderColor={secondaryAccent}
                  h="full"
                  overflow="hidden"
                >
                  <CardBody p={10}>
                    <VStack align="start" spacing={6} h="full">
                      <HStack spacing={4}>
                        <Box
                          p={4}
                          bg={tertiaryAccent}
                          borderRadius="0"
                          border="2px solid"
                          borderColor={tertiaryAccent}
                        >
                          <Icon as={FaCog} color="black" boxSize={8} />
                        </Box>
                        <VStack align="start" spacing={1}>
                          <Text
                            color={tertiaryAccent}
                            fontSize="sm"
                            fontFamily="mono"
                            fontWeight="bold"
                          >
                            MODULE_03
                          </Text>
                          <Heading
                            size="xl"
                            color={textColor}
                            fontFamily="mono"
                            textTransform="uppercase"
                          >
                            LINUX KERNEL DEV
                          </Heading>
                        </VStack>
                      </HStack>

                      <Text color={textColor} fontSize="lg" lineHeight="tall">
                        BUILDING CUSTOM LINUX KERNEL MODULES FOR HIGHLY SPECIALIZED OPERATING SYSTEMS
                        WITH DEEP AI/ML INTEGRATION. TUNING SYSTEM PERFORMANCE AND INTERFACING WITH
                        NEURAL COMPUTATION ENGINES.
                      </Text>

                      <Box flex={1} w="full">
                        <Text fontWeight="bold" color={tertiaryAccent} mb={4} fontFamily="mono">
                          ADVANCED PROJECTS:
                        </Text>
                        <VStack align="start" spacing={3} pl={6}>
                          <Box>
                            <Text color={textColor} fontWeight="bold">COMPATOS</Text>
                            <Text color={textColor} fontSize="sm">
                              Custom Linux-based AI-enhanced OS kernel designed for neural interaction, offline inference, and microservice orchestration.
                            </Text>
                          </Box>
                        </VStack>
                      </Box>

                      <HStack spacing={3} flexWrap="wrap">
                        <Badge bg={tertiaryAccent} color="black" fontFamily="mono" fontSize="xs" px={3} py={1} borderRadius="0">LINUX</Badge>
                        <Badge bg={tertiaryAccent} color="black" fontFamily="mono" fontSize="xs" px={3} py={1} borderRadius="0">KERNEL</Badge>
                        <Badge bg={tertiaryAccent} color="black" fontFamily="mono" fontSize="xs" px={3} py={1} borderRadius="0">C</Badge>
                        <Badge bg={tertiaryAccent} color="black" fontFamily="mono" fontSize="xs" px={3} py={1} borderRadius="0">AI/OS</Badge>
                      </HStack>
                    </VStack>
                  </CardBody>
                </MorphCard>
              </GridItem>

            </Grid>
          </MotionBox>

          {/* Leadership Section */}
          <MotionBox variants={itemVariants} mb={20}>
            <VStack spacing={8} align="start" mb={12}>
              <Text
                color={tertiaryAccent}
                fontSize="lg"
                fontFamily="mono"
                fontWeight="bold"
                letterSpacing="wider"
              >
                [EXECUTIVE LEADERSHIP]
              </Text>
            </VStack>

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
                          <VStack align="start" spacing={1}>
                            <Text color={textColor} fontSize="2xl" fontWeight="bold" fontFamily="mono">50+</Text>
                            <Text color={textColor} fontSize="sm">Projects Delivered</Text>
                          </VStack>
                          <VStack align="start" spacing={1}>
                            <Text color={textColor} fontSize="2xl" fontWeight="bold" fontFamily="mono">10+</Text>
                            <Text color={textColor} fontSize="sm">Team Members Led</Text>
                          </VStack>
                          <VStack align="start" spacing={1}>
                            <Text color={textColor} fontSize="2xl" fontWeight="bold" fontFamily="mono">5+</Text>
                            <Text color={textColor} fontSize="sm">Years Experience</Text>
                          </VStack>
                          <VStack align="start" spacing={1}>
                            <Text color={textColor} fontSize="2xl" fontWeight="bold" fontFamily="mono">100%</Text>
                            <Text color={textColor} fontSize="sm">Client Satisfaction</Text>
                          </VStack>
                        </Grid>
                      </VStack>
                    </VStack>
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          </MotionBox>

          {/* References Section */}
          <MotionBox variants={itemVariants} mb={20}>
            <VStack spacing={8} align="start" mb={12}>
              <Text
                color={accentColor}
                fontSize="lg"
                fontFamily="mono"
                fontWeight="bold"
                letterSpacing="wider"
              >
                [PROFESSIONAL REFERENCES]
              </Text>
            </VStack>

            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
              {[
                {
                  name: "Mme. Fonkem Benita",
                  role: "Lecturer, HIMS Buea",
                  relation: "Academic Supervisor",
                  contact: "+237 672 880 062",
                },
                {
                  name: "Mr. Nkeng Arrey A.",
                  role: "Co-founder, NNACT",
                  relation: "Business Partner",
                  contact: "+237 651 385 746",
                },
                {
                  name: "Mme Rohda Assem",
                  role: "Managing Director, ORA Consulting",
                  relation: "Former Boss",
                  contact: "rohdaassem1@gmail.com",
                },
                {
                  name: "Mr. Nsah Esli",
                  role: "Managing Director, Tekstedia|Liah Technology",
                  relation: "Former Boss",
                  contact: "+237 678 425 491",
                },
                {
                  name: "Mr. Sakwe BetranCliff",
                  role: "Mobile App Engineer & Trainer, Liah Technology",
                  relation: "Former Teammate",
                  contact: "+237 672 973 390",
                },
                {
                  name: "Mr. Nkwetacha Terence",
                  role: "Full Stack Engineer & Trainer, Liah Technology",
                  relation: "Former Teammate",
                  contact: "+237 695 442 479",
                },
              ].map((ref, idx) => (
                <MorphCard
                  key={idx}
                  // variants={itemVariants}
                  // whileHover={cardHoverVariants}
                  bg={cardBg}
                  borderRadius="0"
                  border="2px solid"
                  borderColor={accentColor}
                >
                  <CardBody p={6}>
                    <VStack spacing={3} align="start">
                      <Heading size="md" color={textColor} fontFamily="mono">{ref.name}</Heading>
                      <Text color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold">{ref.role}</Text>
                      <Text color={textColor} fontSize="sm"><strong>Relation:</strong> {ref.relation}</Text>
                      <Text color={textColor} fontSize="sm"><strong>Contact:</strong> {ref.contact}</Text>
                    </VStack>
                  </CardBody>
                </MorphCard>
              ))}
            </Grid>
          </MotionBox>

          {/* Call to Action */}
          <MotionBox variants={itemVariants}>
            <VStack spacing={8} align="start" mb={12}>
              <Text
                color={accentColor}
                fontSize="lg"
                fontFamily="mono"
                fontWeight="bold"
                letterSpacing="wider"
              >
                [COLLABORATION PROTOCOL]
              </Text>
            </VStack>

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
                        <Text color={textColor}>• ENTERPRISE SOFTWARE ARCHITECTURE</Text>
                        <Text color={textColor}>• AI/ML SYSTEM DEVELOPMENT</Text>
                        <Text color={textColor}>• TECHNICAL LEADERSHIP & CONSULTING</Text>
                        <Text color={textColor}>• PRODUCT STRATEGY & INNOVATION</Text>
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
                        color="black"
                        variant="solid"
                        size="lg"
                        borderRadius="0"
                        fontFamily="mono"
                        fontWeight="bold"
                        px={8}
                        py={6}
                        as={Link}
                        href="https://github.com/ojage"
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
                        leftIcon={<Icon as={FaLinkedinIn} />}
                        bg={accentColor}
                        color="black"
                        variant="solid"
                        size="lg"
                        borderRadius="0"
                        fontFamily="mono"
                        fontWeight="bold"
                        px={8}
                        py={6}
                        as={Link}
                        href="https://linkedin.com/in/ojage-sala/"
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
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Home;