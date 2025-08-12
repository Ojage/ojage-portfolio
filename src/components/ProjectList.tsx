import { useColorModeValue, VStack, HStack, Badge, Text, Box } from "@chakra-ui/react";
import React from "react";
import { ProjectListProps } from "../interfaces";
import { MotionText } from "./common/MotionElts";

const ProjectList: React.FC<ProjectListProps> = React.memo(({
    projects,
    onProjectHover,
    onProjectClick,
    hoveredProject
}) => {
    const textColor = useColorModeValue('gray.600', 'gray.300');
    const hoverColor = useColorModeValue('black', 'white');
    const accentColor = useColorModeValue('blue.500', 'blue.300');

    return (
        <VStack spacing={1} align="flex-start" position="relative">
            {projects.map((project, index) => (
                <MotionText
                    key={project.id}
                    fontFamily="'Neutra Text', -apple-system, BlinkMacSystemFont, sans-serif"
                    fontSize={{ base: "14px", md: "16px" }}
                    fontWeight={hoveredProject === project.id ? 700 : 400}
                    textTransform="uppercase"
                    letterSpacing="0.5px"
                    cursor="pointer"
                    position="relative"
                    color={hoveredProject === project.id ? accentColor : textColor}
                    transition="all 0.3s ease"
                    transform={hoveredProject === project.id ? "scale(1.05) translateX(10px)" : "scale(1) translateX(0)"}
                    _hover={{
                        color: hoverColor,
                        textShadow: "0 0 8px currentColor",
                        transform: "scale(1.08) translateX(10px)"
                    }}
                    onMouseEnter={() => onProjectHover(project.id)}
                    onMouseLeave={() => onProjectHover(null)}
                    onClick={() => onProjectClick(project.id)}
                    style={{
                        textDecoration: 'none',
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: 'both'
                    }}
                >
                    <HStack spacing={3} align="center">
                        <Badge
                            variant="outline"
                            colorScheme={hoveredProject === project.id ? "blue" : "gray"}
                            fontSize="10px"
                            px={2}
                            py={1}
                            borderRadius="full"
                        >
                            {String(project.id).padStart(2, '0')}
                        </Badge>
                        <Box>
                            {project.title}
                            {project.year && (
                                <Text
                                    as="span"
                                    fontSize="10px"
                                    color="gray.500"
                                    ml={2}
                                    fontWeight={300}
                                >
                                    ({project.year})
                                </Text>
                            )}
                        </Box>
                    </HStack>

                    {/* Hover indicator line */}
                    <Box
                        position="absolute"
                        bottom="-2px"
                        left="0"
                        height="2px"
                        bg={accentColor}
                        borderRadius="full"
                        width={hoveredProject === project.id ? "100%" : "0%"}
                        transition="width 0.3s ease"
                    />
                </MotionText>
            ))}
        </VStack>
    );
});

export default ProjectList;