import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { projects } from "../../utils.ts/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [projectListHovered, setProjectListHovered] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  const handleProjectHover = (projectId: number | null) => {
    setHoveredProject(projectId);
  };

  return (
    <Flex
      textTransform="uppercase"
      justifyContent="center"
      alignItems="center"
      minH="90vh"
      minW="95vw"
      flexDirection={{ base: "column", md: "row" }} // Adjust direction on mobile
    >
      {/* Title text - responsive font size */}
      <Text
        fontWeight={900}
        fontSize={{ base: "60px", md: "120px", lg: "190px" }} // Responsive text size
        color="gainsboro"
        mb={{ base: 4, md: 0 }} // Margin adjustment for mobile
      >
        projects
      </Text>

      {/* Projects List */}
      <Flex
        pos="fixed"
        display="inline-table"
        justifyContent="center"
        alignItems="center"
        top={{ base: "auto", md: "47%" }} // Adjust position for mobile
        left={{ base: "auto", md: "49.1%" }}
        transform={{ base: "none", md: "translate(-100%, -50%)" }}
        zIndex="1"
        bottom={{ base: "10%", md: "auto" }} // Position for mobile screens
      >
        {/* Non-hovered project list */}
        <Stack
          className="animate__animated animate__bounceIn"
          onMouseEnter={() => setProjectListHovered(!projectListHovered)}
          display={projectListHovered ? "none" : "flex"}
          gap="-1rem"
          color="grey"
        >
          {projects.map(({ id }) => (
            <Text key={id} textDecor="none">
              0{id}
            </Text>
          ))}
        </Stack>

        {/* Hovered project titles */}
        <Stack
          onMouseLeave={() => setProjectListHovered(!projectListHovered)}
          display={projectListHovered ? "flex" : "none"}
          className="animate__animated animate__jello"
          spacing=".1rem"
          color="grey"
        >
          {projects.map(({ id, title }) => (
            <Text
              key={id}
              _hover={{ color: "black", cursor: "pointer" }}
              textAlign="right"
              fontSize={{ base: "10px", md: "12px" }} // Responsive font size
              textTransform="uppercase"
              textDecor="none"
              onMouseEnter={() => handleProjectHover(id)}
              onClick={() => handleProjectClick(id)}
              onMouseLeave={() => handleProjectHover(null)}
            >
              {title}
            </Text>
          ))}
        </Stack>
      </Flex>

      {/* Image box for hovered project */}
      <Flex
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
        pos="fixed"
        display="inline-table"
        h={{ base: "150px", md: "200px" }} // Responsive height
        w={{ base: "200px", md: "305px" }} // Responsive width
        top={{ base: "auto", md: "47%" }} // Adjust position on mobile
        right={{ base: "auto", md: "8.1%" }}
        bottom={{ base: "5%", md: "auto" }} // Position for mobile screens
        transform={{ base: "none", md: "translate(-100%, -50%)" }}
        zIndex="2"
      >
        <Box w="fit-content" ml={{ base: "0", md: "-3.5rem" }}>
          {hoveredProject && (
            <Image
              className="animate__animated animate__fadeInLeft"
              mt="2.2rem"
              objectFit="cover"
              boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
              h={{ base: "100px", md: "126px" }} // Responsive height
              w={{ base: "100px", md: "130px" }} // Responsive width
              src={projects[hoveredProject - 1].img}
            />
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
