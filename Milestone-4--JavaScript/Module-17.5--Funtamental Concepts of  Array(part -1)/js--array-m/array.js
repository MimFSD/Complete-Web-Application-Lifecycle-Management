// const num1 =12;
// const num2 =02;
// const num3 =22;
// const num4 =82;
// const num5 =72;
// const num5=762;

const numbers =[25,64,74,94]
const friends =['Amid', 'Zahid' , 'poly', 'Sourov']
const passed =[true,false,true,false]
const mixedArray =[64,'Arafat',true,578.9876]

//Array.length
const balls =[5,768,9,56,92,87,3,94,45]
console.log(balls.length);  //output : 9
//Index
const rolls =[6,9,87,34,78,81] //index 0-1-2-3-4-5...
console.log(rolls);
console.log(rolls[0]);
console.log(rolls[3]);

 const jsk=rolls[4];
 console.log(jsk);

 let abd=67;
 abd=25;

 rolls[2]=569;
 console.log(rolls);

 //push-pop
 rolls.push(55,94)
 console.log(rolls);

 rolls.pop();
 console.log(rolls);

 const out1=rolls.pop();
 const out2=rolls.pop();
 console.log(rolls);
 console.log(out1,out2);

 //shift -unshift
 const jar=[5,7,8,23,56,78,89,97]
 jar.shift();
 console.log(jar);
 jar.unshift(67,78);
 console.log(jar);