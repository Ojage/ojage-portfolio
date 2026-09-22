import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

const getInitialTheme = (): Theme => {
    const rootTheme = typeof document !== 'undefined'
        ? document.documentElement.getAttribute('data-theme')
        : null;
    if (rootTheme === 'light' || rootTheme === 'dark') return rootTheme;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

    const prefersLight = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);
    const [announcement, setAnnouncement] = useState('');

    const toggleTheme = () => {
        setTheme(prev => {
            const next = prev === 'light' ? 'dark' : 'light';
            setAnnouncement(`${next === 'dark' ? 'Dark' : 'Light'} theme activated`);
            return next;
        });
    };

    const isDark = theme === 'dark';

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);

        // Keep the browser chrome color in sync with the active theme
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) {
            meta.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff');
        }
    }, [theme]);

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
                {children}
            </ThemeContext.Provider>
            {/* Visually hidden live region announcing theme changes to screen readers */}
            <span
                role="status"
                aria-live="polite"
                style={{
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden',
                    clip: 'rect(0 0 0 0)',
                    whiteSpace: 'nowrap',
                    clipPath: 'inset(50%)',
                }}
            >
                {announcement}
            </span>
        </>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};