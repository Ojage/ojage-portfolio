import { useColorModeValue } from '@chakra-ui/react';

interface StyleConstants {
  bgColor: string;
  cardBg: string;
  accentCardBg: string;
  textColor: string;
  accentColor: string;
  secondaryAccent: string;
  tertiaryAccent: string;
}

export const useStylesConstants = (): StyleConstants => ({
  bgColor: useColorModeValue('#0a0a0a', '#000000'),
  cardBg: useColorModeValue('#1a1a1a', '#111111'),
  accentCardBg: useColorModeValue('#2d2d2d', '#1f1f1f'),
  textColor: useColorModeValue('#e0e0e0', '#f0f0f0'),
  accentColor: useColorModeValue('#00ff88', '#00ff88'),
  secondaryAccent: useColorModeValue('#ff6b35', '#ff6b35'),
  tertiaryAccent: useColorModeValue('#4ecdc4', '#4ecdc4')
});