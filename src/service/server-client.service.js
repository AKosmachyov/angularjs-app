const PRODUCTS = [
  {
    title: 'Apple',
    description: 'Fresho Apple - Washington, Regualr, 2x4 pcs ( Multipack )',
    prePriceText: '$',
    price: 10,
    afterPriceText: '/lb',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Spartan_apple.jpg',
    minQty: 0.1,
    rateOfChangeQty: 0.1
  }, {
    title: 'Pineapple',
    description: 'Fresho Pineapple',
    prePriceText: '$',
    price: 10,
    afterPriceText: ' each',
    imgUrl: 'https://www.organicfacts.net/wp-content/uploads/pineapplecalories.jpg',
    minQty: 1,
    rateOfChangeQty: 1
  }, {
    title: 'Orange',
    description: 'Fresho Orange - Imported, 6 pcs ',
    prePriceText: '$',
    price: 10,
    afterPriceText: '/pound',
    imgUrl: 'http://sportsvape.net/wp-content/uploads/2014/09/Orange.jpg',
    minQty: 1,
    rateOfChangeQty: 0.5
  }, {
    title: 'Lemon',
    description: 'Fresho Lemon',
    prePriceText: '$',
    price: 10,
    afterPriceText: '/kg',
    imgUrl: 'https://www.almanaturals.net/sites/default/files/product-images/lemon.jpg',
    minQty: 5,
    rateOfChangeQty: 1
  }
];

export class ServerClientService {
  constructor() { }
  
  getProducts() {
    return Promise.resolve(PRODUCTS);
  }
}