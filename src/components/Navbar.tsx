import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "animate.css";
import "./nav.css";
import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  useColorModeValue,
  Collapse,
  IconButton,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineDribbble, AiOutlineWhatsApp } from "react-icons/ai";
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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon size="20px" />
    </motion.div>
  </a>
);

const Nav = () => {
  const [showContact, setShowContact] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);

  const bgColor = useColorModeValue("gray.100", "gray.900");

  const leftPosition = useBreakpointValue({
    base: isHome ? "20%" : "35%", // Smaller percentages for mobile
    md: isHome ? "44%" : "50%",  // Default percentages for desktop
  });

  return (
    <Box
      fontSize="11px"
      textTransform="uppercase"
      bg={bgColor}
      px={{ base: 3, md: 4 }}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
    >
      <Flex
        h={{ base: 14, md: 16 }}
        alignItems="center"
        justifyContent="space-between"
        position="relative"
      >
        {/* Mobile Menu Toggle */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variant="ghost"
            fontSize="24px"
          />
        </Box>

        <Text
          as={Link}
          to="/about"
          fontWeight="bold"
          _hover={{ textDecoration: "none" }}
          display={{ base: "none", md: "block" }}
        >
          About
        </Text>

        {/* Centered Logo and Title */}
        <motion.div
          style={{
            position: "absolute",
            left: leftPosition, 
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HStack spacing={4} flexDir={{base: "row-reverse", md: "row"}} mt={isHome ? "4rem" : "0"} transition="all 0.3s ease" h="auto">
            <Flex
              as={Link}
              to="/"
              className="logoA"
              h={{ base: "40px", md: "54px" }}
              w={{ base: "40px", md: "54px" }}
              onClick={() => setIsHome(true)}
            >
              <Image
                rounded="full"
                bg="white"
                shadow="md"
                h="90%"
                src={O}
                alt="Logo"
              />
            </Flex>
            {isHome && (
              <Box fontWeight={600}>
                <Text
                  fontFamily="'Neutra Text Light', sans-serif"
                  textAlign="left"
                  fontSize={{ base: "xs", md: "md" }}
                >
                  {contactInfo.name}
                </Text>
                <Text pt="0.5rem" textAlign="left" fontSize={{ base: "xs", md: "sm" }}>
                  {contactInfo.title}
                </Text>
              </Box>
            )}
          </HStack>
        </motion.div>

        {/* Desktop Contact Section */}
        <Box
          w={{ base: "260px", md: "325px" }}
          textAlign="right"
          display={{ base: "none", md: "block" }}
        >
          {showContact ? (
            <Collapse
              className="animate__animated fadeInDownBig"
              in={showContact}
              onMouseLeave={() => setShowContact(!showContact)}
              animateOpacity
            >
              <Flex gap="1rem" alignItems="end">
                {socialLinks.map(({ href, icon, label }) => (
                  <SocialLink key={label} href={href} icon={icon} label={label} />
                ))}
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </Flex>
            </Collapse>
          ) : (
            <Text
              cursor="pointer"
              onMouseEnter={() => setShowContact(true)}
              fontWeight="bold"
            >
              Get in touch
            </Text>
          )}
        </Box>
      </Flex>

      {/* Mobile Dropdown for Contact Section */}
      <Collapse in={isMobileMenuOpen} animateOpacity>
        <VStack
          bg={bgColor}
          spacing={4}
          mt={4}
          p={4}
          rounded="md"
          shadow="md"
          display={{ base: "block", md: "none" }}
        >
          <Text
          as={Link}
          to="/about"
          fontWeight="bold"
          _hover={{ textDecoration: "none" }}
          display={{ base: "inline-block", md: "none" }}
        >
          About
        </Text>
          <HStack>
          {socialLinks.map(({ href, icon, label }) => (
            <SocialLink key={label} href={href} icon={icon} label={label} />
          ))}
          </HStack>
          <Text fontSize="sm" mt={2}>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </Text>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Nav;
