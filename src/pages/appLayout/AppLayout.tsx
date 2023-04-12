import { Outlet } from "react-router-dom";
import * as React from "react";
import Loader from "../../components/loader/Loader";
import { useGetTodoListByIDQuery } from "../../redux/features/TodoListsStateSlice";

const AppLayout = () => {
  const { data, error, isLoading } = useGetTodoListByIDQuery(1);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div>sidebar</div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default AppLayout;
