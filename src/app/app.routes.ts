import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { TodoEffects } from './store/todos/todo.effects';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { TODO_FEATURE_KEY, todoReducer } from './store/todos/todo.reducer';
import { importProvidersFrom } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component')
                .then((m) => m.HomeComponent)
            },
            {
                path: 'todos',
                loadComponent: () => import('./pages/todos/todos.component')
                .then((m) => m.TodosComponent),
                providers:[
                    provideState(TODO_FEATURE_KEY, todoReducer),
                    provideEffects(TodoEffects)
                ]
            }
        ]
    }
];
