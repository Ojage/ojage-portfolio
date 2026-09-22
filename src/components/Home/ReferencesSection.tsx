import React from 'react';
import {
    VStack,
    Text,
    Heading,
    Grid,
    Box,
    HStack,
    Tag,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { professionalReferences } from '../../data/homeData';

const getInitials = (name: string): string =>
    name
        .replace(/^(Mme|M\.|Mr\.|Dr\.|Mrs\.|Ms\.)\s+/i, '')
        .split(' ')
        .map((part) => part[0])
        .filter(Boolean)
        .slice(0, 2)
        .join('')
        .toUpperCase();

export const ReferencesSection: React.FC = () => {
    const { cardBg, textColor, accentColor } = useThemeConstants();

    return (
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
            {professionalReferences.map((ref, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: (idx % 3) * 0.12 }}
                >
                    <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                        <Box
                            bg={cardBg}
                            borderRadius="0"
                            border="2px solid"
                            borderColor={accentColor}
                            h="full"
                            p={6}
                            position="relative"
                            transition="box-shadow 0.3s ease"
                            _hover={{
                                boxShadow: `0 0 0 2px ${accentColor}, 0 12px 40px -12px ${accentColor}`,
                            }}
                        >
                            {/* top accent tab */}
                            <Box
                                position="absolute"
                                top={0}
                                left={6}
                                w={12}
                                h={1}
                                bg={accentColor}
                            />

                            <VStack spacing={4} align="start">
                                <HStack spacing={4} align="center">
                                    {/* initial avatar */}
                                    <motion.div
                                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.06 }}
                                        transition={{ duration: 0.45 }}
                                    >
                                        <Box
                                            w={12}
                                            h={12}
                                            bg={accentColor}
                                            color="black"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            fontFamily="mono"
                                            fontWeight="bold"
                                            fontSize="lg"
                                            borderRadius="0"
                                            border="2px solid"
                                            borderColor={accentColor}
                                            flexShrink={0}
                                        >
                                            {getInitials(ref.name)}
                                        </Box>
                                    </motion.div>
                                    <VStack spacing={0.5} align="start">
                                        <Heading size="md" color={textColor} fontFamily="mono">
                                            {ref.name}
                                        </Heading>
                                        <Text color={accentColor} fontFamily="mono" fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
                                            {ref.role}
                                        </Text>
                                    </VStack>
                                </HStack>

                                <Box w="full" h="1px" bg={accentColor} opacity={0.25} />

                                <Tag
                                    bg="transparent"
                                    border="1px solid"
                                    borderColor={accentColor}
                                    color={accentColor}
                                    fontFamily="mono"
                                    fontSize="xs"
                                    textTransform="uppercase"
                                    borderRadius="0"
                                >
                                    {ref.relation}
                                </Tag>

                                <Text color={textColor} fontSize="sm">
                                    <strong>Contact:</strong> {ref.contact}
                                </Text>
                            </VStack>
                        </Box>
                    </motion.div>
                </motion.div>
            ))}
        </Grid>
    );
};