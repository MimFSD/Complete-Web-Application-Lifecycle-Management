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
    console.log(calculateMoney(10));  //300
    console.log(calculateMoney(1055));  //125700
    console.log(calculateMoney(93));  //10260
    console.log(calculateMoney(-130));  //Invalid Number
    
    
