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
        <Box
            as="ul"
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            gap={6}
            listStyleType="none"
            style={{ margin: 0, padding: 0 }}
        >
            {/* Navigation Items */}
            {navigationItems.map((item) => (
                <NavItem 
                    key={item.href} 
                    navItem={item} 
                    isActive={isActivePath(item.href)}
                    animated
                />
            ))}

            {/* Email Contact */}
            <Box as="li">
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
            </Box>

            {/* Social Links */}
            <Box as="li">
                <HStack spacing={2}>
                    {socialLinks.map((socialLink, index) => (
                        <SocialLink key={index} socialLink={socialLink} />
                    ))}
                </HStack>
            </Box>
        </Box>
    );
};