import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import { API_URL } from "../../configs/mainConfig";

// All endpoints here
export const apiSlice= createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['TodoList','Todos'],
    endpoints: (builder) => ({
      getTodoLists: builder.query({
        query: () => '/todo-lists',
        providesTags: ['TodoList'],
      }),
      getTodos: builder.query({
        query: (id) => `/todo-lists/${id}/todos?sortBy=deadline`,
        providesTags: ['Todos'],
      }),
      addNewTodoList: builder.mutation({
        query: payload => ({
          url: '/todo-lists',
          method: 'POST',
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
        invalidatesTags: ['TodoList'],
      }),
      addNewTodo: builder.mutation({
        query: (arg) => ({
          url: `/todo-lists/${arg.id}/todos`,
          method: 'POST',
          body: arg.data,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
        invalidatesTags: ['Todos','TodoList'],
      }),
      editTodo: builder.mutation({
        query: (arg) => ({
          url: `/todo-lists/${arg.id}/todos/${arg.todoId}`,
          method: 'PUT',
          body: arg.data,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
        invalidatesTags: ['Todos','TodoList'],
      }),
      removeTodo: builder.mutation({
        query: (arg) => ({
          url: `/todo-lists/${arg.id}/todos/${arg.todoId}`,
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
        invalidatesTags: ['Todos','TodoList'],
      }),
    }),
  })


  export const { useGetTodoListsQuery, useGetTodosQuery, useEditTodoMutation, useRemoveTodoMutation, useAddNewTodoListMutation, useAddNewTodoMutation } = apiSlice;