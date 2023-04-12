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
    todos?: Array<Todo>
}

export interface TodoListsArray {
    todoLists?: Array<TodoList>;
  };
  
  const initialState: TodoListsArray = {
    todoLists: []
  };
  
  export const todoListsStateSlice = createSlice({
    name: "todoLists",
    initialState,
    reducers: {
      setTodoLists: (state, action: PayloadAction<Array<TodoList>>) => {
        state.todoLists = action.payload;
      }
    }
  });

  export const todoListsApi= createApi({
    reducerPath:'todoListsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
      getTodoLists: builder.query({
        query: () => '/todo-lists',
      }),
    }),
  })


  export const { useGetTodoListsQuery } = todoListsApi;

  export const {
    setTodoLists
  } = todoListsStateSlice.actions;
  
  export default todoListsStateSlice.reducer;