// JavaScript code will go here
console.log("JavaScript Basics");
// Part 1: Data Types

// 1. Create variables of different data types
let stringVar = "This is a string"; // String
let numberVar = 42; // Number
let booleanVar = true; // Boolean
let nullVar = null; // Null
let undefinedVar; // Undefined
let objectVar = { name: "John", age: 30 }; // Object
let symbolVar = Symbol("description"); // Symbol

// 2. Print these variables to the console using console.log()
console.log("String:", stringVar);
console.log("Number:", numberVar);
console.log("Boolean:", booleanVar);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
console.log("Object:", objectVar);
console.log("Symbol:", symbolVar);
// Part 1: Data Types
// Part 3: Functions

// 1. Create a function named greet that takes a name parameter and prints a greeting message to the console
function greet(name) {
    console.log(`Hello, ${name}! Welcome to the JavaScript Basics Assignment.`);
}
// Example usage:
greet("Alice"); // Output: Hello, Alice! Welcome to the JavaScript Basics Assignment.

// 2. Create a function named sumArray that takes an array of numbers as a parameter and returns the sum of all elements
function sumArray(arr) {
    return arr.reduce((accumulator, current) => accumulator + current, 0);
}
// Example usage:
let numbersArray = [1, 2, 3, 4, 5];
console.log("Sum of Array:", sumArray(numbersArray)); // Output: 15

// 3. Create a function named findMax that takes an array of numbers as a parameter and returns the maximum number
function findMax(arr) {
    return Math.max(...arr);
}
// Example usage:
let numbersArray2 = [1, 2, 3, 4, 5];
console.log("Maximum Number:", findMax(numbersArray2)); // Output: 5

// 1. Create variables of different data types
let stringVar = "This is a string"; // String
let numberVar = 42; // Number
let booleanVar = true; // Boolean
let nullVar = null; // Null
let undefinedVar; // Undefined
let objectVar = { name: "John", age: 30 }; // Object
let symbolVar = Symbol("description"); // Symbol

// 2. Print these variables to the console using console.log()
console.log("String:", stringVar);
console.log("Number:", numberVar);
console.log("Boolean:", booleanVar);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
console.log("Object:", objectVar);
console.log("Symbol:", symbolVar);
// Part 2: Arrays

// 1. Create an array of numbers
let numbers = [5, 8, 12, 15, 20, 25]; // Array of numbers

// 2. Use the map method to create a new array where each number is multiplied by 2
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// 3. Use the filter method to create a new array that only includes numbers greater than 10
let greaterThanTen = numbers.filter(num => num > 10);
console.log("Numbers Greater Than 10:", greaterThanTen);

// 4. Use the reduce method to find the sum of all numbers in the array
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of All Numbers:", sum);

// 5. Use the forEach method to print each number in the array to the console
console.log("Numbers in the Array:");
numbers.forEach(num => console.log(num));
