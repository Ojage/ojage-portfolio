import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineDribbble,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { LiaBehanceSquare } from "react-icons/lia";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import {
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

import O from "../assets/images/732.svg";
import "./nav.css";

// const NavLink = (props: Props) => {
//   const { children } = props;

//   return (
//     <Box
//       // as={Link}
//       // to="/"
//       px={2}
//       py={1}
//       rounded="md"
//       _hover={{
//         textDecoration: "none",
//         bg: useColorModeValue("gray.200", "gray.700"),
//       }}
//     >
//       {children}
//     </Box>
//   );
// };

// const IconBox = () => {
//   return (

//   )
// }
const Nav = () => {
  const [getInTouch, ssetGetInTouch] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const pathname = window.location.pathname;
  useEffect(() => {
    if (pathname.length > 1) {
      setIsHome(false);
    }
  }, [pathname]);
  return (
    <Box
      fontSize="11px"
      textTransform="uppercase"
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
    >
      <Flex mt="1rem" h={16} alignItems="center" justifyContent="space-between">
        <Text as={Link} to="/about">
          About
        </Text>
        <Box pos="fixed" left="45%" top={isHome ? "4%" : "0"}>
          <Stack
            fontSize="12px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box as={Link} className="logoA" to="/" h="54px" onClick={() => setIsHome(true)}>
              <Image h="100%" src={O} alt="Logo" />
            </Box>
            <Box pr=".7rem" display={isHome ? "block": "none"}>
              <Text
                fontFamily="'Neutra Text Light', sans-serif"
                transform="rotate(270deg)"
                textAlign="left"
              >
                Ojage Salathiel
              </Text>
              <Text pt="1.8rem" transform="rotate(270deg)" textAlign="left">
                Full Stack Developer
              </Text>
            </Box>
          </Stack>
        </Box>

        <Box>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            className="animate__animated animate__fadeIn"
            display={getInTouch ? "inline-block" : "none"}
            onMouseLeave={() => ssetGetInTouch(!getInTouch)}
          >
            <Flex gap="1rem">
              <a
                href="https://www.instagram.com/o_s_a_l_a/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size="15px" />
              </a>
              <a
                href="https://dribbble.com/KSalathiel/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineDribbble size="15px" />
              </a>
              <a
                href="https://behance.net/ojagesalathiel/"
                target="_blank"
                rel="noreferrer"
              >
                <LiaBehanceSquare size="15px" />
              </a>
              <a
                href="https://facebook.com/Salathiel.Ayuk/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoFacebook size="15px" />
              </a>
              <a
                href="https://linkedin.com/in/ojage-sala/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoLinkedin size="15px" />
              </a>
              <a
                href="https://wa.me/681402886"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp size="15px" />
              </a>
            </Flex>
            <a href="mailto:salathiel.ojage@gmail.com">
              salathiel.ojage@gmail.com
            </a>
          </Flex>
          <Text
            display={getInTouch ? "none" : "inline-block"}
            onMouseEnter={() => ssetGetInTouch(!getInTouch)}
          >
            Get in touch
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Nav;
