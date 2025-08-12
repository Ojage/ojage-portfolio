import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionSVG = motion.svg;

const colorCycle = ["#2B6CB0", "#38A169", "#D69E2E", "#DD6B20", "#E53E3E", "#805AD5"];

const Loader = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colorCycle.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fillColor = colorCycle[currentColorIndex];

  return (
    <Box
      width="100vw"
      height="100vh"
      position="fixed"
      top="0"
      left="0"
      backgroundColor="gray.900"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <MotionSVG
        width="120"
        height="120"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill={fillColor} stroke="none">
          <path d="M3062 3998 l3 -113 85 -30 c92 -34 183 -78 215 -104 18 -15 19 -15 6 2 -7 9 -10 17 -5 17 5 0 9 45 9 100 0 55 -4 100 -9 100 -5 0 -3 6 3 14 14 16 -4 28 -101 67 -48 19 -181 58 -201 59 -4 0 -6 -51 -5 -112z" />
          <path d="M2506 4073 c-3 -3 -23 -6 -43 -5 -32 0 -35 -1 -15 -8 12 -5 30 -7 40 -4 14 5 15 4 2 -5 -8 -6 -24 -8 -35 -5 -17 6 -16 3 5 -16 17 -15 21 -24 13 -27 -7 -3 -13 -13 -13 -24 0 -10 -6 -19 -12 -20 -7 0 -4 -4 7 -9 19 -8 19 -8 -5 -19 l-25 -11 28 5 c15 3 27 1 27 -5 0 -5 -5 -10 -11 -10 -24 0 23 -31 53 -35 18 -3 47 -9 65 -14 17 -5 34 -7 37 -3 3 3 6 1 6 -4 0 -5 21 -16 47 -24 72 -21 228 -105 313 -169 109 -81 227 -204 293 -302 270 -406 258 -875 -29 -1154 -87 -85 -156 -127 -271 -168 -84 -30 -96 -31 -261 -33 -95 -1 -175 2 -178 7 -3 5 -10 9 -15 9 -6 0 -8 -4 -5 -9 7 -11 -20 -22 -38 -15 -8 3 -17 1 -21 -5 -3 -6 -1 -11 4 -11 6 0 11 -4 11 -10 0 -5 -6 -7 -14 -4 -10 4 -13 -3 -10 -27 2 -18 9 -36 15 -40 8 -4 5 -10 -7 -18 -14 -8 -15 -11 -4 -11 13 0 13 -1 0 -10 -11 -8 -7 -9 15 -4 28 6 29 5 11 -8 -18 -14 -14 -16 55 -33 110 -27 309 -31 421 -10 104 21 155 51 284 169 184 169 329 393 410 631 57 168 20 397 -106 660 -114 236 -313 465 -522 598 -167 107 -493 238 -522 210z" />
        </g>
      </MotionSVG>
    </Box>
  );
};

export default Loader;
