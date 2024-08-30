for(let i=4;i<=53;i=i+1){
    console.log('break :',i);
    if (i==13) {
       break; 
    }
}
for(let i=4;i<=21;i=i+1){
    if (i==13  || i==17) 
    continue;
    console.log('Continue :',i);
}

let i=54;
while(i>=23){
    console.log(i);
    if(i<=48){
        break;
    }
    i=i-1;

}
let d=72;
while(d>=65){
    if (d==68 || d==70)
    continue;
    d=d-1;
console.log(d);
}
