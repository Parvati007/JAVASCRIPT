//callbacks functions

//synchronous callback function


// function parentFunction(name,callback){
//     callback();
//     console.log("hey"+name);
// }

// function randomFunction(){
//     console.log("hey i am callbackFunction");
// }

// parentFunction("random string",randomFunction);

//--------------------------------------------------------------------------------

//asynchronous callback function


// function parentFunction(name, callback){
//     setTimeout(callback,1000);
//     console.log("hey"+name);
// }

// function randomFunction(){
//     console.log("hey i am call back function");
// }

// parentFunction("random string",randomFunction);

//-----------------------------------------------------------------------------------

//making above code more shorter...using arrow function

const parentFunction=(name,callback)=>{
    setTimeout(callback,1000);
    console.log("hey"+name);
}

parentFunction("random string",function(){
    console.log("hey i am callback function");
});