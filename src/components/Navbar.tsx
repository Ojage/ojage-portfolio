import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Image,
  useColorMode,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import O from "../assets/images/732.png";
import "./nav.css";

interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      // as={Link}
      // to="/"
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Box>
  );
};

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const gradientBackground = {
    color: "inherit",
    background:
      'linear-gradient(to right,rgba(100, 200, 200, 1),rgba(100, 200, 200, 1)),linear-gradient(to right,rgba(255, 0, 0, 1),rgba(255, 0, 180, 1),rgba(0, 100, 200, 1))',
    backgroundSize: '100% 3px, 0 3px',
    backgroundPosition: '100% 100%, 0 100%',
    backgroundRepeat: 'no-repeat',
    transition: 'background-size 400ms',
    textDecoration: 'none',
  };

  const linkHover = {
    backgroundSize: '100% 3px, 100% 3px', // Rainbow underline on hover
  };
  return (
    <Box
      fontSize="13px"
      textTransform="uppercase"
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
    >
      <Flex mt="1rem" h={16} alignItems="center" justifyContent="space-between">
        <Text as={Link} to="/about">
          About
        </Text>
        <Box>
          <Stack
            fontSize="12px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box pt="11rem" h="54px">
              <Image h="100%" src={O} alt="Logo" />
            </Box>
            <Box pr=".7rem">
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

        <Flex alignItems="center">
          <Text>Get in touch</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Nav;
