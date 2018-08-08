import angular from 'angular';
import md5 from 'angular-md5';

import { ServerClientService } from './server-client.service';
import { StorageService } from './storage.service';
import { BasketService } from "./basket.service";

export const ServiceModule = angular
  .module('services', ['angular-md5'])
  .service("ServerClientService", ServerClientService)
  .service("StorageService", StorageService)
  .service("BasketService", BasketService)
  .name;