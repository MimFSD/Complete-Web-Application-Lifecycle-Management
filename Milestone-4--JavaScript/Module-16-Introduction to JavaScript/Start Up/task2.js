// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04


var bangla=94;
var math =88;
var chemistry=73;
var physics = 81;
var biology=77;
var average=(bangla+math+chemistry+physics+biology)/5;
console.log(average.toFixed(2));



// Task-3
// You task is to divide the given number by 5 and show the remainder as the output.

// Input:
// The first line of the input contains the number.

// Output:
// Print the remainder.

// Sample Input:
// 119

// Sample Output:
// 4
var g=139;
console.log(g%5);

var t=173;
t%=5;
console.log(t);


// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.

const q= isNaN("11")
console.log(q);


const z=isNaN(2-10) // Not a number -- false
console.log(z);

const piu=isNaN("Work Hard") // never legal number --true
console.log(piu);