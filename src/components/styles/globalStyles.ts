import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`${css`
  :root {
    /* color */
    --clr-white: #ffffff;
    --clr-black: #1a1a1f;
    --clr-green: #14d81c;
    --clr-red: #ea1919;
    --clr-dullRed: rgba(250, 242, 243, 1);
    --clr-overlay: #e4e3eb;
    --clr-primary-violet: #5d37f3;
    --clr-secondary-violet: #512be7;
    --clr-primary-darkGray: #404049;
    --clr-secondary-darkGray: #85858d;
    --clr-primary-neutralGray: #e4e3eb;
    --clr-secondary-neutralGray: #d9d8e0;
    --clr-primary-lightGray: #fcfcfd;
    --clr-secondary-lightGray: #f9f9fa;
    --clr-primary-lightishGray: #f3f2fa;

    /* font weight */
    --font-regular: 400;
    --font-medium: 500;
    --font-bold: 700;

    /* text-size */
    --text-base: 16px;
    --text-medium: 20px;
    --text-xs: 12px;
    --text-sm: 14px;
    --text-xl: 24px;
    --text-2xl: 32px;
    --text-xxl: 64px;

    /* radius */
    --rounded-xs: 8px;
    --rounded-sm: 12px;
    --rounded-medium: 24px;
    --rounded-large: 30px;
  }

  /* fonts */
  @font-face {
    font-family: 'Inter';
    src: url('/src/assets/fonts/inter.ttf') format(truetype);
  }
  @font-face {
    font-family: 'Firago';
    src: url('/src/assets/fonts/firago.ttf') format(truetype);
  }

  body {
    max-width: 1920px;
    margin: 0 auto;
    box-sizing: border-box;
    font-family:
      'Firago',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
  }

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }
`}`;
export default GlobalStyles;
