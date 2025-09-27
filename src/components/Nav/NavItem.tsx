import React from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useNavThemeConstants } from '../../hooks/useNavThemeConstants';
import { NavItem as NavItemType } from '../../data/navData';

interface NavItemProps {
    navItem: NavItemType;
    onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ navItem, onClick }) => {
    const { textColor, hoverColor } = useNavThemeConstants();
    const { label, href, isExternal } = navItem;

    if (isExternal) {
        return (
            <Text
                as="a"
                href={href}
                target="_blank"
                rel="noreferrer"
                color={textColor}
                fontWeight="bold"
                _hover={{ color: hoverColor }}
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
            color={textColor}
            fontWeight="bold"
            _hover={{ color: hoverColor }}
            onClick={onClick}
        >
            {label}
        </Text>
    );
};