import angular from 'angular';
import { BasketComponent } from './basket.component';

export const BasketComponentName = 'basket';
export const BasketModule = angular
  .module('pages.basket', [])
  .component(BasketComponentName, new BasketComponent())
  .name;