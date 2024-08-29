let MRP =700;
const premiumCustomer = true;
if(premiumCustomer===false){
    MRP= MRP-80;
} 
else{
    MRP= MRP + 10;
}
console.log(MRP);

//used ternary
let MRPL =700;
premiumCustomerR=true;
MRPL=premiumCustomerR===true ? console.log( MRPL-80)  :  console.log(MRPL + 10);

let priceA=1600;
const supporter =false;
if( supporter){
    if(priceA >1500){
        priceA=priceA/2;   
    }
}
else{
    priceA=priceA+ 150;
}

console.log(priceA);

//ternary
let priceB=1600;
const supporterB =true;

priceB= supporterB===true ? console.log(priceB>1500?priceB/2:0) :console.log( priceB+ 150);;
