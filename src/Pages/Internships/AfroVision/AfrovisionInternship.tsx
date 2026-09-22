import { Box, Text, VStack, Heading, Divider, List, ListItem, HStack, Badge, Link, Flex, Avatar, Grid, GridItem } from "@chakra-ui/react";
import { useStylesConstants } from "../../../hooks/useStylesConstants";
import { ChevronLeftIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import ChatBox from "./Chatbox";

const AVGInternship = () => {
  const { bgColor, cardBg, textColor, accentColor, secondaryAccent, tertiaryAccent, isDark } = useStylesConstants();
  const muted = isDark ? '#a0aec0' : '#4a5568';

  // Sample contacts
  const contacts = [
    { name: "Kelsey", role: "Mobile Developer", avatar: "" },
    { name: "Kay", role: "Frontend Intern", avatar: "" },
    { name: "Mr. Glenn", role: "Lead Developer", avatar: "" },
    { name: "Mr. Churchill", role: "Project Manager", avatar: "" },
  ];

  return (
    <Flex mt={55} bg={bgColor} minH="100vh" color={textColor} p={{ base: 4, md: 8 }} gap={6} wrap="wrap">

      {/* Left Aside - Contacts */}
      <Box flex="0 0 250px" bg={cardBg} p={4} borderRadius="0" border="2px solid" borderColor={tertiaryAccent} h="fit-content">
        <Heading as="h3" size="md" mb={4} color={accentColor} fontFamily="mono">Team &amp; Contacts</Heading>
        <VStack align="stretch" spacing={4}>
          {contacts.map((c, i) => (
            <HStack key={i} spacing={3} p={3} borderRadius="0" bg={isDark ? 'blackAlpha.300' : 'blackAlpha.100'}>
              <Avatar size="sm" name={c.name} src={c.avatar} bg={tertiaryAccent} color="black" />
              <Box>
                <Text fontWeight="bold" color={textColor}>{c.name}</Text>
                <Text fontSize="sm" color={muted}>{c.role}</Text>
              </Box>
            </HStack>
          ))}
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex="1" minW={0} maxW="full" bg={cardBg} p={{ base: 5, md: 8 }} borderRadius="0" border="2px solid" borderColor={secondaryAccent}>
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
                <FaBriefcase color="black" size="28px" aria-label="Laravel Full Stack Developer Intern" />
              </Box>
              <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color={textColor} fontFamily="mono" textTransform="uppercase" letterSpacing="wide">
                Laravel Full Stack Developer Intern
              </Heading>
            </HStack>
            <Heading as="h2" size={{ base: 'lg', md: 'xl' }} mb={4} color={secondaryAccent} fontFamily="mono">
              AfroVision Group Ltd
            </Heading>

            <HStack spacing={4} wrap="wrap" mb={6}>
              <Badge bg={secondaryAccent} color="black" px={3} py={1} fontSize="md" borderRadius="0">
                Jul 2025 - Oct 2025
              </Badge>
              <HStack spacing={2} color={accentColor}>
                <CheckCircleIcon />
                <Text fontSize="sm" fontFamily="mono" fontWeight="bold" textTransform="uppercase">Completed</Text>
              </HStack>
              <HStack spacing={2} color={muted}>
                <FaCalendarAlt />
                <Text fontSize="sm" fontFamily="mono">3 months</Text>
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
                    Contributed to the development and enhancement of the Buyam platform, focusing on loyalty programs
                    and targeted advertising features. Worked across the full stack using Laravel, Vue, and React to
                    deliver robust, scalable, and user-friendly solutions.
                  </Text>
                </Box>

                <Box>
                  <Heading as="h3" size="lg" mb={3} color={accentColor} fontFamily="mono">Key Responsibilities</Heading>
                  <List spacing={3}>
                    <ListItem>• Develop and maintain backend APIs in Laravel for loyalty program features and ad management</ListItem>
                    <ListItem>• Build and enhance interactive front-end components using React and Vue</ListItem>
                    <ListItem>• Collaborate with designers and stakeholders to ensure high-quality user experiences</ListItem>
                    <ListItem>• Implement database optimizations and caching strategies to improve performance</ListItem>
                  </List>
                </Box>
              </VStack>
            </GridItem>

            <GridItem>
              <Box border="2px solid" borderColor={secondaryAccent} p={5} borderRadius="0" mb={6}>
                <Heading as="h3" size="md" mb={4} color={accentColor} fontFamily="mono">Technologies Used</Heading>
                <Flex wrap="wrap" gap={3}>
                  {["Laravel", "React", "Vue.js", "MySQL", "Tailwind CSS", "REST APIs"].map((tech) => (
                    <Badge key={tech} bg="transparent" color={secondaryAccent} border="2px solid" borderColor={secondaryAccent} px={4} py={2} fontSize="sm" fontWeight="bold" textTransform="uppercase" fontFamily="mono" letterSpacing="wider" borderRadius="0">
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </Box>

              <Box border="2px solid" borderColor={tertiaryAccent} p={5} borderRadius="0">
                <Heading as="h3" size="md" mb={3} color={accentColor} fontFamily="mono">Key Achievements</Heading>
                <Text fontSize="md" mb={2}>• Delivered a loyalty program module that increased returning customer engagement by 30%</Text>
                <Text fontSize="md" mb={2}>• Integrated targeted ad placement system, boosting click-through rates by 20%</Text>
                <Text fontSize="md">• Introduced automated testing workflows, reducing bug reports by 15%</Text>
              </Box>
            </GridItem>
          </Grid>
        </VStack>
      </Box>

      {/* Right Aside - Chat Box */}
      <ChatBox
        cardBg={cardBg}
        accentColor={accentColor}
        textColor={textColor}
        muted={muted}
        isDark={isDark}
      />

    </Flex>
  );
};

export default AVGInternship;