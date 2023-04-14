import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { Todo,TodoList } from "./Interfaces";
import { RootState } from "../store";

const initialState = {
  } as any[];
  
export const todosStateSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
        apiSlice.endpoints.getTodoLists.matchFulfilled,
      (state, { payload }) => {

        let allTodos:any[] = [];
        payload.forEach((todoList: TodoList) => {
          allTodos = allTodos.concat(todoList.todos)
        })
        return allTodos;
      }
    )
  },
  });

  export const getAllTodos = (state: RootState) => state.todos;
  export default todosStateSlice.reducer;