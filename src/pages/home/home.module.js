import angular from 'angular';
import { HomeComponent } from './home.component';

export const HomeComponentName = 'home';
export const HomeModule = angular
  .module('pages.home', [])
  .component(HomeComponentName, new HomeComponent())
  .name;