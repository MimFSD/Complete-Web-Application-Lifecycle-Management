const x = 'Abid'
const y = 'Hasan'
const z = 'Mim'

const name = x + " " +y + " " +z;
console.log(name); //Abid Hasan Mim

const nam = `${x} ${y} ${z}` //Abid Hasan Mim
console.log(nam);

const m=2,n=3;
const sum= 'The sum of ' + m +' and '+ n + ' is '+(m+n);
console.log(sum); //The sum of 2 and 3 is 5

const summ = `The sum of ${m} and ${n} is  ${m+n}`
console.log(summ); //The sum of 2 and 3 is  5


const v =[2,5,8,6,11]
const pv = `The sub of ${v[4]} to ${v[1]} is ${v[4]-v[1]}`
console.log(pv); //The sub of 11 to 5 is 6

const q= [2,3,4]
const s ={
    id :404,
    name : 'Faruk' ,
    age : 43
}
const mg =`${s.name} score ${q[2]} not to be ${q[0]+s.age}`
console.log(mg); //Faruk score 4 not to be 45


const rd ="amid hasan \n offer to \n success"
console.log(rd);
const sd = `amid hasan
offer to
success`
console.log(sd); 
 //amid hasan
// offer to
// success
// PS C:\project