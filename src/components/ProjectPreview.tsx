import { useColorModeValue, ScaleFade, HStack, Badge, Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import { MotionBox } from "./common/MotionElts";
import { ProjectPreviewProps } from "../interfaces";
import { float } from "./common/Keyframes";

const ProjectPreview: React.FC<ProjectPreviewProps> = React.memo(({ project }) => {
    const bgGradient = useColorModeValue(
        'linear(to-br, gray.50, gray.100)',
        'linear(to-br, gray.800, gray.900)'
    );

    if (!project) return null;
    console.log(project)
    return (
        <ScaleFade in={!!project} initialScale={0.8}>
            <MotionBox
                position="relative"
                borderRadius="xl"
                overflow="hidden"
                bg={bgGradient}
                boxShadow="xl"
                transition="all 0.4s ease"
                _hover={{
                    transform: "scale(1.02)",
                    boxShadow: "2xl",
                }}
                style={{
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)"
                }}
            >
                {/* Image with loading state */}
                <Box position="relative" overflow="hidden">
                    <Image
                        src={project.img}
                        alt={project.title}
                        objectFit="cover"
                        w="100%"
                        h="200px"
                        loading="lazy"
                        transition="transform 0.3s ease"
                        _hover={{ transform: "scale(1.05)" }}
                        fallback={
                            <Box
                                w="100%"
                                h="200px"
                                bg="gray.200"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Text color="gray.500">Loading...</Text>
                            </Box>
                        }
                    />

                    {/* Gradient overlay */}
                    <Box
                        position="absolute"
                        bottom="0"
                        left="0"
                        right="0"
                        height="50%"
                        bgGradient="linear(to-t, blackAlpha.800, transparent)"
                    />
                </Box>

                {/* Project info overlay */}
                <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    p={4}
                    color="white"
                >
                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        mb={1}
                        textShadow="0 2px 4px rgba(0,0,0,0.8)"
                    >
                        {project.title}
                    </Text>

                    {project.description && (
                        <Text
                            fontSize="sm"
                            opacity={0.9}
                            noOfLines={2}
                            textShadow="0 1px 2px rgba(0,0,0,0.8)"
                        >
                            {project.description}
                        </Text>
                    )}

                    {project.technologies && (
                        <HStack mt={2} spacing={1} flexWrap="wrap">
                            {project.technologies.slice(0, 3).map((tech) => (
                                <Badge
                                    key={tech}
                                    size="sm"
                                    colorScheme="blue"
                                    variant="solid"
                                    fontSize="10px"
                                    px={2}
                                    py={1}
                                    borderRadius="full"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </HStack>
                    )}
                </Box>

                {/* Floating animation */}
                <Box
                    position="absolute"
                    top="-10px"
                    right="-10px"
                    w="20px"
                    h="20px"
                    bg="blue.400"
                    borderRadius="full"
                    opacity={0.6}
                    animation={`${float} 3s ease-in-out infinite`}
                />
            </MotionBox>
        </ScaleFade>
    );
});

export default ProjectPreview;