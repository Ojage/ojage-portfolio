import React from 'react';
import { IconButton, Icon } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import { useThemeConstants } from '../../hooks/useThemeConstants';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const { textColor, accentColor } = useThemeConstants();

    return (
        <IconButton
            aria-label="Toggle theme"
            icon={<Icon as={theme === 'light' ? FaMoon : FaSun} />}
            onClick={toggleTheme}
            variant="outline"
            borderColor={accentColor}
            color={textColor}
            _hover={{
                bg: accentColor,
                color: "black"
            }}
            borderRadius="0"
            size="md"
        />
    );
};