import * as React from "react";
import { TodoListsArray } from "../../redux/features/TodoListsStateSlice";
import { Link } from "react-router-dom";

const SidebarTodoList = ({ todoLists }: TodoListsArray) => {
  console.log(todoLists);
  return (
    <>
      {todoLists?.map((todoList) => (
        <div key={todoList.id} className="mt-3">
          <Link
            to={`todoList/${todoList.id}`}
            className="btn btn-block gap-2 bg-secondary hover:bg-secondary-focus font-normal relative text-sm border-none text-black normal-case justify-between"
          >
            <div className="w-4/5 text-ellipsis text-left overflow-hidden">
              {todoList.title}
            </div>
            <div className="badge badge-primary text-normal text-white absolute right-3">
              {todoList.todos?.length}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default SidebarTodoList;
