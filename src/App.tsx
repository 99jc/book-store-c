import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./header/ThemeSwitcher";
import { BookStoreThemeProvier } from "./context/themeContext";

function App() {
  return (
    <>
      <BookStoreThemeProvier>
        <ThemeSwitcher />
        <Layout>
          <Home />
        </Layout>
      </BookStoreThemeProvier>
    </>
  );
}

export default App;
