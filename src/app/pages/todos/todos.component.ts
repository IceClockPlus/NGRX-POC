import { Component, OnInit } from '@angular/core';
import { provideStore, select, Store, StoreModule } from '@ngrx/store';
import { TodoItem, TodoStoreSummary } from '../../store/todos/todo.model';
import { Observable } from 'rxjs';
import { TODO_FEATURE_KEY, todoReducer } from '../../store/todos/todo.reducer';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { TodoEffects } from '../../store/todos/todo.effects';
import { selectTodos, selectTodosSummary } from '../../store/todos/todo.selector';
import { loadTodoItems, markAllTodos, markTodoAsComplete, removeTodoItem, unmarkAllTodos, unmarkTodoAsComplete, updateItemOrder } from '../../store/todos/todo.actions';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { fadeOutAnimation } from '../../animations/fadeOutAnimation';
import { TodoProgressBarComponent } from "./components/todo-progress-bar/todo-progress-bar.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    TodoProgressBarComponent
],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  animations: [fadeOutAnimation]
})
export class TodosComponent implements OnInit{
  public showTodoTitle: boolean = true;
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

  public removeTodo(id: number) {
    this.store.dispatch(removeTodoItem({id}));
  }

  public clickMarkAllTodos(){
    this.store.dispatch(markAllTodos());
  }

  public clickUnmarkAllTodos() {
    this.store.dispatch(unmarkAllTodos());
  }

  public showHide(){
    this.showTodoTitle = !this.showTodoTitle;
  }

  dropItem(event: CdkDragDrop<TodoItem[]>) {
    if(event.previousIndex !== event.currentIndex) {
      this.store.dispatch(updateItemOrder({previousIndex: event.previousIndex, currentIndex: event.currentIndex}));
    }
  }
}
