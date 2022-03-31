'use strict';
let bills = [125, 100, 250, 555, 44, 350];

// >= 50 <= 300 * 0.15 else * 0.2

let tips = [];
let total = [];

bills.forEach((item, index) => {
  item >= 50 && item <= 300 ? tips.push(item * 0.15) : tips.push(item * 0.2);
  total.push(item + tips[index]);
});
console.log('bills:', bills);
console.log('tips:', tips);
console.log('total:', total);
