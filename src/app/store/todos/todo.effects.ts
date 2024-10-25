import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../../services/todo.service";
import { loadTodoItems, loadTodoItemsSuccess } from "./todo.actions";
import { catchError, EMPTY, exhaustMap, map, mergeMap } from "rxjs";


@Injectable()
export class TodoEffects{
  loadTodoItems$ = createEffect(() => this.actions$.pipe(
      ofType(loadTodoItems),
      exhaustMap(() => this.todoService.getTodos().pipe(
        map(todos => loadTodoItemsSuccess({todos})),
        catchError(() => EMPTY)
      )
      )      
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService){

  }
}