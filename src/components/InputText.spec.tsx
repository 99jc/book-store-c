import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvier } from "../context/themeContext";
import Button from "./Button";
import InputText from "./InputText";
import React from "react";

describe("Title 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    render(
      <BookStoreThemeProvier>
        <InputText placeholder="여기에 입력" />
      </BookStoreThemeProvier>,
    );

    expect(screen.getByPlaceholderText("여기에 입력")).toBeInTheDocument();
  });

  it("forwardRef 테스트", () => {
    const ref = React.createRef<HTMLInputElement>();
    const { container } = render(
      <BookStoreThemeProvier>
        <InputText placeholder="여기에 입력" ref={ref} />
      </BookStoreThemeProvier>,
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
