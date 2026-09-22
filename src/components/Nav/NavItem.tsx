import React from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavThemeConstants } from '../../hooks/useNavThemeConstants';
import { NavItem as NavItemType } from '../../data/navData';

interface NavItemProps {
    navItem: NavItemType;
    isActive?: boolean;
    onClick?: () => void;
    animated?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
    navItem,
    isActive = false,
    onClick,
    animated = false,
}) => {
    const { textColor, hoverColor, activeColor } = useNavThemeConstants();
    const { label, href, isExternal } = navItem;

    // Use active color if item is active, otherwise use normal text color
    const currentColor = isActive ? activeColor : textColor;

    const underline = animated ? (
        isActive && (
            <motion.span
                layoutId="nav-underline"
                transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: 2,
                    background: activeColor,
                }}
            />
        )
    ) : (
        <span
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: -2,
                height: 2,
                background: isActive ? activeColor : 'transparent',
                transition: 'background 0.2s ease',
            }}
        />
    );

    const sharedProps = {
        color: currentColor,
        fontWeight: "bold" as const,
        _hover: { color: hoverColor },
        transition: "color 0.2s ease-in-out",
        position: "relative" as const,
        display: animated ? ("inline-block" as const) : ("block" as const),
        "aria-current": isActive ? ("page" as const) : undefined,
        pb: 1,
        onClick,
    };

    return (
        <Text
            as={isExternal ? 'a' : Link}
            {...(isExternal ? { href, target: '_blank', rel: 'noopener noreferrer' } : { to: href })}
            {...sharedProps}
        >
            {label}
            {underline}
        </Text>
    );
};