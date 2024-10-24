import { Box, Heading, Text, Stack, Grid, Flex, Divider, HStack, Badge } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import Nav from "../Navbar";

const About = () => {
  return (
    <Box>
      <Nav />
      <Box mt="3rem" bg="gray.50" py={10} px={{ base: 4, md: 16 }} color="gray.800" fontFamily="'Neutra Text Light',
    sans-serif">
        {/* Header Section */}
        <Box bg="white" p={6} boxShadow="md" borderRadius="md" mb={8} border="1px solid #e1e4e8">
          <Heading as="h1" fontSize="2xl" color="blue.600" mb={2}>
            Salathiel Ojage
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={2}>React Full Stack Developer</Text>
          <Flex gap={6}>
            <Flex align="center">
              <FaEnvelope size={18} />
              <Text ml={2}>salathiel@ojage.com</Text>
            </Flex>
            <Flex align="center">
              <FaPhone size={18} />
              <Text ml={2}>+237 681 402 886</Text>
            </Flex>
            <Flex align="center">
              <FaLinkedin size={18} />
              <Text ml={2}>linkedin.com/in/ojage-ayuk</Text>
            </Flex>
          </Flex>
        </Box>

        {/* Main Content in Grid Panels */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={8}>
          {/* Left Column (Summary and Contact Info) */}
          <Box bg="white" p={6} boxShadow="md" borderRadius="md" border="1px solid #e1e4e8">
            <Heading as="h2" fontSize="lg" mb={4} color="blue.600">Summary</Heading>
            <Text>
              A skilled and motivated Full Stack Developer with experience in React, React Native, TypeScript, and MongoDB.
              Committed to delivering high-quality results and working collaboratively in a friendly and dynamic environment.
            </Text>
          </Box>

          {/* Right Column (Experience, Education, Skills) */}
          <Stack spacing={6}>
            {/* Experience Section */}
            <Box bg="white" p={6} boxShadow="md" borderRadius="md" border="1px solid #e1e4e8">
              <Heading as="h2" fontSize="lg" mb={4} color="blue.600">Experience</Heading>
              <Stack spacing={4}>
                <Box>
                  <Heading as="h3" fontSize="md" mb={2}>Full Stack Developer & Trainer - Liah Technologies (2022 - Present)</Heading>
                  <Text>
                    Developed browser-based applications using React and TypeScript, increasing user engagement by 20%.
                    Optimized REST API calls to improve page speed by 15%.
                  </Text>
                </Box>
                <Box>
                  <Heading as="h3" fontSize="md" mb={2}>Junior Cloud Solutions Architect - Remote Cloud Solutions Provider (2023)</Heading>
                  <Text>
                    Provisioned AWS resources and developed backend automation using Python and YAML, reducing system downtime by 40%.
                  </Text>
                </Box>
                <Box>
                  <Heading as="h3" fontSize="md" mb={2}>Junior React Front End Developer - Mungwin Ltd (2021 - 2022)</Heading>
                  <Text>
                    Developed web applications using React, increasing user engagement by 20%, and implemented responsive designs,
                    leading to a 15% increase in mobile traffic.
                  </Text>
                </Box>
              </Stack>
            </Box>

            {/* Education Section */}
            <Box bg="white" p={6} boxShadow="md" borderRadius="md" border="1px solid #e1e4e8">
              <Heading as="h2" fontSize="lg" mb={4} color="blue.600">Education</Heading>
              <Text fontSize="md" fontWeight="bold">Higher National Diploma in Software Engineering - Higher Institute of Management Science (2023 - 2024)</Text>
              <Text>Buea, Cameroon</Text>
            </Box>

            {/* Skills Section */}
            <Box bg="white" p={6} boxShadow="md" borderRadius="md" border="1px solid #e1e4e8">
              <Heading as="h2" fontSize="lg" mb={4} color="blue.600">Skills</Heading>
              <HStack>
                <Badge>
                  <Text fontWeight="bold">React</Text>
                </Badge>
                <Box>
                  <Text fontWeight="bold">TypeScript</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">MongoDB</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">REST API</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">Python</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">AWS</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">NestJS</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">NPM</Text>
                </Box>
              </HStack>
            </Box>
          </Stack>
        </Grid>

        {/* Footer */}
        <Flex justify="center" mt={10}>
          <Text fontSize="sm" color="gray.500">© {new Date().getFullYear()} Salathiel Ojage. All rights reserved.</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
