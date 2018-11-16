import { createGlobalStyle, css, hoverFocus } from 'theme';

export const Anchor = createGlobalStyle`
  a {
    font-size: 14px;
    color: ${props => props.theme.colors.grayD20};
    font-weight: 500;
    text-decoration: none;
    transition: color ${props => props.theme.transitions.base};

    ${props =>
      hoverFocus(css`
        color: ${props.theme.colors.primary};
      `)}
  }
`;
