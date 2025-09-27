import { useThemeConstants } from './useThemeConstants';

export const useStylesConstants = () => {
  // This hook now delegates to the new useThemeConstants
  return useThemeConstants();
};