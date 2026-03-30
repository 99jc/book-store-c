// src/styled.d.ts
import "styled-components";
import { Theme } from "./style/theme"; // Theme 인터페이스가 정의된 경로

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
