import { useBreakpoints } from '@vueuse/core';

export const breakpoints = useBreakpoints({
  'mobile-s': 321,
  'mobile-m': 376,
  'mobile-l': 426,
  tablet: 769,
  desktop: 1025,
  'desktop-m': 1441,
  'desktop-l': 2561,
});
