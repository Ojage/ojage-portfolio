import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Icon,
    Badge,
    Stack
} from "@chakra-ui/react";
import { FaCertificate, FaAward, FaCalendarAlt } from "react-icons/fa";
import { useAboutThemeConstants } from '../../hooks/useAboutThemeConstants';
import { Certification } from '../../data/aboutData';

interface CertificationsSectionProps {
    certifications: Certification[];
}

interface CertificationCardProps {
    certification: Certification;
    index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, index }) => {
    const theme = useAboutThemeConstants();

    return (
        <Box
            bg={theme.cardBg}
            borderRadius="0"
            p={{ base: 4, md: 6 }}
            border="2px solid"
            borderColor={theme.cardBorder}
            position="relative"
            _hover={{
                transform: 'translateY(-2px)',
                transition: 'all 0.2s ease'
            }}
            transition="all 0.2s ease"
            mb={4}
        >
            <VStack align="start" spacing={3}>
                {/* Header */}
                <Stack
                    direction="row"
                    spacing={3}
                    align="center"
                    w="full"
                >
                    <Box
                        p={2}
                        bg={theme.accent}
                        borderRadius="0"
                        border="2px solid"
                        borderColor={theme.accent}
                        flexShrink={0}
                    >
                        <Icon
                            as={FaCertificate}
                            color="black"
                            boxSize={4}
                        />
                    </Box>

                    <VStack align="start" spacing={0} flex={1} minW={0}>
                        <Text
                            color={theme.accent}
                            fontSize="xs"
                            fontFamily="mono"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wider"
                        >
                            {String(index + 1).padStart(2, '0')}_CERTIFICATION
                        </Text>
                        <Heading
                            as="h3"
                            size="sm"
                            color={theme.primaryText}
                            fontFamily="mono"
                            fontWeight="600"
                            lineHeight="1.3"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            {certification.name}
                        </Heading>
                    </VStack>
                </Stack>

                {/* Details */}
                <VStack align="start" spacing={2} w="full" pl={12}>
                    {/* Issuer */}
                    {certification.issuer && (
                        <HStack spacing={2}>
                            <Icon as={FaAward} color={theme.accent} boxSize={3} />
                            <Text
                                color={theme.primaryText}
                                fontSize="sm"
                                fontWeight="500"
                                fontFamily="mono"
                            >
                                {certification.issuer}
                            </Text>
                        </HStack>
                    )}

                    {/* Period */}
                    {certification.period && (
                        <HStack spacing={2}>
                            <Icon as={FaCalendarAlt} color={theme.accent} boxSize={3} />
                            <Text
                                color={theme.primaryText}
                                fontSize="sm"
                                fontFamily="mono"
                            >
                                {certification.period}
                            </Text>
                        </HStack>
                    )}

                    {/* Status Badge */}
                    <Badge
                        bg={theme.badgeBg}
                        color={theme.badgeText}
                        borderRadius="0"
                        px={3}
                        py={1}
                        fontSize="xs"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        fontFamily="mono"
                        border="2px solid"
                        borderColor={theme.badgeBorder}
                    >
                        Verified
                    </Badge>
                </VStack>
            </VStack>
        </Box>
    );
};

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
    const theme = useAboutThemeConstants();

    return (
        <Box
            bg={theme.cardBg}
            borderRadius="0"
            p={{ base: 6, md: 8 }}
            border="2px solid"
            borderColor={theme.cardBorder}
            position="relative"
        >
            <VStack align="start" spacing={6} width="full">
                {/* Header */}
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    spacing={4}
                    align={{ base: 'start', sm: 'center' }}
                    w="full"
                >
                    <Box
                        p={3}
                        bg={theme.accent}
                        borderRadius="0"
                        border="2px solid"
                        borderColor={theme.accent}
                        flexShrink={0}
                    >
                        <Icon
                            as={FaCertificate}
                            color="black"
                            boxSize={6}
                        />
                    </Box>

                    <VStack align="start" spacing={1}>
                        <Text
                            color={theme.accent}
                            fontSize="sm"
                            fontFamily="mono"
                            fontWeight="bold"
                            textTransform="uppercase"
                            letterSpacing="wider"
                        >
                            04_CERTIFICATIONS
                        </Text>
                        <Heading
                            as="h2"
                            size="xl"
                            color={theme.primaryText}
                            fontFamily="mono"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            Credentials
                        </Heading>
                    </VStack>
                </Stack>

                {/* Certifications List */}
                <VStack spacing={0} align="stretch" w="full">
                    {certifications.map((certification, index) => (
                        <CertificationCard
                            key={certification.id}
                            certification={certification}
                            index={index}
                        />
                    ))}
                </VStack>

                {/* Footer Note */}
                <Box
                    p={4}
                    bg="transparent"
                    border="2px solid"
                    borderColor={theme.divider}
                    borderRadius="0"
                    w="full"
                >
                    <Text
                        color={theme.primaryText}
                        fontSize="sm"
                        fontFamily="mono"
                        textAlign="center"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        fontWeight="bold"
                    >
                        Additional references available upon request
                    </Text>
                </Box>

                {/* Bottom accent line */}
                <Box
                    w="full"
                    h="2px"
                    bg={theme.accent}
                    mt={2}
                />
            </VStack>
        </Box>
    );
};

export default CertificationsSection;