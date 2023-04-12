import * as React from "react";
import SearchInput from "../searchInput/SearchInput";
import SidebarTodoList from "../sidebarTodoList/SidebarTodoList";
import { localizedText } from "../../localization/strings";
import { useGetTodoListsQuery } from "../../redux/features/TodoListsStateSlice";
import Loader from "../loader/Loader";

const Sidebar = () => {
  const { data, error, isLoading } = useGetTodoListsQuery(1);

  console.log(data);
  return (
    <div className="bg-accent h-screen p-4 pl-5 pr-5 w-96 max-w-96 overflow-hidden">
      <h1 className="ml-4">{localizedText.myTodos}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button className="btn btn-block mt-6 bg-primary hover:bg-primary-focus border-none text-white normal-case justify-start ">
            {`+ ${localizedText.buttons.addTodoList}`}
          </button>
          <SearchInput />

          <h3 className="mt-10 ml-4">{localizedText.projects}</h3>
        </>
      )}
      <div className="divider"></div>
      <SidebarTodoList todoLists={data} />
    </div>
  );
};

export default Sidebar;
