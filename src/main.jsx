import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { RouterProvider } from "react-router/dom";
import TodosRouter from "./TodosRouter.jsx";
import { Provider } from "react-redux";
import store from "./store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={TodosRouter} />
    </Provider>
  </StrictMode>
);
