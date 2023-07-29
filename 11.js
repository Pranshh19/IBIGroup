const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.evens.push(num);
  } else {
    acc.odds.push(num);
  }
  return acc;
}, { evens: [], odds: [] });

console.log(result);



/*

The reduce() function takes an initial value as the second argument, and in this case, it's missing. 
Since we are pushing elements into two different arrays (evens and odds), the initial value of acc should be an object with both those arrays.

*/


/*
O/p: { evens: [ 2, 4 ], odds: [ 1, 3, 5 ] }
*/