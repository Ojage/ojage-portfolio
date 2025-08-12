import React from 'react';
import {
    Box,
    VStack,
    HStack,
    Skeleton,
    SkeletonText,
    SkeletonCircle,
    useColorModeValue,
} from '@chakra-ui/react';

interface LoadingExcerptProps {
    showAvatar?: boolean;
    lines?: number;
    spacing?: string | number;
    height?: string | number;
    width?: string | number;
    borderRadius?: string | number;
}

const LoadingExcerpt: React.FC<LoadingExcerptProps> = ({
    showAvatar = true,
    lines = 3,
    spacing = 4,
    height = "auto",
    width = "100%",
    borderRadius = "md"
}) => {
    const bgColor = useColorModeValue('gray.50', 'gray.700');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    return (
        <Box
            p={6}
            bg={bgColor}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius={borderRadius}
            width={width}
            height={height}
            shadow="sm"
        >
            <VStack spacing={spacing} align="stretch">
                {/* Header with avatar and title */}
                <HStack spacing={4}>
                    {showAvatar && (
                        <SkeletonCircle
                            size="12"
                            startColor="gray.300"
                            endColor="gray.400"
                        />
                    )}
                    <VStack spacing={2} align="stretch" flex={1}>
                        <Skeleton
                            height="20px"
                            width="60%"
                            startColor="gray.300"
                            endColor="gray.400"
                            borderRadius="md"
                        />
                        <Skeleton
                            height="14px"
                            width="40%"
                            startColor="gray.300"
                            endColor="gray.400"
                            borderRadius="md"
                        />
                    </VStack>
                </HStack>

                {/* Content lines */}
                <SkeletonText
                    mt={4}
                    noOfLines={lines}
                    spacing={3}
                    skeletonHeight={3}
                    startColor="gray.300"
                    endColor="gray.400"
                />

                {/* Action buttons placeholder */}
                <HStack spacing={3} mt={4}>
                    <Skeleton
                        height="32px"
                        width="80px"
                        startColor="gray.300"
                        endColor="gray.400"
                        borderRadius="md"
                    />
                    <Skeleton
                        height="32px"
                        width="100px"
                        startColor="gray.300"
                        endColor="gray.400"
                        borderRadius="md"
                    />
                </HStack>
            </VStack>
        </Box>
    );
};

export default LoadingExcerpt;