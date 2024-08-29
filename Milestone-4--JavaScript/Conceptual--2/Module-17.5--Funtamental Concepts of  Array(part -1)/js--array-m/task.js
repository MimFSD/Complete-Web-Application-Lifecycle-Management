// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array


let fruits=['Mango','Apple','Orange','Banana','Guava']
console.log(fruits[2]);
fruits[1]='jambura';
console.log(fruits);

// Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const tour_Place=['Sajek','Bandorban','Sent Martin'];
tour_Place.push('Coxs Bazar');
tour_Place.push('rangamati','Jaflong');
tour_Place.pop();
tour_Place.pop();
console.log(tour_Place);
// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.
const books=["SPL",'OOP','DSA','DLD','DAA','TOC']
console.log(books.includes('Javascript'));
console.log(books);

// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.
const Subcrb= [7,3,67,4,9]
let view=[3];
const Love = "amin goes to club "
console.log(Array.isArray(Subcrb));
console.log(Array.isArray(view));
console.log(Array.isArray(Love));
// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log()
const post =[3,6,9,45,76,45]
const react=[8,3,5,67,32,64]
console.log(post);
console.log(react);
console.log(post.concat(react));