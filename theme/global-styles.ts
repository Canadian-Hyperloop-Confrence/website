import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.palette.whiteA};
    min-height: 100vh;
    overflow-x: hidden;
  }
  .typography-red {
    color: red;
  }
`;

export default GlobalStyle;
