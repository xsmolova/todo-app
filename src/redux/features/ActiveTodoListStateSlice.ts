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

export interface TodoArray {
  todos?: Array<Todo>;
};

export interface TodoListsArray {
    todoLists?: Array<TodoList>;
  };

  const initialState = {
    id:-1,
    title: '',
    todos: []
  } as TodoList;
  
  export const activeTodoListStateSlice = createSlice({
    name: "activeTodoList",
    initialState,
    reducers: {
      setActiveTodoList: (state, action: PayloadAction<TodoList>) => {
        return action.payload;
      },
      removeActiveTodoList: (state) => {
        return initialState;
      },

    }
  });

 
  export const {
    setActiveTodoList,
    removeActiveTodoList
  } = activeTodoListStateSlice.actions;
  
  export default activeTodoListStateSlice.reducer;