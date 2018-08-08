import AppHtml from './app.component.html';
require('./app.component.scss');

export class AppComponent {
  constructor() {
    this.template = AppHtml;
    this.controller = AppController;
  }
}

class AppController {
  constructor($scope) {
    "ngInject"
    this.$scope = $scope;
    this.basketCount = 0;
  }
  
  $onInit() {
    this.$scope.$on('basket-count:changed', (event, data) => {
      this.updateBasketCount(data.count);
    })
  }
  
  updateBasketCount(count) {
    this.basketCount = count;
  }
}