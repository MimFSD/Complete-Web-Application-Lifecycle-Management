// //Free Drinks 
// - Burger more than 500tk: free Coke
// - Else Coke: 30tk
var burger=490;

if(burger > 500){
    console.log('free coke');
}
else{
   console.log(' coke : 30tk' );
}
// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.

var weight= 41 , height=1.778;
var  BMI = weight / ((height)^2)
console.log('Your BMI is :' , BMI);

if (BMI<18.5) {
    console.log(" you are underweight.");
}
else if (BMI >= 18.5 &&  BMI <=24.9) {
    console.log("you are normal.");
    
}
else if(BMI >=25 && BMI <= 29.9){
    console.log('you are overweight.');
}
else{
    console.log( 'you are obese');
}



/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
const num1=6,num2=8 ;
let result;


if (num1>num2) {
    console.log("double of num1", result=num1*2);
} else {
    console.log("sum of num1 and num2 :" ,num1+num2);
    
}



/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const age= 34;

const student=true;
if (age<10) {
    console.log('free');
}
else if (student && age>10 && age<25){
    console.log('get a 50% discount');

}
else if (age >= 60) {
    console.log('Senior citizens gets a 15% Discount');
    
}


else {
    console.log('Regular ticket fare 800 tk');
    
}

// Grade Calculator

// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     F: 0-59

const student_score =89;
if (student_score>=90 && student_score<=100) {
    console.log("Grade :A");
} 
else if(student_score>=80 && student_score<=89){
    console.log('Grade : B');
}
else if (student_score>=70 && student_score<=79){
    console.log('Grade : C');
}
else if (student_score>=60 && student_score<=69){
    console.log('Grade : D');
}
else if (student_score<=59 && student_score>=0){
    console.log('Grade : F');
}
else {
    console.log('Invalid');
    
}

