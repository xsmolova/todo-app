import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BiClipboard, BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import SearchInput from "../searchInput/SearchInput";
import CustomButton from "../customButton/CustomButton";
import SidebarTodoList from "../sidebarTodoList/SidebarTodoList";
import { localizedText } from "../../localization/strings";
import { useGetTodoListsQuery } from "../../redux/api/apiSlice";
import { removeActiveTodoList } from "../../redux/features/ActiveTodoListStateSlice";
import { setSearchInput } from "../../redux/features/FilterStateSlice";

import Loader from "../loader/Loader";

// Sidebar component:
//  - button to add a new todo list
//  - search input field (search all todos)
//  - listed todo lists - scrollable

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { data, isLoading } = useGetTodoListsQuery({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <BiMenu
        className="fixed top-7 left-4 md:hidden ml-4 text-2xl hover:text-primary-focus"
        onClick={() => setShowSidebar(true)}
      />
      <div
        className={`bg-accent h-screen p-4 pl-5 pr-5 md:w-96 md:max-w-96 md:relative absolute overflow-hidden z-10 ${
          showSidebar ? " w-screen max-w-screen" : "hidden md:block"
        }`}
      >
        <Link
          to="/"
          onClick={() => {
            setShowSidebar(false);
            dispatch(removeActiveTodoList());
          }}
          className="text-black no-underline hover:text-primary-focus flex items-center"
        >
          <BiClipboard className="ml-4 text-2xl md:text-3xl" />
          <h1 className="ml-3 text-3xl md:text-4xl">{localizedText.myTodos}</h1>
        </Link>
        <div>
          <BiX
            className="fixed top-5 right-4 md:hidden ml-4 text-2xl hover:text-primary-focus"
            onClick={() => setShowSidebar(false)}
          />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Link to="/new-todo-list" onClick={() => setShowSidebar(false)}>
              <CustomButton
                children={`+ ${localizedText.buttons.addTodoList}`}
              />
            </Link>
            <SearchInput
              setValue={(value: string) => {
                setShowSidebar(false);
                dispatch(setSearchInput({ search: value }));
                navigate("/");
              }}
            />

            <h3 className="mt-10 ml-4">{localizedText.projects}</h3>
          </>
        )}
        <div className="divider"></div>
        <SidebarTodoList
          hideSidebar={() => setShowSidebar(false)}
          todoLists={data}
        />
      </div>
    </>
  );
};

export default Sidebar;
