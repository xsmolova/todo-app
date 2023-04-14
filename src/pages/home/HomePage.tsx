import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { getFilter } from "../../redux/features/FilterStateSlice";
import { getAllTodos } from "../../redux/features/TodosStateSlice";
import TodoCardGrid from "../../components/todoCardGrid/TodoCardGrid";
import { Todo } from "../../redux/features/Interfaces";
import Loader from "../../components/loader/Loader";
import { useGetTodoListsQuery } from "../../redux/api/apiSlice";
import { localizedText } from "../../localization/strings";

// Homepage that shows all todos or todos that contain searched text
const HomePage = () => {
  const { data: todoLists, isLoading } = useGetTodoListsQuery({});
  const filter = useSelector(getFilter, shallowEqual);
  const todos = useSelector(getAllTodos, shallowEqual);

  const doneTodos: Todo[] = [];
  const undoneTodos: Todo[] = [];

  if (todos.length !== 0 && Object.keys(todos).length !== 0) {
    if (filter.search !== "") {
      const filterTodos = todos.filter(
        (todo) =>
          todo.title.toLowerCase().includes(filter.search.toLowerCase()) ||
          todo.description.toLowerCase().includes(filter.search.toLowerCase())
      );
      filterTodos?.forEach((todo: Todo) =>
        todo.done ? doneTodos.push(todo) : undoneTodos.push(todo)
      );
    } else {
      todos?.forEach((todo: Todo) =>
        todo.done ? doneTodos.push(todo) : undoneTodos.push(todo)
      );
    }
  }

  return (
    <div className="max-h-full h-full relative">
      <h2>{localizedText.welcome}</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-3">
            {filter.search !== ""
              ? localizedText.formatString(
                  localizedText.searchResult,
                  <b>{filter.search}</b>
                )
              : localizedText.formatString(
                  localizedText.seeAllTodos,
                  <b>{undoneTodos.length}</b>
                )}
          </div>
          <TodoCardGrid doneTodos={doneTodos} undoneTodos={undoneTodos} />
        </>
      )}
    </div>
  );
};

export default HomePage;
