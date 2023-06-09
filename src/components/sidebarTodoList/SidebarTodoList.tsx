import * as React from "react";
import { useDispatch } from "react-redux";
import { setActiveTodoList } from "../../redux/features/ActiveTodoListStateSlice";
import { Link } from "react-router-dom";
import { TodoList } from "../../redux/features/Interfaces";

interface Props {
  hideSidebar: () => void;
  todoLists: TodoList[];
}
// Sidebar todo lists with number of todos
const SidebarTodoList = ({ hideSidebar, todoLists }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="overflow-auto h-[calc(100%-19rem)]">
      {todoLists?.map((todoList) => (
        <div key={todoList.id} className="mt-3">
          <Link
            to={`todo-list/${todoList.id}`}
            onClick={() => {
              hideSidebar();
              dispatch(setActiveTodoList(todoList));
            }}
            className="btn btn-block gap-2 bg-secondary hover:bg-secondary-focus font-normal relative text-sm border-none text-black normal-case justify-between"
          >
            <div className="w-4/5 text-ellipsis text-left overflow-hidden">
              {todoList.title}
            </div>
            <div className="badge badge-primary font-semibold text-white absolute right-3">
              {todoList.todos?.length}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SidebarTodoList;
