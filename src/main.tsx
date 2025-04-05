import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";

import App from "./App.tsx";
import { store } from "./redux-store.ts";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
