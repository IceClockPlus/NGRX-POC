import { TodoItem } from "./todo.model";

export interface ITodoState {
    todos: TodoItem[];
  }
  
  export const INIT_TODO_STATE: ITodoState = {
    todos: [],
  };