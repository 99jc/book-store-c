import "sanitize.css";
import { createGlobalStyle } from "styled-components";
import { ThemeName } from "./theme";

interface Props {
  ThemeName: ThemeName;
}

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    padding: 0;
    margin: 0;
    background-color: ${(props) => (props.ThemeName === "light" ? "white" : "black")}
  }

  h1 {
    margin: 0;
  }

  * {
    color: ${(props) => (props.ThemeName === "light" ? "black" : "white")}
  }
`;
