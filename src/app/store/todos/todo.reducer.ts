import { createReducer, on } from '@ngrx/store';
import {loadTodoItems, addTodoItem, removeTodoItem, loadTodoItemsSuccess, markTodoAsComplete, unmarkTodoAsComplete, markAllTodos, unmarkAllTodos} from './todo.actions';
import { TodoItem } from './todo.model';
import { INIT_TODO_STATE } from './todo.state';


export const TODO_FEATURE_KEY = 'todo'; // Feature key

export const todoReducer = createReducer(
  INIT_TODO_STATE,
  on(addTodoItem, (state, {todo}) => ({...state, todos:[...state.todos, todo]})),

  on(loadTodoItems, (state) => ({...state})),
  on(loadTodoItemsSuccess, (state, {todos}) => ({...state, todos: todos})),

  on(markTodoAsComplete, (state, {id}) => {
    const updatedTodos = state.todos.map(todo => 
      todo.id === id ? {...todo, completed: true} : todo
    );
    return {...state, todos: updatedTodos};
  }),
  on(unmarkTodoAsComplete, (state,{id}) => {
    const updatedTodos = state.todos.map(todo => 
      todo.id === id ? {...todo, completed: false} : todo
    );
    return {...state, todos: updatedTodos};

  }),
  on(removeTodoItem, (state, {id}) => {
    const updatedTodos = state.todos.filter(t => t.id !== id);
    return {...state, todos: updatedTodos};
  }),
  on(markAllTodos, (state) => {
    const markTodos = state.todos.map(todo =>
      todo.completed === false ? {...todo, completed: true} : todo
    )
    return {...state, todos: markTodos}
  }),
  on(unmarkAllTodos, (state) =>{
    const unmarkTodos = state.todos.map(todo => 
      todo.completed === true ? {...todo, completed: false}: todo
    );
    return {...state, todos: unmarkTodos};
  })
)