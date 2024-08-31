// let — block scope 
// var — function scope
// const —  never change

const pen=54;
// pen=7;
console.log(pen);  // Error  //Constant can not change 

const learn = pen +16;
console.log(learn); // 70  //Perfectly run

let point = 7;
point=13;
console.log(point); //13

let car = 5;
car = car +4;
console.log(car); //9


let ar = [6,13,3,9,17]
ar=[6,12,25,15,9]
console.log(ar);  //[6,12,25,15,9]

const air = [6,13,3,9,17]
//  air=[6,12,25,15,9]
console.log(air);  //Error

//const ---- In array , can not resign but Change the internal numbers
const jar = [6,13,3,9,17]
jar[2]=54763;
console.log(jar);  //[ 6, 13, 54763, 9, 17 ]

const war = [4,3,7,9,13]
war.push(15,32,98)
 console.log(war);  
// [ 4,  3,  7,  9,13, 15, 32, 98  ]

const pet =[43,65,76,34]
pet.pop()
console.log(pet); //[ 43, 65, 76 ]


// object 

const learner = {
    name : "Mim Islam" ,
    level :3, 
    semester :2
}
console.log(learner);
//{ name: 'Mim Islam', level: 3, semester: 2 }

const learners = {
    name : "Mim Islam" ,
    EXpert : "developer",
    Build  : 23
}

learners.name ="Abid Hasan";
console.log(learners);
//{ name: 'Abid Hasan', EXpert: 'developer', Build: 23 }


//Loop
let s=0;
for (let x = 0; x < 12; x++) {
    s = s+x;}
console.log(s) ;  //66