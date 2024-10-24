import { Box, Heading, Text, VStack, Divider, useColorModeValue } from "@chakra-ui/react";
import Nav from "../Navbar";

const About = () => {
  const textColor = useColorModeValue("#4a3c31", "#f4e9d8");
  const accentColor = useColorModeValue("#e07a5f", "#ffb84d"); // A muted vintage orange for accents

  return (
    <Box  color={textColor} minHeight="100vh" py={16} px={8}>
      <Nav />
      <VStack mt="4rem" spacing={12} align="center" maxWidth="800px" mx="auto">

        {/* Intro Section */}
        <Box textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            mb={6}
            fontFamily="'Neutra Text Alt', sans-serif"
            fontWeight="400"
            color={accentColor}
          >
            Hello, I'm Ojage Salathiel Ayuk
          </Heading>
          <Text fontSize="lg" lineHeight="1.8" fontFamily="'Neutra Text Alt', sans-serif">
            I'm a Full Stack Web Developer and UI Designer passionate about creating clean, functional,
            and aesthetically pleasing web experiences. With a deep love for coding and design, I focus
            on delivering high-quality, intuitive, and user-friendly solutions.
          </Text>
        </Box>

        <Divider borderColor={accentColor} />

        {/* Skills Section */}
        <Box textAlign="center">
          <Heading
            as="h2"
            size="xl"
            mb={4}
            fontFamily="'Neutra Text Alt', sans-serif"
            color={accentColor}
          >
            Skills & Expertise
          </Heading>
          <Text fontSize="lg" fontFamily="'Neutra Text Alt', sans-serif">
            <strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS <br />
            <strong>Frameworks:</strong> React, NestJS, Node.js, Express <br />
            <strong>Tools & Libraries:</strong> MongoDB, Chakra UI, Git, Webpack <br />
            <strong>Design:</strong> Figma, UI/UX Design
          </Text>
        </Box>

        <Divider borderColor={accentColor} />

        {/* Experience Section */}
        <Box textAlign="center">
          <Heading
            as="h2"
            size="xl"
            mb={4}
            fontFamily="'Neutra Text Alt', sans-serif"
            color={accentColor}
          >
            Experience
          </Heading>
          <Text fontSize="lg" fontFamily="'Neutra Text Alt', sans-serif">
            With over 5 years of experience in the web development industry, I've worked on a diverse range of projects, from
            small startups to large enterprises. My work includes building responsive web applications, developing interactive
            UI components, and ensuring performance optimization.
          </Text>
        </Box>


      </VStack>
    </Box>
  );
};

export default About;
