import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { BookStoreThemeProvier } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: (
      <Layout>
        <div>도서 목록</div>
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <>
      <BookStoreThemeProvier>
        <RouterProvider router={router} />
      </BookStoreThemeProvier>
    </>
  );
}

export default App;
