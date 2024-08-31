const b = Math.min(45,36,86,23,93,34)
console.log(b);

const p =[3,5,4,7,9]
console.log(p);

const q =[3,5,4,7,9]
const  vg = Math.max(q) ;
console.log(vg);  //NaN


const pu =[98,75,187,34,17,39]
const  ng = Math.max(...pu) ;
console.log(ng);  //187

const dm = [3,7,2,8]
const fc = dm;
const spl = [...fc]
dm.push(87);
console.log(dm);
console.log(spl);
console.log(fc);