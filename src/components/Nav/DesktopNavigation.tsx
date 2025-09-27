import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { useNavThemeConstants } from '../../hooks/useNavThemeConstants';
import { navigationItems, socialLinks, contactInfo } from '../../data/navData';
import { NavItem } from './NavItem';
import { SocialLink } from './SocialLink';
import { useLocation } from 'react-router-dom';

export const DesktopNavigation: React.FC = () => {
    const { textColor, hoverColor } = useNavThemeConstants();
    const location = useLocation();

    const isActivePath = (path: string) => {
        // Exact match for home page, prefix match for others
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <Box display={{ base: "none", md: "flex" }} alignItems="center" gap={6}>
            {/* Navigation Items */}
            {navigationItems.map((item) => (
                <NavItem 
                    key={item.href} 
                    navItem={item} 
                    isActive={isActivePath(item.href)}
                />
            ))}

            {/* Email Contact */}
            <Text
                as="a"
                href={`mailto:${contactInfo.email}`}
                _hover={{ color: hoverColor }}
                fontWeight="bold"
                color={textColor}
                transition="color 0.2s ease-in-out"
            >
                {contactInfo.email}
            </Text>

            {/* Social Links */}
            <HStack spacing={2}>
                {socialLinks.map((socialLink, index) => (
                    <SocialLink key={index} socialLink={socialLink} />
                ))}
            </HStack>
        </Box>
    );
};