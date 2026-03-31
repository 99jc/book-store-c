import "sanitize.css";
import { createGlobalStyle } from "styled-components";
import { ThemeName } from "./theme";

interface Props {
  themeName: ThemeName;
}
export const GlobalStyle = createGlobalStyle<Props>`
  body {
    padding: 0;
    margin: 0;
    background-color: ${(props) => (props.themeName === "light" ? "white" : "black")};
    color: ${(props) => (props.themeName === "light" ? "black" : "white")};
  }

  /* 모든 요소가 부모(body)의 색상을 상속받도록 설정 */
  *, *::before, *::after {
    color: inherit; 
  }

  h1 {
    margin: 0;
  }
`;
