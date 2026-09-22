import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useThemeConstants } from '../hooks/useThemeConstants';
import { ThemeToggle } from '../components/common/ThemeToggle';

const NotFound: React.FC = () => {
    const { bgColor, textColor, accentColor } = useThemeConstants();

    return (
        <Box minH="calc(100vh - 90px)" bg={bgColor} display="flex" alignItems="center" justifyContent="center" px={4} mt="4rem" position="relative">
            <Box position="fixed" top={100} right={4} zIndex={1000}>
                <ThemeToggle />
            </Box>

            <Box textAlign="center" border="2px solid" borderColor={accentColor} bg="black" p={{ base: 8, md: 16 }} maxW="lg">
                <Text color={accentColor} fontFamily="mono" fontSize={{ base: '5xl', md: '8xl' }} fontWeight="bold">
                    404
                </Text>
                <Heading as="h1" size="lg" color={textColor} fontFamily="mono" textTransform="uppercase" letterSpacing="wide" mb={4}>
                    ERROR: ROUTE_NOT_FOUND
                </Heading>
                <Text color={textColor} mb={8} fontSize={{ base: 'sm', md: 'md' }}>
                    The page you are looking for does not exist in this portfolio&apos;s namespace.
                </Text>
                <Button
                    as={RouterLink}
                    to="/"
                    borderRadius="0"
                    bg={accentColor}
                    color="black"
                    fontFamily="mono"
                    fontWeight="bold"
                    textTransform="uppercase"
                    _hover={{ opacity: 0.9 }}
                >
                    Return to Home
                </Button>
            </Box>
        </Box>
    );
};

export default NotFound;