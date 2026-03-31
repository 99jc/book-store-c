import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { BookStoreThemeProvier } from "./context/themeContext";

function App() {
  return (
    <>
      <BookStoreThemeProvier>
        <Layout>
          <Home />
        </Layout>
      </BookStoreThemeProvier>
    </>
  );
}

export default App;
