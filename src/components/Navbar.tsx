import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  VStack,
  IconButton,
  useColorModeValue,
  Collapse,
  HStack,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineDribbble,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { LiaBehanceSquare } from "react-icons/lia";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import O from "../assets/images/732.svg";
import { contactInfo } from "../constants/resumeConstants";

const socialLinks = [
  { href: "https://www.instagram.com/o_s_a_l_a/", icon: AiOutlineInstagram, label: "Instagram" },
  { href: "https://dribbble.com/KSalathiel/", icon: AiOutlineDribbble, label: "Dribbble" },
  { href: "https://behance.net/ojagesalathiel/", icon: LiaBehanceSquare, label: "Behance" },
  { href: "https://facebook.com/Salathiel.Ayuk/", icon: BiLogoFacebook, label: "Facebook" },
  { href: "https://linkedin.com/in/ojage-sala/", icon: BiLogoLinkedin, label: "LinkedIn" },
  { href: "https://wa.me/681402886", icon: AiOutlineWhatsApp, label: "WhatsApp" },
];

const SocialLink = ({ href, icon: Icon, label }: any) => (
  <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
    <motion.div
      whileHover={{ scale: 1.2, rotate: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      style={{ margin: "0 5px" }}
    >
      <Icon size="20px" />
    </motion.div>
  </a>
);

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const bgColor = useColorModeValue("#fef4e8", "#1a202c");
  const textColor = useColorModeValue("#3d3d3d", "white");
  const hoverColor = useColorModeValue("#ff4c60", "#ff8a65");

  return (
    <Box
      bg={bgColor}
      px={4}
      py={2}
      w="100vw"
      pos="fixed"
      top={0}
      left={0}
      zIndex={1000}
      borderBottom="4px double #ff4c60"
      boxShadow="0 2px 10px rgba(0,0,0,0.08)"
      fontFamily="'Courier New', monospace"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap={3}>
          <Image src={O} alt="logo" boxSize="40px" borderRadius="full" bg="white" />
          <Text fontWeight="bold" fontSize="lg" color={textColor}>
            {contactInfo.name}
          </Text>
        </Flex>

        <Box display={{ base: "none", md: "flex" }} alignItems="center" gap={6}>
          <Text
            as={Link}
            to="/"
            _hover={{ color: hoverColor }}
            fontWeight="bold"
            color={textColor}
          >
            Home
          </Text>
          <Text
            as={Link}
            to="/about"
            _hover={{ color: hoverColor }}
            fontWeight="bold"
            color={textColor}
          >
            About
          </Text>
          <Text
            as="a"
            href={`mailto:${contactInfo.email}`}
            _hover={{ color: hoverColor }}
            fontWeight="bold"
            color={textColor}
          >
            {contactInfo.email}
          </Text>
          <HStack spacing={2}>{socialLinks.map(SocialLink)}</HStack>
        </Box>

        <IconButton
          aria-label="Toggle menu"
          icon={isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          display={{ base: "inline-flex", md: "none" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          variant="ghost"
          fontSize="22px"
          color={textColor}
        />
      </Flex>

      <Collapse in={isMobileMenuOpen} animateOpacity>
        <VStack spacing={4} mt={3} display={{ base: "flex", md: "none" }}>
          <Text as={Link} to="/" color={textColor} fontWeight="bold" _hover={{ color: hoverColor }}>
            Home
          </Text>
          <Text as={Link} to="/about" color={textColor} fontWeight="bold" _hover={{ color: hoverColor }}>
            About
          </Text>
          <Text
            as="a"
            href={`mailto:${contactInfo.email}`}
            color={textColor}
            fontWeight="bold"
            _hover={{ color: hoverColor }}
          >
            {contactInfo.email}
          </Text>
          <HStack>{socialLinks.map(SocialLink)}</HStack>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Nav;