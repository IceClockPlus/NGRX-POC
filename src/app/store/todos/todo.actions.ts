import { props } from '@ngrx/store';
import { TodoItem } from './todo.model';
import { createAction } from '@ngrx/store';

export const loadTodoItems = createAction('[Todo] Load Todo Items');
export const addTodoItem = createAction(
  '[Todo] Add Todo Item',
  props<{ todo: TodoItem }>()
);
export const loadTodoItemsSuccess = createAction(
  '[Todo] Load items success',
  props<{ todos: TodoItem[] }>()
);

export const markTodoAsComplete =  createAction('[Todo] Mark Todo as completed',
  props<{id: number}>()
);

export const unmarkTodoAsComplete = createAction('[Todo] Unmark Todo as completed',
  props<{id: number}>()
);

export const removeTodoItem = createAction('[Todo] Remove todo item',
  props<{id: number}>()
);

export const markAllTodos = createAction('[Todo] Mark all');
export const unmarkAllTodos = createAction('[Todo] Unmark all');

export const updateItemOrder = createAction('[Todo] Move item',
  props<{previousIndex: number, currentIndex: number}>()
);
