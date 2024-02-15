const saveLocalBudget = (budget) => {
    localStorage.setItem("budgetKey", JSON.stringify(budget));
}

const getLocalBudget = () => {
    let localBudgetData = localStorage.getItem("budgetKey");

        return JSON.parse(localBudgetData);
}

const saveLocalExpense = (expense) => {
    
    let expenses = getLocalExpense();

    expenses.push(expense);

    localStorage.setItem("expenseKey", JSON.stringify(expenses));
}

const getLocalExpense = () => {
    let localExpenseData = localStorage.getItem("expenseKey");

    if(localExpenseData == null){
        return [];
    }
        return JSON.parse(localExpenseData);
}


const saveLocalExpenseNum = (number) => {
    console.log(number);
    let expenseNums = getLocalExpenseNum();

    expenseNums.push(number);

    localStorage.setItem("expenseNumKey", JSON.stringify(expenseNums));
}

const getLocalExpenseNum = () => {
    let localExpenseNumData = localStorage.getItem("expenseNumKey");

    if(localExpenseNumData == null){
        return [];
    }
        return JSON.parse(localExpenseNumData);
}




    

export { saveLocalBudget, getLocalBudget, saveLocalExpense, getLocalExpense, getLocalExpenseNum, saveLocalExpenseNum }
