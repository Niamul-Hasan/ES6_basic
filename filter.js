const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odd = numbers.filter(number => number % 2 != 0);
const even = numbers.filter(number => number % 2 == 0);
console.log(odd, even);