for (var i = 0; i < 5; i++) {

    setTimeout(() => console.log(i), 100)
  
}
  

//Output: 5 5 5 5 5
/*
Why?

So the loop is basically executed 5 time, 
Settimeout is asynchronus function, meaning it will be exexcuted after the delay of 100mili second, so when the loop terminated, setTimeout persists the value of i and it prints 5 5 times
and the i is declared in var which has a global scope. 

If we replace var i with let i, the o.p will change to 0 1 2 3 4 why? becuase then the value is limited to the block-scope

*/