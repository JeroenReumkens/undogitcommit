import * as styledComponents from 'styled-components';

import { ThemeInterface } from './settings';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export * from './mixins';
export * from './settings';
export default styled;
