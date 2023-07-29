//What is promise chaining? Explain with an example.

/*
Ans: 
Again, I don't have much knowledge on this topic, but this is what I found after researching: 

So based on my understadning and what I found out it's a simple method of connectiing multiple asynchronus operations together using promises. 

So there are two ways? We can use nested callback or use this chaining technique,
When we use nested callback it results in Chain hell. But Promise chaining make the code more readable and manageable
*/


//Ex:

function getdata(SomeData) {
    
    .then(data => {
      
        return ()
    })
        .then(otherData => {
        return()
        })
        .then(otherData2 => {
        
        })
        .catch(error => {
        console.log("ERROR");
    })
}


/*
With Promise chaining, the code is organized in a linear and readable manner,
 making it easier to understand the sequence of asynchronous operations. 
 If any of the Promises in the chain rejects (throws an error), 
 the control is passed to the nearest catch block, handling errors gracefully.

*/