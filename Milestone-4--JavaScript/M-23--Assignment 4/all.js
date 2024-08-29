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
            totalTaxableIncome +=  (arr[i]* 0.2);
        }
    }

    const totalSavings = totalIncome - totalTaxableIncome - livingCost;

    if (totalSavings < 0) {
        return "earn more";
    }

    return totalSavings;
}