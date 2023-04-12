import { configureStore } from "@reduxjs/toolkit";

import urlReducer from "./features/URLStateSlice";
import todoListsReducer from "./features/TodoListsStateSlice";

import { setupListeners } from "@reduxjs/toolkit/query";
import { todoListsApi } from "./features/TodoListsStateSlice";

const store = configureStore({
  reducer: {
    url: urlReducer,
    todoLists: todoListsReducer,
    [todoListsApi.reducerPath]: todoListsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoListsApi.middleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
