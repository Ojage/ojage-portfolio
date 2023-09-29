import React from "react";
import { Box, Image } from "@chakra-ui/react";
import "./marquee.css";

interface marquee {
  img: string;
}
const Marquee = ({ img }: marquee) => {
  return (
    <Box overflow="hidden" position="relative" w="100%" h="400px">
      <Box
        whiteSpace="nowrap"
        // top="0"
        className="animate__animated animate__bounce animate__slower 2s"
        // pos="absolute"
        animation="marquee-rtl 10s linear infinite"
      >
        <Image
          boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;"
          src={img}
          alt="Image"
          className="animate__animated animate__fadeIn"
          boxSize="auto"
          h="100%"
        />
      </Box>
      <Box
        className="animate__animated animate__lightSpeedInRight"
        whiteSpace="nowrap"
        animation="marquee-ltr 10s linear infinite"
        position="absolute"
        boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;"
        top="0"
      >
        <Image
          className="animate__animated animate__fadeIn"
          src={img}
          alt="Image"
          boxSize="auto"
          h="100%"
        />
      </Box>
    </Box>
  );
};

export default Marquee;
