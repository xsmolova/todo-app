import React from "react";
import TodoCardGrid from "../../components/todoCardGrid/TodoCardGrid";
import { localizedText } from "../../localization/strings";
//todoList: TodoList
const TodoListPage = () => {
  return (
    <div className="max-h-full h-full">
      <h2>Todo Title</h2>

      <div className="mt-3">
        {localizedText.formatString(localizedText.xMoreOnTodoList, <b>3</b>)}
      </div>
      <TodoCardGrid />
    </div>
  );
};

export default TodoListPage;
