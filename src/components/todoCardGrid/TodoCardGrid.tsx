import * as React from "react";
import { TodoArray } from "../../redux/features/ActiveTodoListStateSlice";
import TodoCard from "../todoCard/TodoCard";
import NewTodoCard from "../newTodoCard/NewTodoCard";
import { localizedText } from "../../localization/strings";

const TodoCardGrid = (todos: TodoArray) => {
  return (
    <div className="h-[calc(100%-4rem)] overflow-hidden">
      <div className="mt-10 grid gap-5 grid-cols-2">
        <div className="ml-3 mb-7">{localizedText.toDo}:</div>
        <div className="ml-3 mb-7">{localizedText.done}:</div>
      </div>
      <div className="grid gap-5 grid-cols-2 max-h-[calc(100%-100px)] overflow-auto">
        {/* To - Do Cards */}
        <div className="flex flex-col gap-5">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <NewTodoCard />
        </div>
        {/* Done Cards */}
        <div className="flex flex-col gap-5">
          <TodoCard checked />
          <TodoCard checked />
          <TodoCard checked />
          <TodoCard checked />
          <TodoCard checked />
          <TodoCard checked />
          <TodoCard checked />
        </div>
      </div>
    </div>
  );
};

export default TodoCardGrid;
