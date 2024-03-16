// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';  // Certifique-se de que esta importação está correta
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {providers: [provideRouter(routes, withViewTransitions()),]
})
  .catch((err) => console.error(err));
