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