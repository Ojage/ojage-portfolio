import { useTheme } from '../contexts/ThemeContext';

interface ThemeConstants {
  isDark: boolean;
  bgColor: string;
  cardBg: string;
  accentCardBg: string;
  textColor: string;
  accentColor: string;
  secondaryAccent: string;
  tertiaryAccent: string;
}

export const useThemeConstants = (): ThemeConstants => {
  const { isDark } = useTheme();

  const darkTheme = {
    isDark: true,
    bgColor: "#0a0a0a",
    cardBg: "#1a1a1a",
    accentCardBg: "#262626",
    textColor: "#ffffff",
    accentColor: "#00ff88",
    secondaryAccent: "#ff6b6b",
    tertiaryAccent: "#4ecdc4",
  };

  const lightTheme = {
    isDark: false,
    bgColor: "#ffffff",
    cardBg: "#f8f9fa",
    accentCardBg: "#e9ecef",
    textColor: "#212529",
    accentColor: "#28a745",
    secondaryAccent: "#dc3545",
    tertiaryAccent: "#17a2b8",
  };

  return isDark ? darkTheme : lightTheme;
};