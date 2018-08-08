const BASKET_PRODUCTS_KEY = 'products';
const BASKET_HASH_KEY = 'products_hash';

export class BasketService {
  constructor(StorageService, $rootScope, md5) {
    "ngInject"
    this.storageService = StorageService;
    this.$rootScope = $rootScope;
    this.md5 = md5;
  
    this._products = [];
    this._basketHash = '';
    
    this._restoreBasket();
    this.notifyAboutBasketCount();
  }
  
  addProduct(product) {
    const copyProduct = Object.assign(product);
    this._cleanProduct(copyProduct);
  
    this._updateIfBasketChange();
  
    let i = this._findIndexOfProduct(copyProduct);
    if (~i) {
      this._products.splice(i, 1);
    }
    
    this._products = [copyProduct].concat(this._products);
    this._saveBasket();
    this.notifyAboutBasketCount();
  }
  
  removeProduct(product) {
    this._cleanProduct(product);
    this._updateIfBasketChange();
  
    let i = this._findIndexOfProduct(product);
    if (~i) {
      this._products.splice(i, 1);
      this._saveBasket();
      this.notifyAboutBasketCount();
    }
  }
  
  updateProduct(product) {
    const copyProduct = Object.assign(product);
    this._cleanProduct(copyProduct);
  
    this._updateIfBasketChange();
    
    let i = this._findIndexOfProduct(copyProduct);
    if (~i) {
      this._products.splice(i, 1, copyProduct);
      this._saveBasket();
    }
  }
  
  cleanBasket() {
    this._products.length = 0;
    this._saveBasket();
    this.notifyAboutBasketCount();
  }
  
  getProducts() {
    return [].concat(this._products);
  }
  
  notifyAboutBasketCount() {
    this.$rootScope.$broadcast('basket-count:changed', { count: this._products.length });
  }
  
  _cleanProduct(product) {
    delete product.$$hashKey;
  }
  
  _restoreBasket() {
    this._products = this.storageService.get(BASKET_PRODUCTS_KEY) || [];
    this._basketHash = this._getBasketHashFromStore();
  }
  
  _getBasketHashFromStore() {
    return this.storageService.get(BASKET_HASH_KEY);
  }
  
  _saveBasket() {
    this.storageService.save(BASKET_PRODUCTS_KEY, this._products);

    const json = JSON.stringify(this._products);
    const hash = this.md5.createHash(json);
    this.storageService.save(BASKET_HASH_KEY, hash);
    this._basketHash = hash;
  }
  
  _updateIfBasketChange() {
    const newHash = this._getBasketHashFromStore();
    if (newHash && newHash !== this._basketHash) {
      this._restoreBasket();
      this._basketHash = newHash;
    }
  }
  
  _findIndexOfProduct(searchedProduct) {
    return this._products.findIndex((product) => product.title === searchedProduct.title);
  }
}