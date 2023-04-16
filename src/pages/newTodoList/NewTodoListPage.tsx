import React from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/customButton/CustomButton";
import { useAddNewTodoListMutation } from "../../redux/api/apiSlice";
import { localizedText } from "../../localization/strings";

// create a new todo list
const NewTodoListPage = () => {
  const [addNewTodoList] = useAddNewTodoListMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
    },
  });

  return (
    <div>
      <h2>{localizedText.newTodoList}</h2>
      <form
        className="flex mt-10 flex-col"
        onSubmit={handleSubmit((data) => {
          addNewTodoList(data)
            .unwrap()
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
        })}
      >
        <label>{localizedText.newTodoListTitle}:</label>
        <input
          className="input w-full mt-3 max-w-full text-sm bg-secondary"
          placeholder={localizedText.title}
          {...register("title", { required: true, maxLength: 20 })}
        />
        {errors.title && (
          <p className="text-sm text-primary">{localizedText.required}</p>
        )}
        <CustomButton
          center
          children={`+ ${localizedText.buttons.createTodoList}`}
          type="submit"
        />
      </form>
    </div>
  );
};

export default NewTodoListPage;
