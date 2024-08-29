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
            totalTaxableIncome +=  (arr[i]* 0.2);
        }
    }

    const totalSavings = totalIncome - totalTaxableIncome - livingCost;

    if (totalSavings < 0) {
        return "earn more";
    }

    return totalSavings;
}


console.log(monthlySavings([1000, 2000, 3000], 5400)); //  0
console.log(monthlySavings([1000, 2000, 2500], 5000)); //  500
console.log(monthlySavings([900, 2700, 3400], 10000)); //  "earn more"
console.log(monthlySavings(100, [900, 2700, 3400])); // "invalid input"
