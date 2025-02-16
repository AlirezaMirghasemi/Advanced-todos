import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { RouterProvider } from "react-router/dom";
import TodosRouter from "./TodosRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={TodosRouter} />
  </StrictMode>
);
