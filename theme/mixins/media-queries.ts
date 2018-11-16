import { InterpolationValue } from 'styled-components';
import { css } from '../';

/**
 * Breakpoint variables
 **/
export const breakpointMobile = '320px';
export const breakpointMobilePlus = '480px';
export const breakpointTabletPortrait = '768px';
export const breakpointTabletLandscape = '1024px';
export const breakpointLaptop = '1200px';
export const breakpointDesktop = '1200px';

/**
 * Device named breakpoints, used for the mixins.
 **/
export const mobileStart = breakpointMobile;
export const mobileEnd = `${parseInt(breakpointMobilePlus, 10) - 1}px`;

export const mobilePlusStart = breakpointMobilePlus;
export const mobilePlusEnd = `${parseInt(breakpointTabletPortrait, 10) - 1}px`;

export const tabletPortraitStart = breakpointTabletPortrait;
export const tabletPortraitEnd = `${parseInt(breakpointTabletLandscape, 10) - 1}px`;

export const tabletLandscapeStart = breakpointTabletLandscape;
export const tabletlandscapeEnd = `${parseInt(breakpointLaptop, 10) - 1}px`;

export const laptopStart = breakpointLaptop;
export const laptopEnd = `${parseInt(breakpointDesktop, 10) - 1}px`;

export const desktopStart = breakpointDesktop;

/**
 * Media queries targeting a device and smaller
 **/

export const screenMobileAndSmaller = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (max-width: ${mobileEnd}) {
      ${strings};
    }
  `;

export const screenMobilePlusAndSmaller = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (max-width: ${mobilePlusEnd}) {
      ${strings};
    }
  `;

export const screenTabletPortraitAndSmaller = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (max-width: ${tabletPortraitEnd}) {
      ${strings};
    }
  `;

export const screenTabletLandscapeAndSmaller = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (max-width: ${tabletlandscapeEnd}) {
      ${strings};
    }
  `;

export const screenLaptopAndSmaller = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (max-width: ${laptopEnd}) {
      ${strings};
    }
  `;

/**
 * Media queries targeting a device and bigger
 **/

export const screenMobilePlusAndBigger = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (min-width: ${mobilePlusStart}) {
      ${strings};
    }
  `;

export const screenTabletPortraitAndBigger = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (min-width: ${tabletPortraitStart}) {
      ${strings};
    }
  `;

export const screenTabletLandscapeAndBigger = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (min-width: ${tabletLandscapeStart}) {
      ${strings};
    }
  `;

export const screenLaptopAndBigger = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (min-width: ${laptopStart}) {
      ${strings};
    }
  `;

export const screenDesktopAndBigger = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (min-width: ${desktopStart}) {
      ${strings};
    }
  `;

/**
 * Media queries targeting a device and bigger
 * - - screen-mobile-only? > use screen-mobile-and-smaller
 * - - screen-desktop-only? > use screen-desktop-and-bigger
 **/

export const screenMobilePlusOnly = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (min-width: ${mobilePlusStart}) and (max-width: ${mobilePlusEnd}) {
      ${strings};
    }
  `;

export const screenTabletPortraitOnly = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (min-width: ${tabletPortraitStart}) and (max-width: ${tabletPortraitEnd}) {
      ${strings};
    }
  `;

export const screenTabletLandscapeOnly = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (min-width: ${tabletlandscapeEnd}) and (max-width: ${tabletlandscapeEnd}) {
      ${strings};
    }
  `;

// Both tablet portrait and landscape
export const screenTabletOnly = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (min-width: ${tabletPortraitStart}) and (max-width: ${tabletlandscapeEnd}) {
      ${strings};
    }
  `;

export const screenLaptopOnly = (strings: InterpolationValue[]) =>
  css`
    @media only screen and (min-width: ${laptopStart}) and (max-width: ${laptopEnd}) {
      ${strings};
    }
  `;

/**
 * Custom size
 */
export const screenCustomAndSmaller = (size: string, strings: InterpolationValue[]) =>
  css`
    @media only screen and (max-width: ${size}) {
      ${strings};
    }
  `;
