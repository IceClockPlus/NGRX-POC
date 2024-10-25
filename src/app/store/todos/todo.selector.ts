import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoItem } from "./todo.model";
import { TODO_FEATURE_KEY } from "./todo.reducer";
import { ITodoState } from "./todo.state";

export const selectTodoState = createFeatureSelector<ITodoState>(TODO_FEATURE_KEY);

export const selectTodos = createSelector(
    selectTodoState,
    (state: ITodoState) => state.todos
);