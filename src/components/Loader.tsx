// Loader.tsx
import React from "react";
import { Box, Image } from "@chakra-ui/react";
import O from "../assets/images/732.svg";

const Loader = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      position="fixed"
      top="0"
      left="0"
      backgroundColor="transparent"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      > */}
        <Image className="animate__animated animate__bounce animate__infinite " src={O} alt="Loading illustration" />
      {/* </Spinner> */}
    </Box>
  );
};

export default Loader;
