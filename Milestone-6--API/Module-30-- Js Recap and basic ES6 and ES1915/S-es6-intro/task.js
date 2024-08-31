const af =(w,q,s)=> w*q*s;
console.log(af(5,7,2));

const t2=`I am a developer.
I love to coding.
I love to eat pizza.
`
console.log(t2);

const t3 =(x,y=3)=>x+y;
console.log(t3(7));



const t4 =['abid','Jui','Rabbi','Arif']
const gh= [];
for(const sea of t4){
    if(sea.length%2==0){
        // console.log(sea);
        gh.push(sea)

    }
}
console.log(gh);

// const t4 =['abid','Jui','Rabbi','Arif']
function car(t4){
    const gh= [];
for(const sea of t4){
    if(sea.length%2==0){
        // console.log(sea);
        gh.push(sea)

    }
}
return gh;
}
console.log(car(t4));

let sum=0;
const srt =[3,5,8]
const salt = (x)=>{
    for(const jar of x){
        console.log(jar);
        console.log(jar*jar);
        sum=sum +(jar*jar);
       
    }
    return  sum/3;
    
}


console.log(salt(srt));



const fan =(x,y)=>{
   const tech = [...x,...y]
   const max = Math.max(...tech)
   return max;
}
const t7 =[3,6,8]
const t8 =[2,11,7]
console.log(fan(t7,t8));








































// return 'Array element :', jar,'square elments :',jar*jar ,'summation of square element :', sum ,'Average of summation', average;
