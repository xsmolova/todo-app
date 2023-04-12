import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/appLayout/AppLayout";
import TodoListPage from "./pages/todoList/TodoListPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "todoList/:todoListId",
        element: <TodoListPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
