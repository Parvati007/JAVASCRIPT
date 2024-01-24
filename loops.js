for(let i=0 ; i<5 ; i++)//for loop
{
    console.log(i);
}

let count = 0;//while loop//entry control loop
while(count < 5)
{
    console.log(count);
    count++;
}

let countt=0;//do while loop//exit control loop
do{
    console.log(countt);
    countt++;
}while(countt<5);


let person = {name:"john",age: 30,occupation:"Developer"};
for (let key in person){                                   //special for in loop for object's iteration
    console.log(key + ":" +person[key]);                  //dot operator will not work in for in loop
}

let car = {
    make: "toyota",
    model: "camry",
    year: 2022,
    isElectric: false,
    start : function(){                    //anamous function = a function which doesn't have name
        console.log("engine started!");
    }
}
console.log(car.make);    //output = toyota
console.log(car.year);    //output = 2022
car.start();//calling the method


//object constructor function
function Book(title, author , year){
    this.title = title;  //this refers to  object that we are making
    this.author = author;
    this.year = year;
}
//creating instances of the object
let book1 = new Book("the catcher in the rye","J.D salinger",1951);
let book2 = new Book("to kill a mockingbird","harper lee",1960);

console.log(book1.title);
console.log(book1.author);


//creating an array
let fruits = ["apple","banana","orange","grape"];
//accessing elements
console.log(fruits[0]);//output is apple
console.log(fruits[2]);//output is banana

//adding elements to the end
fruits.push("kiwi");
console.log(fruits);
//adding elements to the begining
fruits.unshift("mango");
console.log(fruits);
//removing the last element
let removedLast = fruits.pop();
console.log(fruits);
//removing the first element
let removedFirst = fruits.shift();
console.log(fruits);
//finding index of an element 
let indexOfOrange = fruits.indexOf("orange");
//iterating using for loop
for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}
//slicing an array
let citrus = fruits.slice(1,3);
console.log(citrus);
//splicing an array(modifying original array)
let removed = fruits.splice(1,2,"pear","melon");
console.log(fruits);
//concatenating arrays
let moreFruits = ["grapefruit","pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log(fruits);


//writing function with another way
// multiply();
const multiply = function(a,b){   //no hoisting is their.
    return a*b;};
//invocation
const product = multiply(4,6);
console.log('function expression - product:',product);



//arrow function
const subtract = (a,b)=> a-b;  //for multiple operations curly braces are used
//invocation
const difference = subtract(8,3);
console.log('Arraow Function - Difference :', difference);

