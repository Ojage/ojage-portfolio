// components/Nav/MobileNavigation.tsx
import React, { useEffect } from 'react';
import { VStack, HStack, Text, Collapse } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
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
    const { pathname } = useLocation();

    useEffect(() => {
        if (isOpen) onClose();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const isActivePath = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <Collapse in={isOpen} animateOpacity>
            <VStack spacing={4} mt={3} display={{ base: "flex", md: "none" }} id="mobile-menu">
                {/* Navigation Items */}
                {navigationItems.map((item) => (
                    <NavItem
                        key={item.href}
                        navItem={item}
                        isActive={isActivePath(item.href)}
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