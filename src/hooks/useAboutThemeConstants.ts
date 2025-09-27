import { useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const useAboutThemeConstants = () => {
    const { theme } = useTheme();

    return useMemo(() => {
        const isDark = theme === 'dark';

        return {
            // Page-level colors (matching your home page)
            pageBg: isDark ? '#0a0a0a' : '#f8f9fa',

            // Card colors - boxy style like ProjectCard
            cardBg: isDark ? '#1a1a1a' : '#ffffff',
            cardBorder: isDark ? '#00ff88' : '#3182ce', // Accent borders like ProjectCard
            cardShadow: isDark
                ? '0 0 0 2px #00ff88' // Flat border shadow like ProjectCard
                : '0 0 0 2px #3182ce',

            // Text colors
            primaryText: isDark ? '#ffffff' : '#2d3748',
            secondaryText: isDark ? '#a0aec0' : '#4a5568',
            mutedText: isDark ? '#718096' : '#718096',

            // Accent colors (matching your theme system)
            accent: isDark ? '#00ff88' : '#3182ce',
            accentHover: isDark ? '#00cc6a' : '#2c5aa0',
            accentLight: isDark ? 'rgba(0, 255, 136, 0.1)' : 'rgba(49, 130, 206, 0.1)',

            // Secondary accents (like ProjectCard)
            secondaryAccent: isDark ? '#ff6b6b' : '#e53e3e',
            tertiaryAccent: isDark ? '#4ecdc4' : '#38b2ac',

            // Section colors
            headerGradient: isDark
                ? 'linear(to-r, #00ff88, #4ecdc4)'
                : 'linear(to-r, #3182ce, #63b3ed)',
            sectionHeaderText: isDark ? '#00ff88' : '#3182ce',

            // Badge colors - matching ProjectCard style
            badgeBg: isDark ? '#00ff88' : '#3182ce',
            badgeText: isDark ? '#000000' : '#ffffff',
            badgeBorder: isDark ? '#00ff88' : '#3182ce',

            // Hover states
            cardHover: isDark ? '#252525' : '#f7fafc',

            // Contact colors
            contactIcon: isDark ? '#4ecdc4' : '#3182ce',
            contactText: isDark ? '#e2e8f0' : '#4a5568',

            // Divider - subtle like ProjectCard
            divider: isDark ? '#333333' : '#e2e8f0',

            // Timeline colors
            timelineDot: isDark ? '#00ff88' : '#3182ce',
            timelineLine: isDark ? '#333333' : '#e2e8f0',
        };
    }, [theme]);
};