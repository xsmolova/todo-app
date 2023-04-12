import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import { API_URL } from "../../configs/mainConfig";

export interface Todo {
    id: number
    title: string
    description: string
    createdAt: Date 
    deadline: Date 
}

export interface TodoList {
    id: number
    title: string
    todos: Array<Todo>
}

export interface TodoListsState {
    TodoListsState: Array<TodoList>;
  };
  
  const initialState: TodoListsState = {
    TodoListsState: []
  };
  
  export const todoListsStateSlice = createSlice({
    name: "todoLists",
    initialState,
    reducers: {
      setTodoLists: (state, action: PayloadAction<Array<TodoList>>) => {
        state.TodoListsState = action.payload;
      }
    }
  });

  export const todoListsApi= createApi({
    reducerPath:'todoListsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
      getTodoListByID: builder.query<TodoList, number>({
        query: (id) => `todo-lists`,
      }),
    }),
  })


  export const { useGetTodoListByIDQuery } = todoListsApi;

  export const {
    setTodoLists
  } = todoListsStateSlice.actions;
  
  export default todoListsStateSlice.reducer;