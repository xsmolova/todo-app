import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/appLayout/AppLayout";
import TodoListPage from "./pages/todoList/TodoListPage";
import HomePage from "./pages/home/HomePage";
import NewTodoListPage from "./pages/newTodoList/NewTodoListPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/new-todo-list",
        element: <NewTodoListPage />,
      },
      {
        path: "todo-list/:id",
        element: <TodoListPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
