import ProductCountComponentHtml from './product-count.component.html';

export class ProductCountComponent {
  constructor() {
    this.template = ProductCountComponentHtml;
    this.controller = ProductCountController;
    this.bindings = {
      count: '=?',
      min: '<?',
      rateOfChangeQty: '<?',
      onCountUpdate: '&?'
    }
  }
}

class ProductCountController {
  $onInit() {
    this.count = this.count || this.min || 0;
    this.min = this.min || 0;
    this.rateOfChangeQty = this.rateOfChangeQty || 1;
  }
  
  increment() {
    this.count += this.rateOfChangeQty;
    this.round();
    this.notify();
  }
  
  decrement() {
    this.count -= this.rateOfChangeQty;
    
    if (this.min && this.min > this.count) {
      this.count = this.min;
    }
    
    this.round();
    this.notify();
  }
  
  round() {
    this.count = +this.count.toFixed(10);
  }
  
  notify() {
    if (this.onCountUpdate) {
      this.onCountUpdate();
    }
  }
}