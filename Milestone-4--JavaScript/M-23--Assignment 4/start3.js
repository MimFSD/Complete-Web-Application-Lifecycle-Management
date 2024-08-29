function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }
    
    const filteredArray = array.filter(item => typeof item === 'number' && !isNaN(item));

    return filteredArray;
}

console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); // [ 1, 18, -19 ]
console.log(deleteInvalids(["1" , {num:2} , NaN ])); // []
console.log(deleteInvalids([ 1 , 2 , -3 ])); //[ 1 , 2 , -3 ]
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]})); //“Invalid Array”
