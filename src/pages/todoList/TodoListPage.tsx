import React from "react";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import TodoCardGrid from "../../components/todoCardGrid/TodoCardGrid";
import { localizedText } from "../../localization/strings";
//todoList: TodoList
const TodoListPage = () => {
  const activeTodoList = useSelector(
    (state: RootState) => state.activeTodoList
  );

  return (
    <div className="max-h-full h-full">
      <h2>{activeTodoList.title}</h2>

      <div className="mt-3">
        {localizedText.formatString(localizedText.xMoreOnTodoList, <b>3</b>)}
      </div>
      <TodoCardGrid todos={activeTodoList.todos} />
    </div>
  );
};

export default TodoListPage;
