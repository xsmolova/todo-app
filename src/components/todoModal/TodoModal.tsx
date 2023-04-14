import * as React from "react";
import { BiX } from "react-icons/bi";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useAddNewTodoMutation,
  useEditTodoMutation,
} from "../../redux/api/apiSlice";
import CustomButton from "../customButton/CustomButton";
import { localizedText } from "../../localization/strings";

interface Props {
  edit?: boolean;
  todoId?: number;
  todoValues?: any;
  closeEditingModal?: () => void;
}

const DEFAULT_VALUES = {
  title: "",
  description: "",
  deadline: "",
  done: false,
};

const TodoModal = ({ edit, todoId, todoValues, closeEditingModal }: Props) => {
  const activeTodoList = useSelector(
    (state: RootState) => state.activeTodoList
  );
  const id = activeTodoList.id;
  const [modalOpen, toggleModalOpen] = useState(edit ? true : false);
  const [editTodo, resultEdit] = useEditTodoMutation();
  const [addNewTodo, resultAddNew] = useAddNewTodoMutation();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: edit ? todoValues : DEFAULT_VALUES,
  });

  const resetInputFieldsAndCloseModal = () => {
    reset(DEFAULT_VALUES);
    toggleModalOpen(false);
  };

  return (
    <>
      {!edit && (
        <label
          htmlFor="new-todo-modal"
          className="btn btn-block mt-6 bg-primary hover:bg-primary-focus border-none text-white normal-case w-full max-w-xs"
        >
          {`+ ${localizedText.buttons.newTodo}`}
        </label>
      )}
      <input
        type="checkbox"
        id="new-todo-modal"
        className="modal-toggle"
        onChange={() => toggleModalOpen(!modalOpen)}
        checked={modalOpen}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action absolute top-0 right-5">
            <label
              onClick={() => {
                edit && closeEditingModal && closeEditingModal();
              }}
              htmlFor="new-todo-modal"
              className="btn bg-primary hover:bg-primary-focus border-none text-white normal-case max-w-xs"
            >
              <BiX className="text-lg" />
            </label>
          </div>
          <h3 className="font-bold text-lg">{localizedText.whatTodo}</h3>

          <form
            className="flex mt-3 relative flex-col justify-center items-center"
            onSubmit={handleSubmit((data) => {
              edit && todoId
                ? editTodo({ id, todoId, data })
                : addNewTodo({ id, data });
              resetInputFieldsAndCloseModal();
            })}
          >
            <label className="text-sm  w-72 text-left">
              {localizedText.title}:
            </label>
            <input
              className="input w-full mt-3 max-w-xs text-sm bg-secondary"
              placeholder={localizedText.addTitle}
              {...register("title", { required: true, maxLength: 30 })}
            />
            {errors.title &&
              (errors.title.type === "required" ? (
                <p className="text-sm  w-72 text-left text-primary">
                  {localizedText.required}
                </p>
              ) : (
                <p className="text-sm  w-72 text-left text-primary">
                  {localizedText.maxLength}
                </p>
              ))}
            <label className="text-sm mt-5  w-72 text-left">
              {localizedText.description}:
            </label>
            <input
              className="input w-full mt-3 max-w-xs text-sm bg-secondary"
              placeholder={localizedText.addDescription}
              {...register("description", { required: false, maxLength: 50 })}
            />
            {errors.description && (
              <p className="text-sm  w-72 text-left text-primary">
                {localizedText.maxLength}
              </p>
            )}
            <label className="text-sm mt-5  w-72 text-left">
              {localizedText.deadline}:
            </label>
            <input
              type="date"
              className="input w-full mt-3 max-w-xs text-sm bg-secondary"
              placeholder={localizedText.deadline}
              {...register("deadline", { required: true, maxLength: 50 })}
            />
            {errors.deadline && (
              <p className="text-sm  w-72 text-left text-primary">
                {localizedText.required}
              </p>
            )}

            <div className="mt-5"></div>

            <CustomButton
              className="modal-action"
              center
              children={
                edit
                  ? localizedText.buttons.editTodo
                  : `+ ${localizedText.buttons.newTodo}`
              }
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoModal;
