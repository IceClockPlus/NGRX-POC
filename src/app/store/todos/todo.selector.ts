import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoItem, TodoStoreSummary } from "./todo.model";
import { TODO_FEATURE_KEY } from "./todo.reducer";
import { ITodoState } from "./todo.state";

export const selectTodoState = createFeatureSelector<ITodoState>(TODO_FEATURE_KEY);

export const selectTodos = createSelector(
    selectTodoState,
    (state: ITodoState) => state.todos
);

export const selectTodosSummary = createSelector(
    selectTodoState,
    (state: ITodoState) => <TodoStoreSummary>{
        all: state.todos.length,
        completed: state.todos.filter(t => t.completed).length,
        notCompleted: state.todos.filter(t => !t.completed).length
    }
);