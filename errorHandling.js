//Error handling
try{
                                          //code that may  throw an error
    throw new Error("an error");
}catch(error){
                                          //code to handle the error
    console.error(error.message);
}finally{
                                         //code that will run regardless of whether there was an error
    console.log("cleanup code");
}


//comparison operator
let a=10;
let b =5;
console.log(a === b); //(===) is use to compare number as well as data type.Same operator are used in PHP language 


//logical operator
let p = true;
let q = false;
 console.log(p&&q);           //logical AND : false
 console.log(p||q);           //logical OR : true
 console.log(!p);             //logical NOT : false



 //Timers

 //setTimeout Function          //executes the piece of code after a specified delay(only once)
 const delayedFunction = () => {                    //declared using arrow function
    console.log('Delayed function executed!');      //asynchronous type
 };

 setTimeout(delayedFunction,2000);//executes after 2 secs

 
 //setInterval Function   //execute a function repeatedly at a specified interval

//  const repeatedFunction = () => {
//     console.log('repeated function executed!');
//  };

//  const intervalId = setInterval(repeatedFunction,1000);      //executes every 1 seconds


//in case you want to stop after some time    //by usigng clear interval we can stop setInterval.

function repeatedFunction(){
    console.log('executing repeated function...');
}

const intervalId = setInterval(repeatedFunction,1000);

setTimeout(() => {
    clearInterval(intervalId); //stop the interval
    console.log('interval stopped.');},5000);

