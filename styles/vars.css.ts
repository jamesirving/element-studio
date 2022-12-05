import { createGlobalTheme } from '@vanilla-extract/css';
import { borderSize, borderStyle, borderRadius, shadows } from './border.css';
import { palette } from './palette.css';
import { opacity } from './opacity.css';
import { spacing } from './spacing.css';
import { fontWeight, fontSize } from './typography.css';
import { duration, timing } from './animation.css';

export const vars = createGlobalTheme(':root', {
  borderRadius,
  borderSize,
  borderStyle,
  fontSize,
  fontWeight,
  opacity,
  palette,
  shadows,
  spacing,
  duration,
  timing,
});
