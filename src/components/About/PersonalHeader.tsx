import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Icon,
    Link,
    Flex,
    Wrap,
    WrapItem,
    Stack
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGlobe, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { useAboutThemeConstants } from '../../hooks/useAboutThemeConstants';
import { PersonalInfo } from '../../data/aboutData';

interface PersonalHeaderProps {
    personal: PersonalInfo;
}

const PersonalHeader: React.FC<PersonalHeaderProps> = ({ personal }) => {
    const theme = useAboutThemeConstants();

    const contactItems = [
        { icon: FaEnvelope, text: personal.email, href: `mailto:${personal.email}`, label: "Email" },
        { icon: FaPhone, text: personal.phone, href: `tel:${personal.phone}`, label: "Phone" },
        { icon: FaMapMarkerAlt, text: personal.location, label: "Location" },
        { icon: FaLinkedin, text: "LinkedIn", href: personal.linkedin, label: "LinkedIn" },
        { icon: FaGlobe, text: "Portfolio", href: personal.website, label: "Website" }
    ];

    return (
        <Box
            bg={theme.cardBg}
            borderRadius="0"
            p={{ base: 6, md: 10 }}
            border="2px solid"
            borderColor={theme.cardBorder}
            position="relative"
            overflow="hidden"
        >
            <VStack align="start" spacing={6} width="full">
                {/* Header Section */}
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    spacing={{ base: 4, sm: 6 }}
                    align={{ base: 'start', sm: 'center' }}
                    w="full"
                >
                    {/* Icon Box */}
                    <Box
                        p={{ base: 3, md: 4 }}
                        bg={theme.accent}
                        borderRadius="0"
                        border="2px solid"
                        borderColor={theme.accent}
                        flexShrink={0}
                    >
                        <Icon
                            as={FaUser}
                            color="black"
                            boxSize={{ base: 8, md: 10 }}
                        />
                    </Box>

                    {/* Name and Title */}
                    <VStack align="start" spacing={2} minW={0} flex={1}>
                        <Text
                            color={theme.accent}
                            fontSize={{ base: 'sm', md: 'md' }}
                            fontFamily="mono"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wider"
                        >
                            01_PERSONAL_INFO
                        </Text>
                        <Heading
                            as="h1"
                            size={{ base: "xl", md: "2xl" }}
                            color={theme.primaryText}
                            fontFamily="mono"
                            textTransform="uppercase"
                            letterSpacing="wide"
                            lineHeight={1.2}
                        >
                            {personal.name}
                        </Heading>
                        <Text
                            fontSize={{ base: "lg", md: "xl" }}
                            color={theme.accent}
                            fontFamily="mono"
                            fontWeight="600"
                            textTransform="uppercase"
                            letterSpacing="wider"
                        >
                            {personal.title}
                        </Text>
                    </VStack>
                </Stack>

                {/* Contact Information Grid */}
                <Box width="full">
                    <Text
                        color={theme.accent}
                        fontSize="sm"
                        fontFamily="mono"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        mb={4}
                    >
                        Contact Details:
                    </Text>

                    <Wrap spacing={6} align="center">
                        {contactItems.map((item, index) => (
                            <WrapItem key={index}>
                                <HStack spacing={3}>
                                    {/* Icon Box */}
                                    <Box
                                        p={2}
                                        bg="transparent"
                                        border="2px solid"
                                        borderColor={theme.contactIcon}
                                        borderRadius="0"
                                    >
                                        <Icon
                                            as={item.icon}
                                            color={theme.contactIcon}
                                            boxSize={4}
                                        />
                                    </Box>

                                    {/* Contact Info */}
                                    <VStack align="start" spacing={0}>
                                        <Text
                                            color={theme.mutedText}
                                            fontSize="xs"
                                            fontFamily="mono"
                                            textTransform="uppercase"
                                            fontWeight="bold"
                                        >
                                            {item.label}
                                        </Text>
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                color={theme.primaryText}
                                                fontSize="sm"
                                                fontWeight="500"
                                                _hover={{
                                                    color: theme.accent,
                                                    textDecoration: 'underline'
                                                }}
                                                isExternal={item.href.startsWith('http')}
                                                fontFamily="mono"
                                            >
                                                {item.text}
                                            </Link>
                                        ) : (
                                            <Text
                                                color={theme.primaryText}
                                                fontSize="sm"
                                                fontWeight="500"
                                                fontFamily="mono"
                                            >
                                                {item.text}
                                            </Text>
                                        )}
                                    </VStack>
                                </HStack>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Box>
            </VStack>
        </Box>
    );
};

export default PersonalHeader;