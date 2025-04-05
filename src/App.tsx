import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing />,  },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "error", element: <Error /> },
      { path: "landing", element: <Landing /> },
      { path: "orders", element: <Orders /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <SingleProduct /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
