import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContext } from "styled-components";
import { getTheme } from "./style/theme";

async function mountApp() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mock/browser");
    await worker.start();
  }

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
  );
  root.render(
    <React.StrictMode>
      <ThemeContext.Provider value={getTheme("light")}>
        <App />
      </ThemeContext.Provider>
    </React.StrictMode>,
  );
}
mountApp();
