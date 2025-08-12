import { Box, Text, Flex, Link, Badge, VStack, Heading } from "@chakra-ui/react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { useStylesConstants } from "../../constants/styleConstants";

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

const MyInternships: React.FC = () => {
    const { bgColor, cardBg, accentCardBg, textColor, accentColor, secondaryAccent } = useStylesConstants();

    const myInternships: Internship[] = [
        {
            id: "1",
            title: "Frontend Developer",
            company: "AfroVision",
            period: "Jun 2023 - Present",
            description: "Developing responsive user interfaces using React and Chakra UI.",
            path: "/internships/afrovision",  // Updated to match nested route
            status: "ongoing",
            skills: ["React", "TypeScript", "Chakra UI"]
        },
        {
            id: "2",
            title: "Software Engineering Intern",
            company: "TechCorp",
            period: "Mar 2022 - May 2023",
            description: "Worked on backend services and API development.",
            path: "/internships/techcorp",  // Updated to match nested route
            status: "completed",
            skills: ["Node.js", "Express", "MongoDB"]
        },
        {
            id: "3",
            title: "UI/UX Design Intern",
            company: "DesignHub",
            period: "Jan 2021 - Feb 2022",
            description: "Created wireframes and prototypes for client projects.",
            path: "/internships/designhub",  // Updated to match nested route
            status: "completed",
            skills: ["Figma", "Adobe XD", "User Research"]
        }
    ];

    return (
        <Box
            p={8}
            mt={10}
            bg={bgColor}
            minH="100vh"
            color={textColor}
        >
            <Heading
                as="h1"
                size="2xl"
                mb={8}
                color={accentColor}
                fontWeight="extrabold"
            >
                My Internships
            </Heading>

            <VStack spacing={6} align="stretch">
                {myInternships.map((internship) => (
                    <Link
                        as={RouterLink}
                        to={internship.path}  // Now uses the full nested path
                        key={internship.id}
                        _hover={{ textDecoration: "none" }}
                    >
                        {/* Rest of the card remains the same */}
                        <Box
                            p={6}
                            bg={cardBg}
                            borderRadius="lg"
                            borderLeft="4px solid"
                            borderColor={internship.status === "ongoing" ? accentColor : secondaryAccent}
                            transition="all 0.2s"
                            _hover={{
                                transform: "translateY(-2px)",
                                boxShadow: "lg",
                                bg: accentCardBg
                            }}
                        >
                            <Flex justify="space-between" align="center" mb={2}>
                                <Text fontSize="xl" fontWeight="bold">
                                    {internship.title} @ {internship.company}
                                </Text>
                                <Badge
                                    colorScheme={internship.status === "ongoing" ? "green" : "purple"}
                                    px={2}
                                    py={1}
                                >
                                    {internship.status}
                                </Badge>
                            </Flex>

                            <Text color="gray.300" mb={3}>
                                {internship.period}
                            </Text>

                            <Text mb={4}>
                                {internship.description}
                            </Text>

                            <Flex wrap="wrap" gap={2}>
                                {internship.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        px={2}
                                        py={1}
                                        bg="blackAlpha.400"
                                        color={accentColor}
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </Flex>
                        </Box>
                    </Link>
                ))}
            </VStack>
            <Outlet />
        </Box>
    );
};

export default MyInternships;