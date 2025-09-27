import React from 'react';
import { VStack, Text } from '@chakra-ui/react';

interface SectionHeaderProps {
    title: string;
    color: string;
    marginBottom?: number;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    color,
    marginBottom = 12
}) => {
    return (
        <VStack spacing={8} align="start" mb={marginBottom}>
            <Text
                color={color}
                fontSize="lg"
                fontFamily="mono"
                fontWeight="bold"
                letterSpacing="wider"
            >
                [{title}]
            </Text>
        </VStack>
    );
};