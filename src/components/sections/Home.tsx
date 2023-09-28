// Home.tsx
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { projects } from "../../utils.ts/data";

const Home = () => {
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
        <Stack spacing="1rem" color="grey">
          <Text textDecor="none" as={Link}>
            01
          </Text>
          <Text textDecor="none" as={Link}>
            02
          </Text>
          <Text textDecor="none" as={Link}>
            03
          </Text>
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
          <Image
            mt="2.2rem"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            borderRadius="50%"
            h="126px"
            w="130px"
            src={projects[0].img.RhibmsLogo}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
