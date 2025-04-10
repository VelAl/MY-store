import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { router } from "./appRouter.tsx";
import { store } from "./redux-store.ts";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ReduxProvider store={store}>
    <RouterProvider router={router} />
    <Toaster richColors duration={4000} />
  </ReduxProvider>
);
