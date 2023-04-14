import * as React from "react";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { Todo } from "../../redux/features/ActiveTodoListStateSlice";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { GetFormattedDateString } from "../../utils/dateUtils";
import {
  useRemoveTodoMutation,
  useEditTodoMutation,
} from "../../redux/api/apiSlice";
import { localizedText } from "../../localization/strings";

interface Props {
  checked?: boolean;
  todo: Todo;
}

const TodoCard = ({ checked, todo }: Props) => {
  const activeTodoList = useSelector(
    (state: RootState) => state.activeTodoList
  );
  const id = activeTodoList.id;
  const [removeTodo, resultRemove] = useRemoveTodoMutation();
  const [editTodo, resultEdit] = useEditTodoMutation();
  const todoId = todo.id;

  const data = { ...todo };
  data.done = !todo.done;

  return (
    <div className="grid h-20 max-h-20 flex-grow card bg-secondary hover:bg-secondary-focus rounded-box ">
      <div className="form-control justify-center flex items-start">
        <div className="absolute flex top-2 right-3 gap-1">
          <BiEditAlt className=" hover:text-primary-focus text-lg" />
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
  );
};

export default TodoCard;
