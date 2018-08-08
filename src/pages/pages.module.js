import angular from 'angular';

import { HomeModule, HomeComponentName } from './home/home.module';
import { BasketModule, BasketComponentName } from './basket/basket.module';

function Routing($urlRouterProvider, $stateProvider) {
  "ngInject"
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('home', {
      url: '/home',
      component: HomeComponentName
    })
    .state('basket', {
      url: '/basket',
      component: BasketComponentName
    });
}

export const PagesModule = angular
  .module('pages', [
    HomeModule,
    BasketModule
  ])
  .config(Routing)
  .name;
