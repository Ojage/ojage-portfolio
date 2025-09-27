import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Icon,
    Link,
    Wrap,
    WrapItem,
    Stack,
} from '@chakra-ui/react';
import {
    FaEnvelope,
    FaPhone,
    FaLinkedin,
    FaGlobe,
    FaMapMarkerAlt,
    FaUser,
} from 'react-icons/fa';
import { useAboutThemeConstants } from '../../hooks/useAboutThemeConstants';
import { PersonalInfo } from '../../data/aboutData';

interface PersonalHeaderProps {
    personal: PersonalInfo;
}

const PersonalHeader: React.FC<PersonalHeaderProps> = ({ personal }) => {
    const theme = useAboutThemeConstants();

    const contactItems = [
        {
            icon: FaEnvelope,
            text: personal.email,
            href: personal.email ? `mailto:${personal.email}` : undefined,
            label: 'Email',
            aria: personal.email ? `Email ${personal.email}` : 'Email',
        },
        {
            icon: FaPhone,
            text: personal.phone,
            href: personal.phone ? `tel:${personal.phone}` : undefined,
            label: 'Phone',
            aria: personal.phone ? `Call ${personal.phone}` : 'Phone',
        },
        { icon: FaMapMarkerAlt, text: personal.location, label: 'Location', aria: 'Location' },
        {
            icon: FaLinkedin,
            text: personal.linkedin ? 'LinkedIn' : undefined,
            href: personal.linkedin,
            label: 'LinkedIn',
            aria: 'Open LinkedIn profile',
        },
        {
            icon: FaGlobe,
            text: personal.website ? 'Portfolio' : undefined,
            href: personal.website,
            label: 'Website',
            aria: 'Open portfolio website',
        },
    ].filter((i) => Boolean(i.text));

    return (
        <Box
            bg={theme.cardBg}
            borderRadius="0"
            p={{ base: 4, sm: 6, md: 8, lg: 10 }}
            border="2px solid"
            borderColor={theme.cardBorder}
            position="relative"
            overflow="hidden"
        >
            <VStack align="start" spacing={{ base: 4, md: 6 }} width="full">
                {/* Header */}
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    spacing={{ base: 3, sm: 4, md: 6 }}
                    align={{ base: 'start', sm: 'center' }}
                    w="full"
                >
                    {/* Icon */}
                    <Box
                        p={{ base: 2.5, sm: 3, md: 4 }}
                        bg={theme.accent}
                        borderRadius="0"
                        border="2px solid"
                        borderColor={theme.accent}
                        flexShrink={0}
                        aria-label="Profile"
                    >
                        <Icon as={FaUser} color="black" boxSize={{ base: 7, sm: 8, md: 10 }} />
                    </Box>

                    {/* Name + Title */}
                    <VStack align="start" spacing={{ base: 1, md: 2 }} minW={0} flex={1}>
                        <Text
                            color={theme.accent}
                            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                            fontFamily="mono"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wider"
                        >
                            01_PERSONAL_INFO
                        </Text>

                        <Heading
                            as="h1"
                            color={theme.primaryText}
                            fontFamily="mono"
                            textTransform="uppercase"
                            letterSpacing="wide"
                            lineHeight={1.2}
                            fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                            noOfLines={{ base: 2, md: 1 }}
                        >
                            {personal.name}
                        </Heading>

                        {personal.title && (
                            <Text
                                fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                                color={theme.accent}
                                fontFamily="mono"
                                fontWeight="600"
                                textTransform="uppercase"
                                letterSpacing="wider"
                                noOfLines={1}
                            >
                                {personal.title}
                            </Text>
                        )}
                    </VStack>
                </Stack>

                {/* Contacts */}
                <Box width="full">
                    <Text
                        color={theme.accent}
                        fontSize={{ base: 'xs', sm: 'sm' }}
                        fontFamily="mono"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        mb={{ base: 2, sm: 3, md: 4 }}
                    >
                        Contact Details:
                    </Text>

                    <Wrap spacing={{ base: 3, sm: 4, md: 6 }} align="center">
                        {contactItems.map((item, index) => {
                            const isHttp = Boolean(item.href && item.href.startsWith('http'));
                            return (
                                <WrapItem key={`${item.label}-${index}`}>
                                    <HStack spacing={{ base: 2, sm: 3 }} minW={0}>
                                        <Box
                                            p={{ base: 1.5, sm: 2 }}
                                            bg="transparent"
                                            border="2px solid"
                                            borderColor={theme.contactIcon}
                                            borderRadius="0"
                                            flexShrink={0}
                                        >
                                            <Icon as={item.icon} color={theme.contactIcon} boxSize={{ base: 3.5, sm: 4 }} />
                                        </Box>

                                        <VStack align="start" spacing={0} minW={0}>
                                            <Text
                                                color={theme.mutedText}
                                                fontSize={{ base: '10px', sm: 'xs' }}
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
                                                    fontSize={{ base: 'sm', sm: 'sm' }}
                                                    fontWeight="500"
                                                    _hover={{ color: theme.accent, textDecoration: 'underline' }}
                                                    isExternal={isHttp}
                                                    rel={isHttp ? 'noopener noreferrer' : undefined}
                                                    fontFamily="mono"
                                                    aria-label={item.aria}
                                                    sx={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                                                >
                                                    {item.text}
                                                </Link>
                                            ) : (
                                                <Text
                                                    color={theme.primaryText}
                                                    fontSize={{ base: 'sm', sm: 'sm' }}
                                                    fontWeight="500"
                                                    fontFamily="mono"
                                                    sx={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                                                >
                                                    {item.text}
                                                </Text>
                                            )}
                                        </VStack>
                                    </HStack>
                                </WrapItem>
                            );
                        })}
                    </Wrap>
                </Box>
            </VStack>
        </Box>
    );
};

export default PersonalHeader;
