import { useMemo } from 'react';
import { useThemeConstants } from './useThemeConstants';
export const useAboutThemeConstants = () => {
    const theme = useThemeConstants();

    return useMemo(() => {
        return {
            // Page-level colors
            pageBg: theme.cardBg, 

            
            cardBg: theme.cardBg,
            cardBorder: theme.accentColor,
            cardShadow: `0 0 0 2px ${theme.accentColor}`,

            // Text colors
            primaryText: theme.textColor,
            secondaryText: theme.isDark ? '#a0aec0' : '#4a5568', // Keeping some specific shades
            mutedText: '#718096', // Neutral color that works in both themes

            // Accent colors
            accent: theme.accentColor,
            accentHover: theme.isDark ? '#00cc6a' : '#2c5aa0', // Adjusted hover states
            accentLight: theme.isDark ? 'rgba(0, 255, 136, 0.1)' : 'rgba(49, 130, 206, 0.1)',

            // Secondary accents
            secondaryAccent: theme.secondaryAccent,
            tertiaryAccent: theme.tertiaryAccent,

            // Section colors
            headerGradient: theme.isDark
                ? 'linear(to-r, #00ff88, #4ecdc4)'
                : 'linear(to-r, #3182ce, #63b3ed)',
            sectionHeaderText: theme.accentColor,

            // Badge colors
            badgeBg: theme.accentColor,
            badgeText: theme.isDark ? '#000000' : '#ffffff',
            badgeBorder: theme.accentColor,

            // Hover states
            cardHover: theme.isDark ? '#252525' : '#f7fafc',

            // Contact colors
            contactIcon: theme.tertiaryAccent,
            contactText: theme.isDark ? '#e2e8f0' : '#4a5568',

            // Divider
            divider: theme.isDark ? '#333333' : '#e2e8f0',

            // Timeline colors
            timelineDot: theme.accentColor,
            timelineLine: theme.isDark ? '#333333' : '#e2e8f0',
        };
    }, [theme]);
};