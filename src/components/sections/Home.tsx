// Home.tsx
// import { Link } from "react-router-dom";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { projects } from "../../utils.ts/data";
import { useState } from "react";

const Home = () => {
  const [projectListHovered, setProjectListHovered] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectHover = (projectId: any) => {
    setHoveredProject(projectId);
  };

  return (
    <Flex
      textTransform="uppercase"
      justifyContent="center"
      alignItems="center"
      minH="90vh"
      minW="95vw"
    >
      <Text fontWeight={900} fontSize="190px" color="gainsboro">
        projects
      </Text>
      <Flex
        pos="fixed"
        display="inline-table"
        justifyContent="center"
        alignItems="center"
        top="47%"
        left="49.1%"
        transform="translate(-100%, -50%)"
        zIndex="1"
      >
        <Stack
          onMouseEnter={() => setProjectListHovered(!projectListHovered)}
          display={projectListHovered ? "none" : "flex"}
          gap="-1rem"
          color="grey"
        >
          {projects.map(({ id }) => {
            return <Text textDecor="none">0{id}</Text>;
          })}
        </Stack>
        <Stack
          onMouseLeave={() => setProjectListHovered(!projectListHovered)}
          display={projectListHovered ? "flex" : "none"}
          spacing=".1rem"
          color="grey"
        >
          {projects.map(({ id, title }) => {
            return (
              <Text
                key={id}
                _hover={{ color: "black", cursor: "pointer" }}
                textAlign="right"
                fontSize="12px"
                textTransform="uppercase"
                textDecor="none"
                onMouseEnter={() => handleProjectHover(id)}
                onMouseLeave={() => handleProjectHover(null)}
              >
                {title}
              </Text>
            );
          })}
        </Stack>
      </Flex>
      <Flex
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
        pos="fixed"
        display="inline-table"
        h="200px"
        w="305px"
        top="47%"
        right="8.1%"
        transform="translate(-100%, -50%)"
        zIndex="2"
      >
        <Box w="fit-content" ml="-3.5rem">
          {hoveredProject && (
            <Image
              className="animate__animated animate__fadeInLeft"
              mt="2.2rem"
              objectFit="cover"
              boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
              h="126px"
              w="130px"
              src={projects[hoveredProject - 1].img}
            />
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
