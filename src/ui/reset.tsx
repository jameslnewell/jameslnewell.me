import {createGlobalStyle} from 'styled-components';

export const Reset = createGlobalStyle`

  /* START: reset styles */

  html, body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  /* END: reset styles */

  /* START: global styles */

  body {
    color: #444;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen-Sans,
      Ubuntu,
      Cantarell,
      "Helvetica Neue",
      sans-serif
    ;
  }

  /* END: global styles */

`;
