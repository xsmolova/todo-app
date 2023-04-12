import React from "react";
import { TodoList } from "../../redux/features/TodoListsStateSlice";
import { localizedText } from "../../localization/strings";
//todoList: TodoList
const TodoListPage = () => {
  return (
    <div>
      <h2>Todo Title</h2>

      <div className="mt-3">
        {localizedText.formatString(localizedText.xMoreOnTodoList, <b>3</b>)}
      </div>
      <div className="mt-10 grid gap-5 grid-cols-2">
        <div className="ml-3 mb-7">{localizedText.toDo}:</div>
        <div className="ml-3 mb-7">{localizedText.done}:</div>
      </div>
      <div className=" grid gap-5 grid-cols-2">
        <div className="grid h-20 flex-grow card bg-secondary hover:bg-secondary-focus rounded-box place-items-center">
          Card
        </div>
        <div className="grid h-20 flex-grow card bg-secondary hover:bg-secondary-focus rounded-box place-items-center">
          Card
        </div>
        <div className="grid h-20 flex-grow card bg-secondary hover:bg-secondary-focus rounded-box place-items-center">
          Card
        </div>
        <div className="grid h-20 flex-grow card bg-secondary hover:bg-secondary-focus rounded-box place-items-center">
          Card
        </div>
      </div>
    </div>
  );
};

export default TodoListPage;
