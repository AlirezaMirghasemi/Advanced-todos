import { createBrowserRouter } from "react-router";
import MainLayout from "./components/MainLayout";
import Todos from "./components/todos/Todos";

const TodosRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Todos />,
      },
    ],
  },
]);
export default TodosRouter;
