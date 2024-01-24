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
