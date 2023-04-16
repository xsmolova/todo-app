import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Todo, TodoList } from "../../redux/features/Interfaces";
import {
  setActiveTodoList,
  getActiveTodoList,
} from "../../redux/features/ActiveTodoListStateSlice";
import {
  useGetTodosQuery,
  useGetTodoListsQuery,
} from "../../redux/api/apiSlice";
import TodoCardGrid from "../../components/todoCardGrid/TodoCardGrid";
import TodoModal from "../../components/todoModal/TodoModal";
import Loader from "../../components/loader/Loader";
import { localizedText } from "../../localization/strings";

// Shows todos for active todo list
const TodoListPage = (props: any) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { data: todoLists } = useGetTodoListsQuery({});
  const activeTodoList = useSelector(getActiveTodoList, shallowEqual);

  const id = activeTodoList.id;
  const { data, isLoading } = useGetTodosQuery(id);
  let urlTodoListParam = useParams().id;

  const doneTodos: Todo[] = [];
  const undoneTodos: Todo[] = [];

  data?.forEach((todo: Todo) =>
    todo.done ? doneTodos.push(todo) : undoneTodos.push(todo)
  );

  // Active todo list wasn't set (when refreshing the page)
  useEffect(() => {
    if (id === -1 && todoLists) {
      const activeTodoListIndex = todoLists.findIndex(
        (todolist: TodoList) => todolist.id.toString() === urlTodoListParam
      );
      if (activeTodoListIndex !== -1)
        dispatch(setActiveTodoList(todoLists[activeTodoListIndex]));
      else navigate("/404");
    }
  });

  return (
    <div className="max-h-full h-full relative">
      <h2>{activeTodoList.title}</h2>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="md:absolute md:top-0 md:right-0">
            <TodoModal />
          </div>

          <div className="mt-3">
            {undoneTodos.length === 1
              ? localizedText.formatString(
                  localizedText.oneMoreOnTodoList,
                  <b>{undoneTodos.length}</b>
                )
              : localizedText.formatString(
                  localizedText.xMoreOnTodoList,
                  <b>{undoneTodos.length}</b>
                )}
          </div>
          <TodoCardGrid doneTodos={doneTodos} undoneTodos={undoneTodos} />
        </>
      )}
    </div>
  );
};

export default TodoListPage;
