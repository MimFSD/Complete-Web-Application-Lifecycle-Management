// // Comparison ----   >  <  ==  >=  <=   
// logical and : && ( must all condition  true)
// logical or  : || (at least one condition true)
// logical not  : != 

console.log(5>10, 5<10, 7==5,9>=6,5<=5, 8>=8,5>=4, 13<=7, 15!=13  );

var s=25;
var r=13;
console.log(s>r ,s<r , s==r , s>=r, s<=r, s!=r);

console.log(10=='10' , 10==='10');
console.log(120 ==='tomato');
console.log(10 !='10', 10!=='10');

//if ..else if ..else  

// if (condition){ block1;}
// else if(condition) { block2}
// else{}

var burger=490;
if(burger > 500){
    console.log('free coke');
}
else{
   console.log(' coke : 30tk' );
}

//greatest number
var a=5,b=9;
if(a>b){
    console.log('greatest number : a');
}
else if(a<b){
    console.log('greatest number : b');
}
else if(a==b){
    console.log('they are equal');
}
else{
    console.log('not valid number');
}

//logical operator
const pen=5,rice=56,egg=45;
if(pen<6 && rice>50){  //( must all condition  true)
    console.log('problem for people ');
}
if(pen<6 || rice<50){ //(at least one condition true)
    console.log(' low budge people');
}
if((pen<6 && rice<50) || egg>40){
    console.log('buy only egg');
}

//discount
const price=3000;

if(price>5000){
    const discount = price* 10/100;
    const payAmount =price- discount;
    console.log(payAmount);
}
else if(price>2500){
    const discount = price* 5/100;
    const payAmount =price- discount;
    console.log(payAmount);
}
else{
    console.log(price);
}

//nested if
const money=1100;
if(money>8500){
    console.log('Start glass business');
}
else{
    if(money > 4500){
        console.log('Cap business');
    }
    else{
        if(money > 1200){
            console.log('tea business');
        }
        else{
            console.log('Nothing');
    }
}
}

const age =10;
if(age>=18){
    console.log('vote ');
}
else{
    console.log('Not vote');
}

//ternary operator
age>=18 ?     console.log('vote ') :     console.log('Not vote');

