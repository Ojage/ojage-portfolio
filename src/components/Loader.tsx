import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useThemeConstants } from "../hooks/useThemeConstants";

const MotionText = motion(Text);

const Loader = () => {
  const { bgColor, accentColor, textColor } = useThemeConstants();

  const text = "Ojage Loading";

  return (
    <Box
      width="100vw"
      height="100vh"
      position="fixed"
      top="0"
      left="0"
      backgroundColor={bgColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={9999}
      flexDirection="column"
    >
      <MotionText
        fontSize="4xl"
        fontWeight="bold"
        color={textColor}
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text}
        <MotionText
          as="span"
          color={accentColor}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2 }}
        >
          |
        </MotionText>
      </MotionText>

      {/* Typing animation effect */}
      <MotionText
        fontSize="lg"
        color={accentColor}
        mt={4}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        borderBottom={`2px solid ${accentColor}`}
        width="100px"
      />
    </Box>
  );
};

export default Loader;