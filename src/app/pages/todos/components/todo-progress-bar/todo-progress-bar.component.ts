import { Component, Input, OnInit } from '@angular/core';
import { TodoStoreSummary } from '../../../../store/todos/todo.model';
import { select, Store } from '@ngrx/store';
import { selectTodosSummary } from '../../../../store/todos/todo.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-progress-bar.component.html',
  styleUrl: './todo-progress-bar.component.scss'
})
export class TodoProgressBarComponent implements OnInit{
  public summary$: Observable<TodoStoreSummary>;
  public todoPercentage: number = 0;
  public completedPercentage: number = 0;

  constructor(private store: Store) {
    this.summary$ = this.store.pipe(select(selectTodosSummary));
  }

  public calculatePercentageDistro(value: number, total: number) {
    if(total === 0) return 0;
    return  (value / total) * 100;
  }

  ngOnInit(): void {
  }
}
