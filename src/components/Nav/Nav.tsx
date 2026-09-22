// components/Nav/Nav.tsx
import React, { useEffect, useState } from 'react';
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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            as="nav"
            aria-label="Main navigation"
            bg={bgColor}
            px={4}
            py={scrolled ? 1.5 : 2}
            w="100vw"
            pos="fixed"
            top={0}
            left={0}
            zIndex={1000}
            className={scrolled ? 'nav-scrolled' : undefined}
            borderBottom={`4px double ${borderColor}`}
            boxShadow={`0 2px 10px ${shadowColor}`}
            fontFamily="'Courier New', monospace"
            transition="padding 0.25s ease, background 0.25s ease, box-shadow 0.25s ease"
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