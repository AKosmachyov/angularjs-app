import BasketHtml from './basket.html';

export class BasketComponent {
  constructor() {
    this.template = BasketHtml;
    this.controller = BasketController;
  }
}

class BasketController {
  constructor(BasketService) {
    "ngInject"
    this.basketService = BasketService;
    this.products;
    this.total;
  }
  
  $onInit() {
    this.updateProducts();
  }
  
  updateProducts() {
    this.products = this.basketService.getProducts();
    this.calculateTotal();
  }
  
  remove(product) {
    this.basketService.removeProduct(product);
    this.updateProducts();
  }
  
  calculateTotal() {
    this.total = this.products.reduce((acc, el) => acc += el.price * el.count, 0)
  }
  
  onProductChangeCount(product) {
    this.basketService.updateProduct(product);
    this.updateProducts();
  }
}