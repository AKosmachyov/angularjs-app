import angular from 'angular';
import { ProductModule } from './product/product.module';
import { ProductCountModule } from './product-count/product-count.module';

export const ComponentsModule = angular
  .module('components', [
    ProductModule,
    ProductCountModule
  ])
  .name;
