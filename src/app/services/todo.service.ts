import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '../store/todos/todo.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private endpointRoot: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Array<TodoItem>> {
    return this.httpClient
      .get<Array<TodoItem>>(this.endpointRoot);
  }

}
