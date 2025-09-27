import { useThemeConstants } from './useThemeConstants';

interface NavThemeConstants {
    bgColor: string;
    textColor: string;
    hoverColor: string;
    borderColor: string;
    shadowColor: string;
    activeColor: string;
}

export const useNavThemeConstants = (): NavThemeConstants => {
    const theme = useThemeConstants();

    // Use theme constants with nav-specific adjustments
    return {
        bgColor: theme.isDark ? "#1a1a1a" : "#cbe7d6ff", // Using cardBg variants
        textColor: theme.textColor,
        hoverColor: theme.accentColor, // Using main accent color for hover
        borderColor: theme.accentColor, // Using main accent color for borders
        shadowColor: theme.isDark ? "rgba(0, 255, 136, 0.1)" : "rgba(49, 130, 206, 0.15)", // Accent-based shadows
        activeColor: theme.accentColor, // Using accent color for active state
    };
};