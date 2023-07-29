function printNumber(num) {

    console.log(num);
  
  }
  
  
  console.log(1);
  
  
  setTimeout(printNumber, 0, 2);
  
  
  setTimeout(printNumber, 100, 3);
  
  
console.log(4);
  


/*
o/p: 1 4 2 3

1 & 4 prints immediately
then 2 & 3

So when we use setTimeout with a delay of 0 milliseconds, 
it doesn't mean that the callback function will be executed immediately. 
Instead, it means that the callback will be added to the event loop 
and will be executed as soon as the call stack is empty.

*/