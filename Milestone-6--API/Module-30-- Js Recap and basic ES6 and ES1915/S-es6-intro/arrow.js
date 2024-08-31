// function declaration 
function key(g,h) {
    const mul = g*h;
    return mul ;
}
 const srt = key(5,7)
 console.log(srt); //35


 function board(p,q){
    return p*q;
 }
console.log(board(4,5)); //20

// function expression
 const wv = function (p,q){ 
    return p*q;
}
console.log(wv(7,8)); //56

//arrow function
 const dv = (s,g)=>s*g;
console.log(dv(7,4));  //28

const fb =(x,y,z)=>x+y+z;
console.log(fb(7,4,2));  //13

const ig = (j)=> j*j ;
console.log(ig(8)); //8^2 = 64

