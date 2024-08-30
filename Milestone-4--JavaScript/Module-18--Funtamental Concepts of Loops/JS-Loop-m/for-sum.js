let sum=0;
for(let i=3;i<=13;i=i+1){
    sum=sum+i;
    console.log(i);
    
}
console.log('Sum of Numbers :', sum);

for(let l=9;l>=1;l=l-1){
    console.log('Decriment :',l);
}

//odd even
for(i=0;i<25;i++){
    if (i%2===1) {
        console.log(i);
        
    }
}
for(let i=0;i<21;i++){
    if (i%2!==1) {
        console.log(i);
        
    }
}
for(let i=1;i<13;i=i+2){
    console.log(i);
}
for(let i=2;i<15;i=i+2){
    
    
        console.log(i);
   
}

for(let p=1;p<=15;p=p+1){
    if (p%5===0) {
        console.log(p);
        
    }
}
for(let p=1;p<=18;p=p+1){
    if (p%5===0 || p%3===0) {
        console.log('just one or :',p);
        
    }
}
for(let m=1;m<=90;m=m+1){
    if (m%5===0 && m%3===0) {
        console.log('All verify and :',m);
        
    }
}


let s=0;
for(let k=1;k<=20;k=k+1){
    if (k%3===0) {
        console.log(k);
        s=s+k;  
    }
}
console.log("Sum : ",s);
