import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./Interfaces";

const initialState = {
  } as Todo[];
  
export const todosStateSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
      setTodos: (state, action: PayloadAction<Todo[]>) => {
        state = action.payload;
      },
      removeTodos: (state) => {
        state = initialState;
      },

    }
  });

 
  export const {
    setTodos,
    removeTodos
  } = todosStateSlice.actions;
  
  export default todosStateSlice.reducer;