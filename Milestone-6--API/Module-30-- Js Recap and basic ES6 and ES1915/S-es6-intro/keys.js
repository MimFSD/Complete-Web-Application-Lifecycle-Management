const mouse ={
    brand : 'A4tech',
    Model : 'OP-620D',
    price : 1530
}
console.log(mouse);  //{ brand: 'A4tech', Model: 'OP-620D', price: 1530 }

const k = Object.keys(mouse);  //[ 'brand', 'Model', 'price' ]
console.log(k);
const v = Object.values(mouse);  // [ 'A4tech', 'OP-620D', 1530 ]
console.log(v);
const en = Object.entries(mouse); //[ [ 'brand', 'A4tech' ], [ 'Model', 'OP-620D' ], [ 'price', 1530 ] ]
console.log(en);

// delete mouse.price; //{ brand: 'A4tech', Model: 'OP-620D' }
// console.log(mouse);

const{Model,...sdj}=mouse; //{ brand: 'A4tech', price: 1530 }
console.log(sdj);




// Object.freeze(mouse); //not change anything
// delete mouse.price;
// console.log(mouse);

Object.seal(mouse);  //Only Change Value
mouse.Model = 'RM-8756'
mouse.price =7940;
console.log(mouse); //{ brand: 'A4tech', Model: 'RM-8756', price: 7940 }