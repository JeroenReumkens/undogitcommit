import colors from './colors';
import fonts from './fonts';
import grid from './grid';
import spacing from './spacing';
import transitions from './transitions';

import * as ThemeInterfaces from './models';

export interface ThemeInterface {
  colors: ThemeInterfaces.Colors;
  fonts: ThemeInterfaces.Fonts;
  grid: ThemeInterfaces.Grid;
  spacing: ThemeInterfaces.Spacing;
  transitions: ThemeInterfaces.Transitions;
}

export default {
  colors,
  fonts,
  grid,
  spacing,
  transitions,
} as ThemeInterface;
