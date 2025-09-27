import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { useNavThemeConstants } from '../../hooks/useNavThemeConstants';
import { navigationItems, socialLinks, contactInfo } from '../../data/navData';
import { NavItem } from './NavItem';
import { SocialLink } from './SocialLink';

export const DesktopNavigation: React.FC = () => {
    const { textColor, hoverColor } = useNavThemeConstants();

    return (
        <Box display={{ base: "none", md: "flex" }} alignItems="center" gap={6}>
            {/* Navigation Items */}
            {navigationItems.map((item) => (
                <NavItem key={item.href} navItem={item} />
            ))}

            {/* Email Contact */}
            <Text
                as="a"
                href={`mailto:${contactInfo.email}`}
                _hover={{ color: hoverColor }}
                fontWeight="bold"
                color={textColor}
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