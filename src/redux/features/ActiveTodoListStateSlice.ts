import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoList } from "./Interfaces";


  const initialState = {
    id:-1,
    title:""
  };
  
  export const activeTodoListStateSlice = createSlice({
    name: "activeTodoList",
    initialState,
    reducers: {
      setActiveTodoList: (state, action: PayloadAction<TodoList>) => {
        state.id = action.payload.id;
        state.title = action.payload.title;
      },
      removeActiveTodoList: (state) => {
        state = initialState;
      },

    }
  });

 
  export const {
    setActiveTodoList,
    removeActiveTodoList
  } = activeTodoListStateSlice.actions;
  
  export default activeTodoListStateSlice.reducer;