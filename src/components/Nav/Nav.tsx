// components/Nav/Nav.tsx
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useNavThemeConstants } from '../../hooks/useNavThemeConstants';
import { useMobileMenu } from '../../hooks/useMobileMenu';

// Components
import { BrandLogo } from './BrandLogo';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { MobileMenuToggle } from './MobileMenuToggle';

const Nav: React.FC = () => {
    const { bgColor, borderColor, shadowColor } = useNavThemeConstants();
    const mobileMenu = useMobileMenu();

    return (
        <Box
            bg={bgColor}
            px={4}
            py={2}
            w="100vw"
            pos="fixed"
            top={0}
            left={0}
            zIndex={1000}
            borderBottom={`4px double ${borderColor}`}
            boxShadow={`0 2px 10px ${shadowColor}`}
            fontFamily="'Courier New', monospace"
        >
            {/* Main Navigation Bar */}
            <Flex alignItems="center" justifyContent="space-between">
                {/* Brand Logo */}
                <BrandLogo />

                {/* Desktop Navigation */}
                <DesktopNavigation />

                {/* Mobile Menu Toggle */}
                <MobileMenuToggle
                    isOpen={mobileMenu.isOpen}
                    onToggle={mobileMenu.toggle}
                />
            </Flex>

            {/* Mobile Navigation Menu */}
            <MobileNavigation
                isOpen={mobileMenu.isOpen}
                onClose={mobileMenu.close}
            />
        </Box>
    );
};

export default Nav;