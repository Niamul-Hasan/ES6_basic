const products = [
    { productName: 'mouse', brand: 'logitech', price: '1000 tk', color: 'black' },
    { productName: 'speaker', brand: 'Havit', price: '5000 tk', color: 'black' },
    { productName: 'Laptop-display', brand: 'china', price: '5000 tk', color: 'rgb' },
    { productName: 'keyboard', brand: 'A4tech', price: '1100 tk', color: 'black' },
    { productName: 'headphone', brand: 'Funtech', price: '2600 tk', color: 'mid-white-pink' }
];
const findOut = products.find(product => product.price == '5000 tk');
console.log(findOut);
