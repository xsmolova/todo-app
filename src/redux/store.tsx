import { configureStore } from "@reduxjs/toolkit";

import urlReducer from "./features/URLStateSlice";
import activeTodoListReducer from "./features/ActiveTodoListStateSlice";

import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    url: urlReducer,
    activeTodoList: activeTodoListReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
