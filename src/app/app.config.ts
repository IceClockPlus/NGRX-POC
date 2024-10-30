import { ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
// import { appEffects, appStore } from './store/app.store';
import { provideEffects } from '@ngrx/effects';
import { TodoEffects } from './store/todos/todo.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]), // Import animation module to app
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideStore(), // Initialize the root store
    provideEffects(), // Initialize global effects (optional),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    })
  ]
};
