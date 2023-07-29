/*
Callback hell is when we use nested callback
It occurs when you need to perform multiple asynchronous operations one after the other,
and each operation depends on the result of the previous one. As the number of nested callbacks increases, 
the code becomes difficult to read, understand, and maintain.


Ex: 
*/


SelectThisCandiate((Maybe) => {
  RejectThisCandiate(resultA, (MaybeNot) => {
    LetsTryHimAndDecide(resultB, (TakeaChance) => {
      // Do something with resultC
    });
  });
});
