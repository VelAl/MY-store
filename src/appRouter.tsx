import { createBrowserRouter } from "react-router-dom";

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
import { appPaths } from "./utils";
import {
  landingPageLoader,
  loginRequest,
  productsPageLoader,
  registerRequest,
  singleProductLoader,
} from "./utils/requests";

export const router = createBrowserRouter([
  {
    path: appPaths.home,
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing />, loader: landingPageLoader },
      {
        path: appPaths.about,
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: appPaths.cart,
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: appPaths.checkout,
        element: <Checkout />,
        errorElement: <ErrorElement />,
      },
      {
        path: appPaths.error,
        element: <Error />,
        errorElement: <ErrorElement />,
      },
      {
        path: appPaths.landing,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: appPaths.orders,
        element: <Orders />,
        errorElement: <ErrorElement />,
      },
      {
        path: appPaths.products,
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsPageLoader,
      },
      {
        path: `${appPaths.products}/:id`,
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
    ],
  },
  {
    path: appPaths.login,
    element: <Login />,
    errorElement: <Error />,
    action: loginRequest,
  },
  {
    path: appPaths.register,
    element: <Register />,
    errorElement: <Error />,
    action: registerRequest,
  },
]);
