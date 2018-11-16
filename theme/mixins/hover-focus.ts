import { InterpolationValue } from 'styled-components';
import { css, screenTabletLandscapeAndBigger } from '../';

export const hoverFocus = (strings: InterpolationValue[]) =>
  css`
    ${screenTabletLandscapeAndBigger(css`
      &:hover,
      &:focus {
        ${strings};
      }
    `)};
  `;
