import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorElement } from "./components";
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
import { landingPageLoader, productsPageLoader } from "./utils/loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing />, loader: landingPageLoader },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorElement />,
      },
      { path: "cart", element: <Cart />, errorElement: <ErrorElement /> },
      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <ErrorElement />,
      },
      { path: "error", element: <Error />, errorElement: <ErrorElement /> },
      { path: "landing", element: <Landing />, errorElement: <ErrorElement /> },
      { path: "orders", element: <Orders />, errorElement: <ErrorElement /> },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsPageLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/register", element: <Register />, errorElement: <Error /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
