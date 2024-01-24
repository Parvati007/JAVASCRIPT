// var shadowVar ="i am global";                 //shadowing local>>global preference

// function exampleFunction()
// {
//     var shadowVar = "i am local";
//     console.log(shadowVar);//"i am local"
// }
// exampleFunction();
// console.log(shadowVar);//"i am global"

console.log(x);     //undefined//hoisting is done with both let and var .
  let x=5;         //declaration is hoisted
console.log(x);    //5

//functions declaration can also be hoisted.so you can call function before it appear in the code.

//Data types:-


let word ="john";                      //string
console.log(typeof(word));

let age = 2;                          //number//float is also comes in number
console.log(typeof(age));

let isstudent = true;                 //boolean
console.log(typeof(isstudent));

let undefinedvar;                    //undefined
console.log(typeof(undefinedvar));

let nullvar = null;                  //null
console.log(typeof(nullvar));

let person={                         //object//collection of key value pairs
    name:"alice",
    age:30,
    isstudent:false
};
console.log(person.name);

let fruits = [1, "banana","orange"];      //array
console.log(fruits[0]);


function add(a,b)                       //function//reusable block of code
{
    return a+b;
}
var a=add(2,3);
console.log(a);



//type coercion
let result = 5 +"5";           //result is "55"
let resuultt = 5 + 5 ;        //result is 10
let resulttt = "2"+"2"-"2";   //result is 20 in number (- cannot be performed in string)
let resultttt = "2"*"2";  //result is 4 in number (* and / cannot be performed in string)
console.log(result);