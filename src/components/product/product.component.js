import ProductComponentHtml from './product.component.html';
require('./product.component.scss');

export class ProductComponent {
  constructor() {
    this.template = ProductComponentHtml;
    this.controller = ProductController;
    this.bindings = {
      product: '<',
      isBasket: '<',
      onAdd: '&?',
      onRemove: '&?',
      onCountUpdate: '&?'
    }
  }
}

const DEBOUNCE_TIME_MS = 300;

class ProductController {
  constructor($timeout) {
    "ngInject"
    this.$timeout = $timeout;
    this.debounceTimer = null;
  }
  
  add() {
    if (this.onAdd) {
      this.onAdd({ product: this.product })
    }
  }
  
  remove() {
    if (this.onRemove) {
      this.onRemove({product: this.product});
    }
  }
  
  changeCount() {
    if (!this.onCountUpdate) {
      return;
    }
    
    const onComplete = () => {
      this.onCountUpdate(this.product);
      this.debounceTimer = null;
    };
  
    if (this.debounceTimer) {
      this.$timeout.cancel(this.debounceTimer);
    }
    
    this.debounceTimer = this.$timeout(onComplete, DEBOUNCE_TIME_MS);
  };
}