const friends=['abid','azim','Sumi',"soikot",'Surzo']
console.log(friends.includes('azim')); // Have or have not //true or false
console.log(friends.includes('Arafat')); //false

if (friends.includes('Surzo')) {
    console.log("Go to academy");
    
} else {
    console.log('Go to Home');
    
}

console.log(friends.indexOf('soikot')); //3
console.log(friends.indexOf('Balam')); //-1

const keys='runtech from IND';
const lol=[];
console.log(Array.isArray(friends)); //true
console.log(Array.isArray(keys)); //false
console.log(Array.isArray(lol)); //true
//join 
console.log(friends.join(' * '));
console.log(friends.join(' + '));
console.log(friends.join(' - '));
console.log(friends.join(' /'));
console.log(friends.join()); //Show comma
console.log(friends.join('  | '));
console.log(friends.join(' ~'));

//concat()

const board=["Dhaka",'Rajshahi','Dinajpur','Comilla']
const New_board=['Barishal','Chittagong','Josshor']
console.log(board.concat(New_board));

//Slice()
const Players=[23,67,45,60,83,17,25]
console.log(Players.slice(2,5)); //index 2 to 4 ---before 5