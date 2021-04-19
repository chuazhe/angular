// The Angular takes the following steps to load our first view.

// 1) Index.html loads
// 2) Angular, Third-party libraries & Application loads
// 3) Main.ts the application entry point
// 4) Root Module
// 5) Root Component
// 6) Template

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
