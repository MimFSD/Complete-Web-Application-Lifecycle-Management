const director ={
    name:"Abid",
    age : 22,
    phone : '985-34576'
}
const nc =director.age;
const pb =director.phone;

console.log(pb);
console.log(nc);
console.log(pb);
console.log(nc);

//Use destructuring
const { phone, age}=director;
console.log(phone,age);

//different name
const{phone: usa ,name : Al}=director;
console.log(usa,Al);

//array destructuring
const nm=[4,8,2,]
const[u,t,r]=nm;
console.log(t,u);

const[x,y,z]=[5,9,2]


function dt(m,n){
    return [m*2,n*2]
}
const[pm,dg]=dt(12,23);
console.log(pm,dg);
