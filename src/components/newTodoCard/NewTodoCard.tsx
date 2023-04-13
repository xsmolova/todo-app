import * as React from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/customButton/CustomButton";
import { localizedText } from "../../localization/strings";

const NewTodoCard = () => {
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
    <div className="grid h-fit max-h-[11.3rem] flex-grow card bg-accent hover:bg-secondary-focus rounded-box place-items-center">
      {/* {checked && <>ahoj</>}
      Card */}
      <div>
        <form
          className="flex mt-3 flex-col"
          onSubmit={handleSubmit((data) => {
            console.log("submit");
          })}
        >
          <label>{localizedText.whatTodo}</label>
          <input
            className="input w-full mt-3 max-w-xs text-sm bg-secondary"
            placeholder={localizedText.title}
            {...register("title", { required: true, maxLength: 20 })}
          />
          {errors.title && (
            <p className="text-sm text-primary absolute m-auto top-24">
              {localizedText.required}
            </p>
          )}
          <CustomButton
            center
            children={`+ ${localizedText.buttons.addTodo}`}
            type="submit"
          />
          <div className="mt-5"></div>
        </form>
      </div>
    </div>
  );
};

export default NewTodoCard;
