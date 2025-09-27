import React from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useNavThemeConstants } from '../../hooks/useNavThemeConstants';
import { NavItem as NavItemType } from '../../data/navData';

interface NavItemProps {
    navItem: NavItemType;
    isActive?: boolean;
    onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ navItem, isActive = false, onClick }) => {
    const { textColor, hoverColor, activeColor } = useNavThemeConstants();
    const { label, href, isExternal } = navItem;

    // Use active color if item is active, otherwise use normal text color
    const currentColor = isActive ? activeColor : textColor;

    if (isExternal) {
        return (
            <Text
                as="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                color={currentColor}
                fontWeight="bold"
                _hover={{ color: hoverColor }}
                transition="color 0.2s ease-in-out"
                borderBottom={isActive ? `2px solid ${activeColor}` : '2px solid transparent'}
                pb={1}
                onClick={onClick}
            >
                {label}
            </Text>
        );
    }

    return (
        <Text
            as={Link}
            to={href}
            color={currentColor}
            fontWeight="bold"
            _hover={{ color: hoverColor }}
            transition="color 0.2s ease-in-out"
            borderBottom={isActive ? `2px solid ${activeColor}` : '2px solid transparent'}
            pb={1}
            onClick={onClick}
        >
            {label}
        </Text>
    );
};