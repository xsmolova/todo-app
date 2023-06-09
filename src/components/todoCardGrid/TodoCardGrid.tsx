import * as React from "react";
import { Todo } from "../../redux/features/Interfaces";
import TodoCard from "../todoCard/TodoCard";
import { localizedText } from "../../localization/strings";

interface Props {
  doneTodos?: Todo[];
  undoneTodos?: Todo[];
}

// Grid with todos, separated into to-do and done sections
const TodoCardGrid = ({ doneTodos, undoneTodos }: Props) => {
  return (
    <div className="h-[calc(100%-4rem)] overflow-hidden">
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="ml-3 mb-7 hidden md:block">{localizedText.toDo}:</div>
        <div className="ml-3 mb-7 hidden md:block">{localizedText.done}:</div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 max-h-[calc(100%-100px)] overflow-auto">
        {/* Undone */}
        <div className="flex flex-col gap-5">
          <div className="ml-3 mb-7 md:hidden">{localizedText.toDo}:</div>
          {undoneTodos?.map((todo) => {
            return (
              <TodoCard
                key={`todo-${todo.id}`}
                todo={todo}
                activeTodoId={todo.todoListId}
              />
            );
          })}
        </div>
        {/* Done */}
        <div className="flex flex-col gap-5">
          <div className="ml-3 mb-7 md:hidden">{localizedText.done}:</div>
          {doneTodos?.map((todo) => (
            <TodoCard
              key={`todo-${todo.id}`}
              todo={todo}
              activeTodoId={todo.todoListId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoCardGrid;
