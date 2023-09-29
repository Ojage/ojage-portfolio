// Projects.tsx
import { useParams, Link } from "react-router-dom";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { projects } from "../../utils.ts/data";
import "./project.css";

const Project = () => {
  const { id } = useParams();
  const project = projects.find(
    (eachProject) => eachProject.id.toString() === id
  );
  return (
    <Box textAlign="center" textTransform="uppercase">
      <Box
        background="#7af1a7"
        h="100vh"
        w="100vw"
        pos="absolute"
        top="0"
        left={0}
        clipPath="polygon(0 0, 0% 100%, 100% 0)"
        zIndex="-1"
      />
      <Box
        background="gainsboro"
        opacity=".1"
        h="100vh"
        w="50vw"
        pos="absolute"
        backdropBlur="2xl"
        zIndex="-1"
        top="0"
        right={0}
      />
      <Heading
        fontFamily="'Neutra Text Light', sans-serif"
        color="gainsboro"
        opacity=".3"
        fontSize="330px"
        pos="absolute"
        top="-6rem"
        zIndex="-1"
        left="38%"
      >
        0{id}.
      </Heading>
      <Heading fontSize="100px">{project?.title}</Heading>
      <Box h="160px">
        <Image
          h="100%"
          boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
          src={project?.img}
          alt={`${project?.title}-image`}
        />
      </Box>
      <Text
        fontSize="12px"
        mt="5rem"
        as="a"
        href="https://rhibms.org"
        target="_blank"
      >
        view website
      </Text>
      {/* Other content */}
      <Box
        mt="3rem"
        fontFamily="'Neutra Text Light', sans-serif"
        fontSize="12px"
        transform="rotate(270deg)"
        className="descLine"
      >
        description{" "}
        <Text color="#7af1a7" as="span" fontSize="35px">
          0{id}.
        </Text>
        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>
      </Box>
      <Box mt="30rem" as="section" id="brief">
        <Heading>brief</Heading>
        <Box maxW="50vw" m="0 auto">
          <Text
            fontFamily="'Neutra Text Light', sans-serif"
            textTransform="capitalize"
          >
            {project?.brief}
          </Text>
          <ul>
            {project?.scopeOfWork.map((scope) => (
              <Text
                as="li"
                textTransform="capitalize"
                fontFamily="'Neutra Text Light', sans-serif"
                id={scope}
              >
                {scope}
              </Text>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
