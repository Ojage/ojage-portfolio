// components/Nav/MobileNavigation.tsx
import React from 'react';
import { VStack, HStack, Text, Collapse } from '@chakra-ui/react';
import { useNavThemeConstants } from '../../hooks/useNavThemeConstants';
import { navigationItems, socialLinks, contactInfo } from '../../data/navData';
import { NavItem } from './NavItem';
import { SocialLink } from './SocialLink';

interface MobileNavigationProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
    isOpen,
    onClose
}) => {
    const { textColor, hoverColor } = useNavThemeConstants();

    return (
        <Collapse in={isOpen} animateOpacity>
            <VStack spacing={4} mt={3} display={{ base: "flex", md: "none" }}>
                {/* Navigation Items */}
                {navigationItems.map((item) => (
                    <NavItem
                        key={item.href}
                        navItem={item}
                        onClick={onClose}
                    />
                ))}

                {/* Email Contact */}
                <Text
                    as="a"
                    href={`mailto:${contactInfo.email}`}
                    color={textColor}
                    fontWeight="bold"
                    _hover={{ color: hoverColor }}
                    onClick={onClose}
                >
                    {contactInfo.email}
                </Text>

                {/* Social Links */}
                <HStack>
                    {socialLinks.map((socialLink, index) => (
                        <SocialLink key={index} socialLink={socialLink} />
                    ))}
                </HStack>
            </VStack>
        </Collapse>
    );
};