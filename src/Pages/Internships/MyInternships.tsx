import React from 'react';
import { 
  Box, 
  Text, 
  Flex, 
  Link, 
  Badge, 
  VStack, 
  Heading, 
  HStack,
  Icon,
  Stack,
  Container
} from "@chakra-ui/react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { FaBriefcase, FaCalendarAlt, FaArrowRight, FaClock, FaCheckCircle } from "react-icons/fa";
import { useStylesConstants } from "../../hooks/useStylesConstants";
import { ThemeToggle } from '../../components/common/ThemeToggle';

interface Internship {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
    path: string; 
    status: "completed" | "ongoing";
    skills: string[];
}

interface InternshipCardProps {
    internship: Internship;
    index: number;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship, index }) => {
    const { cardBg, textColor, accentColor, secondaryAccent } = useStylesConstants();
    
    const isOngoing = internship.status === "ongoing";
    const currentAccent = isOngoing ? accentColor : secondaryAccent;
    const statusIcon = isOngoing ? FaClock : FaCheckCircle;

    return (
        <Link
            as={RouterLink}
            to={internship.path}
            _hover={{ textDecoration: "none" }}
            display="block"
        >
            <Box
                bg={cardBg}
                borderRadius="0"
                p={{ base: 6, md: 8 }}
                border="2px solid"
                borderColor={currentAccent}
                position="relative"
                transition="all 0.2s ease"
                _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: `0 0 0 2px ${currentAccent}`,
                }}
                cursor="pointer"
            >
                <VStack align="start" spacing={4}>
                    {/* Header Section */}
                    <Stack 
                        direction={{ base: 'column', sm: 'row' }} 
                        spacing={4} 
                        align={{ base: 'start', sm: 'center' }}
                        w="full"
                    >
                        <Box
                            p={3}
                            bg={currentAccent}
                            borderRadius="0"
                            border="2px solid"
                            borderColor={currentAccent}
                            flexShrink={0}
                        >
                            <Icon
                                as={FaBriefcase}
                                color="black"
                                boxSize={6}
                            />
                        </Box>

                        <VStack align="start" spacing={1} flex={1} minW={0}>
                            <Text
                                color={currentAccent}
                                fontSize="sm"
                                fontFamily="mono"
                                fontWeight="bold"
                                textTransform="uppercase"
                                letterSpacing="wider"
                            >
                                {String(index + 1).padStart(2, '0')}_INTERNSHIP
                            </Text>
                            <Heading
                                as="h3"
                                size="lg"
                                color={textColor}
                                fontFamily="mono"
                                textTransform="uppercase"
                                letterSpacing="wide"
                                fontSize={{ base: 'lg', md: 'xl' }}
                                lineHeight={1.2}
                            >
                                {internship.title}
                            </Heading>
                            <Text
                                color={currentAccent}
                                fontSize={{ base: 'md', md: 'lg' }}
                                fontFamily="mono"
                                fontWeight="600"
                            >
                                @ {internship.company}
                            </Text>
                        </VStack>

                        {/* Status Badge */}
                        <HStack 
                            spacing={2} 
                            bg="transparent"
                            border="2px solid"
                            borderColor={currentAccent}
                            px={3}
                            py={2}
                            borderRadius="0"
                        >
                            <Icon as={statusIcon} color={currentAccent} boxSize={4} />
                            <Text
                                color={textColor}
                                fontSize="sm"
                                fontFamily="mono"
                                fontWeight="bold"
                                textTransform="uppercase"
                            >
                                {internship.status}
                            </Text>
                        </HStack>
                    </Stack>

                    {/* Period */}
                    <HStack spacing={3}>
                        <Icon as={FaCalendarAlt} color={currentAccent} size="16px" />
                        <Text 
                            color={textColor} 
                            fontSize="sm" 
                            fontFamily="mono"
                            fontWeight="bold"
                        >
                            {internship.period}
                        </Text>
                    </HStack>

                    {/* Description */}
                    <Text
                        color={textColor}
                        fontSize="md"
                        lineHeight="tall"
                        pl={6}
                    >
                        {internship.description}
                    </Text>

                    {/* Skills Section */}
                    <Box w="full">
                        <Text
                            color={currentAccent}
                            fontSize="sm"
                            fontFamily="mono"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wider"
                            mb={3}
                        >
                            Technologies Used:
                        </Text>
                        <Flex wrap="wrap" gap={3}>
                            {internship.skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    bg={currentAccent}
                                    color="black"
                                    border="2px solid"
                                    borderColor={currentAccent}
                                    borderRadius="0"
                                    px={4}
                                    py={2}
                                    fontSize="sm"
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    fontFamily="mono"
                                    letterSpacing="wider"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </Flex>
                    </Box>

                    {/* View Details Arrow */}
                    <HStack 
                        spacing={2} 
                        color={currentAccent}
                        alignSelf="flex-end"
                        mt={2}
                    >
                        <Text
                            fontSize="sm"
                            fontFamily="mono"
                            fontWeight="bold"
                            textTransform="uppercase"
                        >
                            View Details
                        </Text>
                        <Icon as={FaArrowRight} boxSize={4} />
                    </HStack>

                    {/* Bottom accent line */}
                    <Box
                        w="full"
                        h="2px"
                        bg={currentAccent}
                        mt={2}
                    />
                </VStack>
            </Box>
        </Link>
    );
};

const MyInternships: React.FC = () => {
    const { bgColor, textColor, accentColor } = useStylesConstants();

    const myInternships: Internship[] = [
        {
            id: "1",
            title: "Frontend Developer Intern",
            company: "AfroVision",
            period: "Jul 2025 - Oct 2025",
            description: "Worked across the full stack on the Buyam platform — loyalty programs, targeted advertising, and feature development using Laravel, Vue, and React.",
            path: "/internships/afrovision",
            status: "completed",
            skills: ["Laravel", "Vue.js", "React", "MySQL", "Tailwind CSS", "REST APIs"]
        },
        {
            id: "2",
            title: "Full-Stack Engineering Intern",
            company: "CSKY Telecom",
            period: "Oct 2025 - Nov 2025",
            description: "Contributed to production web applications and backend services built with NestJS, TypeScript, and React, deployed on GCP Cloud Run. Two-month internship before joining CSKY full-time.",
            path: "/internships/csky",
            status: "completed",
            skills: ["NestJS", "TypeScript", "React", "GCP Cloud Run", "GitHub Actions"]
        }
    ];

    return (
        <Box minH="100vh" bg={bgColor}>
            {/* Theme Toggle Button */}
            <Box position="fixed" top={100} right={4} zIndex={1000}>
                <ThemeToggle />
            </Box>

            <Container maxW="6xl" mt="2.5rem" py={8} px={4}>
                {/* Page Header */}
                <Box
                    bg={bgColor}
                    borderRadius="0"
                    p={{ base: 6, md: 8 }}
                    border="2px solid"
                    borderColor={accentColor}
                    mb={8}
                >
                    <Stack 
                        direction={{ base: 'column', sm: 'row' }} 
                        spacing={4} 
                        align={{ base: 'start', sm: 'center' }}
                    >
                        <Box
                            p={4}
                            bg={accentColor}
                            borderRadius="0"
                            border="2px solid"
                            borderColor={accentColor}
                        >
                            <Icon
                                as={FaBriefcase}
                                color="black"
                                boxSize={8}
                            />
                        </Box>
                        
                        <VStack align="start" spacing={1}>
                            <Text
                                color={accentColor}
                                fontSize="md"
                                fontFamily="mono"
                                fontWeight="bold"
                                textTransform="uppercase"
                                letterSpacing="wider"
                            >
                                00_INTERNSHIPS
                            </Text>
                            <Heading
                                as="h1"
                                size="2xl"
                                color={textColor}
                                fontFamily="mono"
                                textTransform="uppercase"
                                letterSpacing="wide"
                            >
                                My Internships
                            </Heading>
                        </VStack>
                    </Stack>
                </Box>

                {/* Internships List */}
                <VStack spacing={6} align="stretch">
                    {myInternships.map((internship, index) => (
                        <InternshipCard
                            key={internship.id}
                            internship={internship}
                            index={index}
                        />
                    ))}
                </VStack>

                <Outlet />
            </Container>
        </Box>
    );
};

export default MyInternships;