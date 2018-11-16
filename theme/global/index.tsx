import React from 'react';
import { normalize } from 'polished';

import { createGlobalStyle } from '../index';
import * as Elements from './elements';
import fonts from '../settings/fonts';

// Spread imported elements into a new object to add typings.
const globalElements: { [key: string]: React.ComponentClass } = { ...Elements };

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
    line-height: 1.6;
    font-family: ${fonts.primary};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: none;
  }
`;

export default () => (
  <React.Fragment>
    <GlobalStyle />
    {/* Iterate over all elements and return its components */}
    {Object.keys(globalElements).map(elementName => {
      const Component = globalElements[elementName];
      return <Component key={elementName} />;
    })}
  </React.Fragment>
);
