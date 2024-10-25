import { Component, OnInit } from '@angular/core';
import { provideStore, select, Store, StoreModule } from '@ngrx/store';
import { TodoItem, TodoStoreSummary } from '../../store/todos/todo.model';
import { Observable } from 'rxjs';
import { TODO_FEATURE_KEY, todoReducer } from '../../store/todos/todo.reducer';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { TodoEffects } from '../../store/todos/todo.effects';
import { selectTodos, selectTodosSummary } from '../../store/todos/todo.selector';
import { loadTodoItems, markTodoAsComplete, unmarkTodoAsComplete } from '../../store/todos/todo.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit{
  public todos$!: Observable<TodoItem[]>;
  public todosSummary$ : Observable<TodoStoreSummary>;
  constructor(private store: Store){
    this.todos$ = this.store.pipe(select(selectTodos));
    this.todosSummary$ = this.store.pipe(select(selectTodosSummary));
  }

  ngOnInit(): void  {
    this.store.dispatch(loadTodoItems());
  }

  markOrUnmarkTodo(todo: TodoItem) {
    const {id} = todo
    if(todo.completed)
      this.store.dispatch(unmarkTodoAsComplete({id}));
    else
      this.store.dispatch(markTodoAsComplete({id}));
  }
}
