import { useTheme } from '../contexts/ThemeContext';

interface NavThemeConstants {
    bgColor: string;
    textColor: string;
    hoverColor: string;
    borderColor: string;
    shadowColor: string;
}

export const useNavThemeConstants = (): NavThemeConstants => {
    const { isDark } = useTheme();

    const darkTheme = {
        bgColor: "#1a202c",
        textColor: "white",
        hoverColor: "#ff8a65",
        borderColor: "#ff4c60",
        shadowColor: "rgba(0,0,0,0.08)",
    };

    const lightTheme = {
        bgColor: "#fef4e8",
        textColor: "#1a202c",
        hoverColor: "#ff4c60",
        borderColor: "#ff4c60",
        shadowColor: "rgba(0,0,0,0.15)",
    };

    return isDark ? darkTheme : lightTheme;
};