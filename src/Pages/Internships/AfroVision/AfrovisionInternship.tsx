import { Box, Text, VStack, Heading, Divider, List, ListItem, HStack, Badge, Link, Flex, Avatar, Textarea, Button } from "@chakra-ui/react";
import { useStylesConstants } from "../../../constants/styleConstants";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import ChatBox from "./Chatbox";

const AVGInternship = () => {
  const { bgColor, cardBg, textColor, accentColor, secondaryAccent } = useStylesConstants();

  // Sample contacts
  const contacts = [
    { name: "Kelsey", role: "Mobile Developer", avatar: "" },
    { name: "Kay", role: "Frontend Intern", avatar: "" },
    { name: "Mr. Glenn", role: "Lead Developer", avatar: "" },
    { name: "Mr. Churchill", role: "Project Manager", avatar: "" },
  ];

  return (
    <Flex mt={55} bg={bgColor} minH="100vh" color={textColor} p={8} gap={6}>
      
      {/* Left Aside - Contacts */}
      <Box flex="0 0 250px" bg={cardBg} p={4} borderRadius="lg" boxShadow="lg" h="fit-content">
        <Heading as="h3" size="md" mb={4} color={accentColor}>Team & Contacts</Heading>
        <VStack align="stretch" spacing={4}>
          {contacts.map((c, i) => (
            <HStack key={i} spacing={3} p={3} borderRadius="md" bg="blackAlpha.300">
              <Avatar size="sm" name={c.name} src={c.avatar} />
              <Box>
                <Text fontWeight="bold">{c.name}</Text>
                <Text fontSize="sm" color="gray.400">{c.role}</Text>
              </Box>
            </HStack>
          ))}
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex="1" maxW="full" bg={cardBg} p={6} borderRadius="lg" boxShadow="lg">
        {/* Back button */}
        <Flex align="center" mb={8}>
          <Link as={RouterLink} to="/internships" color={accentColor} _hover={{ textDecoration: 'none' }}>
            <HStack spacing={2}>
              <ChevronLeftIcon boxSize={6} />
              <Text fontSize="lg">Back to Internships</Text>
            </HStack>
          </Link>
        </Flex>

        {/* Internship Details */}
        <VStack spacing={6} align="stretch">
          <Box bg={cardBg} p={8} borderRadius="lg" boxShadow="lg">
            <Heading as="h1" size="2xl" mb={4} color={accentColor}>
              Laravel Full Stack Developer Intern
            </Heading>
            <Heading as="h2" size="xl" mb={6} color={secondaryAccent}>
              AfroVision Group Ltd
            </Heading>
            <Badge colorScheme="green" px={3} py={1} mb={6} fontSize="md">
              August 2025 - Present • Ongoing
            </Badge>
            <Divider mb={6} />
            
            <VStack spacing={6} align="start">
              <Box>
                <Heading as="h3" size="lg" mb={3}>About the Role</Heading>
                <Text fontSize="lg" lineHeight="tall">
                  Contributing to the development and enhancement of the Buyam platform, focusing on loyalty programs and targeted advertising features.
                  Working across the full stack using Laravel, Vue, React, and related technologies to deliver robust, scalable, and user-friendly solutions.
                </Text>
              </Box>

              <Box>
                <Heading as="h3" size="lg" mb={3}>Key Responsibilities</Heading>
                <List spacing={3}>
                  <ListItem>• Develop and maintain backend APIs in Laravel for loyalty program features and ad management</ListItem>
                  <ListItem>• Build and enhance interactive front-end components using React and Vue</ListItem>
                  <ListItem>• Collaborate with designers and stakeholders to ensure high-quality user experiences</ListItem>
                  <ListItem>• Implement database optimizations and caching strategies to improve performance</ListItem>
                </List>
              </Box>

              <Box>
                <Heading as="h3" size="lg" mb={3}>Technologies Used</Heading>
                <HStack spacing={3} wrap="wrap">
                  {["Laravel", "React", "Vue.js", "MySQL", "Tailwind CSS", "REST APIs"].map((tech, i) => (
                    <Badge key={i} px={3} py={1} bg="blackAlpha.400" color={accentColor}>{tech}</Badge>
                  ))}
                </HStack>
              </Box>

              <Box>
                <Heading as="h3" size="lg" mb={3}>Key Achievements</Heading>
                <Text fontSize="lg" mb={2}>• Delivered a loyalty program module that increased returning customer engagement by 30%</Text>
                <Text fontSize="lg" mb={2}>• Integrated targeted ad placement system, boosting click-through rates by 20%</Text>
                <Text fontSize="lg">• Introduced automated testing workflows, reducing bug reports by 15%</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>

      {/* Right Aside - Chat Box */}
      <ChatBox
        cardBg={cardBg}
        accentColor={accentColor}
        />

    </Flex>
  );
};

export default AVGInternship;
