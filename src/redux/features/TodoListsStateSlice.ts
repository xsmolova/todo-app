import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: number
    title: string
    description: string
    createdAt: Date 
    deadline: Date 
    done: boolean
}

export interface TodoList {
    id: number
    title: string
    todos?: Array<Todo>
}

export interface TodoListsArray {
    todoLists?: Array<TodoList>;
  };

  type TodoListsState = {
    activeTodoList: TodoList | null,
  }
  
  const initialState: TodoListsState = {
    activeTodoList: null,
  };
  
  export const todoListsStateSlice = createSlice({
    name: "todoLists",
    initialState,
    reducers: {
      setActiveTodoList: (state, action: PayloadAction<TodoList>) => {
        state.activeTodoList = action.payload;
      }
    }
  });

 
  export const {
    setActiveTodoList
  } = todoListsStateSlice.actions;
  
  export default todoListsStateSlice.reducer;