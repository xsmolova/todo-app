import * as React from "react";
import { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Todo } from "../../redux/features/Interfaces";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { GetFormattedDateString } from "../../utils/dateUtils";
import {
  useRemoveTodoMutation,
  useEditTodoMutation,
} from "../../redux/api/apiSlice";
import { getActiveTodoList } from "../../redux/features/ActiveTodoListStateSlice";
import { localizedText } from "../../localization/strings";
import TodoModal from "../todoModal/TodoModal";

interface Props {
  todo: Todo;
  activeTodoId?: number;
}

// Todo card that can be checked as done, edited or deleted

const TodoCard = ({ todo, activeTodoId }: Props) => {
  const [editing, toggleEditing] = useState(false);
  const activeTodoList = useSelector(getActiveTodoList, shallowEqual);
  const id = activeTodoList.id !== -1 ? activeTodoList.id : activeTodoId;
  const [removeTodo, resultRemove] = useRemoveTodoMutation();
  const [editTodo, resultEdit] = useEditTodoMutation();
  const todoId = todo.id;

  const data = { ...todo };
  data.done = !todo.done;

  const todoValues = {
    title: todo.title,
    description: todo.description,
    deadline: todo.deadline,
    done: todo.done,
  };

  return (
    <>
      {editing && (
        <TodoModal
          edit={editing}
          todoId={todoId}
          todoValues={todoValues}
          closeEditingModal={() => toggleEditing(false)}
        />
      )}
      <div className="grid h-20 max-h-20 flex-grow card bg-secondary hover:bg-secondary-focus rounded-box ">
        <div className="form-control justify-center flex items-start">
          <div className="absolute flex top-2 right-3 gap-1">
            <BiEditAlt
              onClick={() => {
                toggleEditing(!editing);
              }}
              className=" hover:text-primary-focus text-lg"
            />
            <BiTrash
              onClick={() => {
                if (window.confirm(localizedText.deleteMessage)) {
                  removeTodo({ id, todoId });
                }
              }}
              className=" hover:text-primary-focus text-lg"
            />
          </div>
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              className="checkbox rounded-full bg-white checkbox-primary ml-3"
              onChange={() => {
                editTodo({ id, todoId, data });
              }}
              checked={todo.done}
            />
            <div className="flex flex-col ml-5">
              <div>
                <span className="font-bold">{todo.title} - </span>
                <span className="font-bold">
                  {GetFormattedDateString(todo.deadline)}
                </span>
              </div>

              <span className="text-sm">{todo.description}</span>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
