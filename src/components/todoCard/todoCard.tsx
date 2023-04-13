import * as React from "react";
import { Todo } from "../../redux/features/TodoListsStateSlice";
import { localizedText } from "../../localization/strings";

interface Props {
  checked?: boolean;
}

const TodoCard = ({ checked }: Props, todo: Todo) => {
  return (
    <div className="grid h-20 max-h-20 flex-grow card bg-secondary hover:bg-secondary-focus rounded-box place-items-center">
      {/* {checked && <>ahoj</>}
      Card */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            className="checkbox rounded-full bg-white checkbox-primary"
          />
          <span className="label-text">{todo.title}</span>
          <span className="label-text">{todo.description}</span>
          <span className="label-text">{todo.description}</span>
        </label>
      </div>
    </div>
  );
};

export default TodoCard;
