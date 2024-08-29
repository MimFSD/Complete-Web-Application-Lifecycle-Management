function calculateMoney(ticketSale) {

    const daily_cost_for_security = 500;
    
    const total_lunch_cost=50*8;
    
    const daily_expense = daily_cost_for_security + total_lunch_cost;
    
    const daily_income = ticketSale* 120;
    
    const remaining_money =daily_income-daily_expense;
    
    if (ticketSale<0) {
    
    return "Invalid Number";
    
    }
    
    return remaining_money;
    
    }
    
    function checkName(name) {
    
    if (!Array.isArray(name) && typeof name === 'string') {
    
    const lastCharacter = name[name.length - 1].toLowerCase();
    
    if (lastCharacter === 'a' || lastCharacter === 'y' || lastCharacter === 'i' || lastCharacter === 'e' || lastCharacter === 'o' || lastCharacter === 'u' || lastCharacter === 'w') {
    
    return "Good Name";
    
    } else {
    
    return "Bad Name";
    
    }
    
    } else {
    
    return "invalid";
    
    }
    
    }
    
    function deleteInvalids(array) {
    
    if (!Array.isArray(array)) {
    
    return "Invalid Array";
    
    }
    
    const filteredArray = array.filter(item => typeof item === 'number' && !isNaN(item));
    
    return filteredArray;
    
    }
    
    function password(obj) {
    
    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')) {
    
    return 'invalid';
    
    }
    
    if (isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
    
    return 'invalid';
    
    }
    
    const capitalizedSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    
    const generatedPassword = `${capitalizedSiteName}#${obj.name}@${obj.birthYear}`;
    
    return generatedPassword;
    
    }
    
    function monthlySavings(arr , livingCost) {
    
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
    
    return "invalid input";
    
    }
    
    let totalIncome = 0;
    
    for (let i = 0; i < arr.length; i++) {
    
    totalIncome += arr[i];
    
    }
    
    let totalTaxableIncome = 0;
    
    for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] >= 3000) {
    
    totalTaxableIncome += (arr[i]* 0.2);
    
    }
    
    }
    
    const totalSavings = totalIncome - totalTaxableIncome - livingCost;
    
    if (totalSavings < 0) {
    
    return "earn more";
    
    }
    
    return totalSavings;
    
    }

    console.log(calculateMoney(10));  //300
    console.log(calculateMoney(1055));  //125700
    console.log(calculateMoney(93));  //10260
    console.log(calculateMoney(-130));  //Invalid Number

    console.log(checkName("Salman")); // bad Name
console.log(checkName("RAFEE")); // Good Name
console.log(checkName("Jhankar")); // Bad Name
console.log(checkName(["Rashed"])); // "invalid"
console.log(checkName(199)); // invalid

console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); // [ 1, 18, -19 ]
console.log(deleteInvalids(["1" , {num:2} , NaN ])); // []
console.log(deleteInvalids([ 1 , 2 , -3 ])); //[ 1 , 2 , -3 ]
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]})); //“Invalid Array”

console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" })); // Google#kolimuddin@1999
console.log(password({ name: "rahat" , birthYear: 2002, siteName: "Facebook" })); // Facebook#rahat@2002
console.log(password({ name: "toky" , birthYear: 200, siteName: "Facebook" })); // invalid
console.log(password({ name: "maisha" , birthYear: 2002 })); // invalid"



console.log(monthlySavings([1000, 2000, 3000], 5400)); //  0
console.log(monthlySavings([1000, 2000, 2500], 5000)); //  500
console.log(monthlySavings([900, 2700, 3400], 10000)); //  "earn more"
console.log(monthlySavings(100, [900, 2700, 3400])); // "invalid input"
