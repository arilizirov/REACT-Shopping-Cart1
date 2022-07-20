const PRODUCTS = [
    {
      name: 'apple',
      pluralName: 'apples',
      image: 'images/Apple.png',
      priceText: '$0.25 each',
      price: (quantity) => {
        return quantity * 25;
      }
    },
   
    {
      name: 'banana',
      pluralName: 'bananas',
      image: 'images/Banana.png',
      priceText: '$0.15 each',
      price: (quantity) => {
      return quantity * 15;
    }
  },
   
  {
    name: 'orange',
    pluralName: 'oranges',
    image: 'images/orange.png',
    priceText: '$0.30 each',
    price: (quantity) => {
    return quantity * 30;
  }
  },
   
  {
    name: 'papaya',
    pluralName: 'papayas',
    image: 'images/papaya.png',
    priceText: '$0.50 each',
    dealText: '3 for $1',
    price: (quantity) => {
      let odds = quantity % 3;
      return (((quantity - odds)/3 * 100)+odds*50);
   
  }
  },
  ];

  export const products = PRODUCTS;