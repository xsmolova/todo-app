import React from "react";
import type { RootState } from "../../redux/store";
import { Todo } from "../../redux/features/ActiveTodoListStateSlice";
import { useSelector } from "react-redux";
import { useGetTodosQuery } from "../../redux/api/apiSlice";
import TodoCardGrid from "../../components/todoCardGrid/TodoCardGrid";
import NewTodoModal from "../../components/newTodoCard/NewTodoModal";
import Loader from "../../components/loader/Loader";
import { localizedText } from "../../localization/strings";

//todoList: TodoList
const TodoListPage = () => {
  const activeTodoList = useSelector(
    (state: RootState) => state.activeTodoList
  );
  const id = activeTodoList.id;
  const { data, error, isLoading } = useGetTodosQuery(id);

  const doneTodos: Todo[] = [];
  const undoneTodos: Todo[] = [];

  data?.forEach((todo: Todo) =>
    todo.done ? doneTodos.push(todo) : undoneTodos.push(todo)
  );

  return (
    <div className="max-h-full h-full relative">
      <h2>{activeTodoList.title}</h2>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="absolute top-0 right-0">
            <NewTodoModal />
          </div>

          <div className="mt-3">
            {localizedText.formatString(
              localizedText.xMoreOnTodoList,
              <b>3</b>
            )}
          </div>
          <TodoCardGrid doneTodos={doneTodos} undoneTodos={undoneTodos} />
        </>
      )}
    </div>
  );
};

export default TodoListPage;
