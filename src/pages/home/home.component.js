import HomeHtml from './home.html';

export class HomeComponent {
  constructor() {
    this.template = HomeHtml;
    this.controller = HomeController;
  }
}

export class HomeController {
  constructor(ServerClientService, BasketService) {
    "ngInject"
    this.serverClientService = ServerClientService;
    this.basketService = BasketService;
    this.products;
  }
  
  $onInit() {
    this.serverClientService.getProducts()
      .then(arr => this.products = arr);
  }
  
  addToBasket(product) {
    this.basketService.addProduct(product);
  }
}