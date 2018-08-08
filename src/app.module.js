import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app/app.component';

import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { ServiceModule } from './service/service.module';

const AppModule = angular
  .module('root', [
    uiRouter,
    PagesModule,
    ComponentsModule,
    ServiceModule
  ])
  .component('app', new AppComponent())
  .name;
