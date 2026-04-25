import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AnalyticsService } from './app/analytics.service';

bootstrapApplication(App, appConfig)
  .then((appRef) => {
    appRef.injector.get(AnalyticsService);
  })
  .catch((err) => console.error(err));