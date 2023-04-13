// All endpoints here

import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import { Todo } from '../features/ActiveTodoListStateSlice';
import { API_URL } from "../../configs/mainConfig";

export const apiSlice= createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['TodoList','Todos'],
    endpoints: (builder) => ({
      getTodoLists: builder.query({
        query: () => '/todo-lists',
        providesTags: ['TodoList'],
      }),
      getTodoFromTodoList: builder.query({
        query: (id) => `/todo-lists/${id}/todos`,
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
      addNewTodoToTodoList: builder.mutation({
        query: (arg) => {
            console.log(arg);
           return  {
          url: `/todo-lists/${arg.id}/todos`,
          method: 'POST',
          body: arg.data,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }},
        invalidatesTags: ['TodoList','Todos'],
      }),
    }),
  })


  export const { useGetTodoListsQuery, useGetTodoFromTodoListQuery, useAddNewTodoListMutation, useAddNewTodoToTodoListMutation } = apiSlice;