// All endpoints here

import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import { API_URL } from "../../configs/mainConfig";

export const apiSlice= createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['TodoList'],
    endpoints: (builder) => ({
      getTodoLists: builder.query({
        query: () => '/todo-lists',
        providesTags: ['TodoList'],
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
        query: (arg) => ({
          url: `/todo-lists/${arg.id}/todos`,
          method: 'POST',
          body: arg.data,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
        invalidatesTags: ['TodoList'],
      }),
    }),
  })


  export const { useGetTodoListsQuery, useAddNewTodoListMutation, useAddNewTodoToTodoListMutation } = apiSlice;