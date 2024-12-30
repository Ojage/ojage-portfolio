import React, { useRef } from 'react';
import { Box, Heading, Text, Stack, Grid, Flex, HStack, Badge, Divider, Button } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import Nav from "../Navbar";
import { useReactToPrint } from "react-to-print";
import { contactInfo, summary, experience, education, strengths, achievements, skills } from '../../constants/resumeConstants'; // Adjust the import path
import { Achievement, Experience, Skill, Strength } from '../../types';

// Extend the UseReactToPrintOptions interface to include 'content'
interface UseReactToPrintOptionsExtended extends Omit<Parameters<typeof useReactToPrint>[0], 'content'> {
  content: () => HTMLDivElement | null;
}

const About: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  // Handle print functionality with react-to-print
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: `${contactInfo.name}_Resume`,
    onBeforePrint: () => Promise.resolve(),
    onAfterPrint: () => console.log('Resume printed!'),
  } as UseReactToPrintOptionsExtended); // Cast the options to the extended interface

  return (
    <Box>
      <Nav />
      <Box mt="3rem" bg="gray.50" py={10} px={{ base: 4, md: 16 }} color="gray.800" fontFamily="'Neutra Text Light', sans-serif">
        
        {/* Button to download resume as PDF */}
        <Flex justifyContent="flex-end" mb={6}>
          <Button colorScheme="blue" onClick={() => handlePrint()}>
            Download PDF
          </Button>
        </Flex>

        {/* Resume content to be printed */}
        <div ref={resumeRef}>
          {/* Header Section */}
          <Box bg="white" p={6} boxShadow="md" borderRadius="md" mb={8} border="1px solid #e1e4e8">
            <Heading as="h1" fontSize="2xl" color="blue.600" mb={2}>
              {contactInfo.name}
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={2}>{contactInfo.title}</Text>
            <Flex gap={6}>
              <Flex align="center">
                <FaEnvelope size={18} />
                <Text ml={2}>{contactInfo.email}</Text>
              </Flex>
              <Flex align="center">
                <FaPhone size={18} />
                <Text ml={2}>{contactInfo.phone}</Text>
              </Flex>
              <Flex align="center">
                <FaLinkedin size={18} />
                <Text ml={2}>{contactInfo.linkedin}</Text>
              </Flex>
            </Flex>
          </Box>

          {/* Main Content in Grid Panels */}
          <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={8}>
            
            {/* Left Column (Summary, Strengths) */}
            <Box bg="white" p={6} boxShadow="md" borderRadius="md" border="1px solid #e1e4e8">
              <Heading as="h2" fontSize="lg" mb={4} color="blue.600">Summary</Heading>
              <Text>{summary}</Text>

              <Divider my={6} />

              <Heading as="h2" fontSize="lg" mb={4} color="blue.600">Strengths</Heading>
              <Stack spacing={4}>
                {strengths.map((strength: Strength, index: number) => (
                  <Box key={index}>
                    <Heading as="h3" fontSize="md" mb={2}>{strength.title}</Heading>
                    <Text>{strength.description}</Text>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Right Column (Experience, Education, Skills, Key Achievements) */}
            <Stack spacing={6}>
              
              {/* Experience Section */}
              <Box bg="white" p={6} boxShadow="md" borderRadius="md" border="1px solid #e1e4e8">
                <Heading as="h2" fontSize="lg" mb={4} color="blue.600">Experience</Heading>
                <Stack spacing={4}>
                  {experience.map((exp: Experience, index: number) => (
                    <Box key={index}>
                      <Heading as="h3" fontSize="md" mb={2}>{exp.title} - {exp.company} ({exp.period})</Heading>
                      <Text>{exp.responsibilities.join(' ')}</Text>
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Education Section */}
              <Box bg="white" p={6} boxShadow="md" borderRadius="md" border="1px solid #e1e4e8">
                <Heading as="h2" fontSize="lg" mb={4} color="blue.600">Education</Heading>
                <Text fontSize="md" fontWeight="bold">{education.degree} - {education.institution} ({education.period})</Text>
                <Text>{education.location}</Text>
              </Box>

              {/* Key Achievements Section */}
              <Box bg="white" p={6} boxShadow="md" borderRadius="md" border="1px solid #e1e4e8">
                <Heading as="h2" fontSize="lg" mb={4} color="blue.600">Key Achievements</Heading>
                <Stack spacing={4}>
                  {achievements.map((achievement: Achievement, index: number) => (
                    <Box key={index}>
                      <Heading as="h3" fontSize="md" mb={2}>{achievement.title}</Heading>
                      <Text>{achievement.description}</Text>
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Skills Section */}
              <Box bg="white" p={6} boxShadow="md" borderRadius="md" border="1px solid #e1e4e8">
                <Heading as="h2" fontSize="lg" mb={4} color="blue.600">Skills</Heading>
                <HStack wrap="wrap" spacing={4}>
                  {skills.map((skill: Skill, index: number) => (
                    <Badge key={index} colorScheme="blue" px={2} py={1} fontSize="md">{skill.name}</Badge>
                  ))}
                </HStack>
              </Box>
            </Stack>
          </Grid>
        </div>

        {/* Footer */}
        <Flex justify="center" mt={10}>
          <Text fontSize="sm" color="gray.500">© {new Date().getFullYear()} {contactInfo.name}. All rights reserved.</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
