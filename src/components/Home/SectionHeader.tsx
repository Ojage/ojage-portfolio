import React from 'react';
import { VStack, Heading } from '@chakra-ui/react';

interface SectionHeaderProps {
    title: string;
    color: string;
    marginBottom?: number;
    as?: React.ElementType;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    color,
    marginBottom = 12,
    as = 'h2',
}) => {
    return (
        <VStack spacing={8} align="start" mb={marginBottom}>
            <Heading
                as={as}
                color={color}
                fontSize="lg"
                fontFamily="mono"
                fontWeight="bold"
                letterSpacing="wider"
            >
                [{title}]
            </Heading>
        </VStack>
    );
};