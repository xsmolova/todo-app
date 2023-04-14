import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BiClipboard } from "react-icons/bi";
import { Link } from "react-router-dom";
import SearchInput from "../searchInput/SearchInput";
import CustomButton from "../customButton/CustomButton";
import SidebarTodoList from "../sidebarTodoList/SidebarTodoList";
import { localizedText } from "../../localization/strings";
import { useGetTodoListsQuery } from "../../redux/api/apiSlice";
import { removeActiveTodoList } from "../../redux/features/ActiveTodoListStateSlice";
import Loader from "../loader/Loader";

const Sidebar = () => {
  const [searchInput, setSearchInput] = useState("");
  const { data, error, isLoading } = useGetTodoListsQuery({});
  const dispatch = useDispatch();

  return (
    <div className="bg-accent h-screen p-4 pl-5 pr-5 w-96 max-w-96 overflow-hidden">
      <Link
        to="/"
        onClick={() => dispatch(removeActiveTodoList())}
        className="text-black no-underline hover:text-primary-focus flex items-center"
      >
        <BiClipboard className="ml-4 text-3xl" />
        <h1 className="ml-4">{localizedText.myTodos}</h1>
      </Link>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Link to="/new-todo-list">
            <CustomButton children={`+ ${localizedText.buttons.addTodoList}`} />
          </Link>
          <SearchInput setValue={(value: string) => setSearchInput(value)} />

          <h3 className="mt-10 ml-4">{localizedText.projects}</h3>
        </>
      )}
      <div className="divider"></div>
      <SidebarTodoList todoLists={data} />
    </div>
  );
};

export default Sidebar;
