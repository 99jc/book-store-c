import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvier } from "../../context/themeContext";
import Button from "./Button";
describe("Title 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    render(
      <BookStoreThemeProvier>
        <Button size="large" scheme="primary">
          버튼
        </Button>
      </BookStoreThemeProvier>,
    );

    expect(screen.getByText("버튼")).toBeInTheDocument();
  });

  it("size props 적용", () => {
    const { container } = render(
      <BookStoreThemeProvier>
        <Button size="large" scheme="primary">
          버튼
        </Button>
      </BookStoreThemeProvier>,
    );

    expect(screen.getByRole("button")).toHaveStyle({ fontSize: "2rem" });
  });

  it("color props 적용", () => {
    const { container } = render(
      <BookStoreThemeProvier>
        <Button size="large" scheme="primary">
          버튼
        </Button>
      </BookStoreThemeProvier>,
    );
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: "midnightblue",
    });
  });
});
