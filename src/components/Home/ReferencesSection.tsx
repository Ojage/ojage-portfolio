import React from 'react';
import {
    VStack,
    Text,
    Heading,
    Grid,
    CardBody
} from '@chakra-ui/react';
import { MorphCard } from '../common/MorphCard';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { professionalReferences } from '../../data/homeData';

export const ReferencesSection: React.FC = () => {
    const { cardBg, textColor, accentColor } = useThemeConstants();

    return (
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
            {professionalReferences.map((ref, idx) => (
                <MorphCard
                    key={idx}
                    bg={cardBg}
                    borderRadius="0"
                    border="2px solid"
                    borderColor={accentColor}
                >
                    <CardBody p={6}>
                        <VStack spacing={3} align="start">
                            <Heading size="md" color={textColor} fontFamily="mono">{ref.name}</Heading>
                            <Text color={accentColor} fontFamily="mono" fontSize="sm" fontWeight="bold">{ref.role}</Text>
                            <Text color={textColor} fontSize="sm"><strong>Relation:</strong> {ref.relation}</Text>
                            <Text color={textColor} fontSize="sm"><strong>Contact:</strong> {ref.contact}</Text>
                        </VStack>
                    </CardBody>
                </MorphCard>
            ))}
        </Grid>
    );
};