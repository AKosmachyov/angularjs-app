import angular from 'angular';
import { ProductComponent } from './product.component';

export const ProductModule = angular
  .module('components.product', [])
  .component('product', new ProductComponent())
  .name;