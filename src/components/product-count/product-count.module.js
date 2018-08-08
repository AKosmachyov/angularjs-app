import angular from 'angular';
import { ProductCountComponent } from './product-count.component';

export const ProductCountModule = angular
  .module('components.productCount', [])
  .component('productCount', new ProductCountComponent())
  .name;