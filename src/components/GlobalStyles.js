import { createGlobalStyle } from "styled-components";
import { backgroundColor, normalGrey } from "../styles/colors";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${backgroundColor};
    color: ${normalGrey}
  };
  * {
    &before {
      box-sizing: inherit;
    };
    &after {
      box-sizing: inherit;
    };
  }
`;

export default GlobalStyles;
