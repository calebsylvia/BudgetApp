import { saveLocalBudget, getLocalBudget, saveLocalExpense, getLocalExpense, saveLocalExpenseNum, getLocalExpenseNum } from "./ls.js";

let budget = document.getElementById("budget");
let submitBudgetBtn = document.getElementById("submitBudgetBtn")
let expense = document.getElementById("expense");
let number = document.getElementById("number");
let submitExpenseBtn = document.getElementById("submitExpenseBtn");
let expenseModal = document.getElementById("expenseModal");
let budgetDisplay = document.getElementById("budgetDisplay");
let expenseDiv = document.getElementById("expenseDiv");



let budgetNum;
let expenseNames = [];
let expenseNums = [];

submitBudgetBtn.addEventListener('click', () => {
    saveLocalBudget(budget.value);
    budget.value = "";
    displayBudget();
})

submitExpenseBtn.addEventListener('click', () => {
    budgetNum = getLocalBudget()

    saveLocalBudget(Math.round(budgetNum - number.value));
    saveLocalExpense(expense.value);
    saveLocalExpenseNum(Math.round(number.value));
    expense.value = "";
    number.value = "";

    displayExpenses();
    displayBudget();
})

const displayBudget = () => {
    budgetNum = getLocalBudget();
    if(budgetNum === null){
        return;
    }else if(budgetNum <= 0){
        alert("You spent way too much chill out and update budget");
    }
    budgetDisplay.innerText = `$${budgetNum}`;
}

const displayExpenses = () => {
    if(expenseNames === null && expenseNums === null){
        return;
    }
    expenseDiv.innerHTML = "";
    expenseModal.innerHTML = "";
    expenseNames = getLocalExpense();
    expenseNums = getLocalExpenseNum();

    expenseNames.forEach((expense, index) => {
        const display = expenseNums[index];

        budgetNum = getLocalBudget();
        
        let div = document.createElement("div");
        let expName = document.createElement("p");
        let expNum = document.createElement("p");

        let modalDiv = document.createElement("div");
        let modalExpName = document.createElement("p");
        let modalNum = document.createElement("p");
        let removeBtn = document.createElement("button");


        modalDiv.className = "text-2xl text-center flex justify-between mx-5 py-2";
        modalExpName.innerText = expense;
        modalNum.innerText = `$${display}`;
        removeBtn.type = "button";
        removeBtn.textContent = "Remove"
        removeBtn.className = "text-black bg-black font-medium border-black border-2 border-solid rounded-full text-lg px-2 py-1 text-center me-2 mb-2";
        
        removeBtn.addEventListener('click', () => {

            saveLocalBudget(budgetNum + parseInt(display));
            displayBudget();

            let newdiv = document.createElement("div");
            let newexpName = document.createElement("p");
            let newexpNum = document.createElement("p"); 

            newdiv.className = "text-2xl text-center flex justify-between mx-5 py-2";
            newexpName.innerText = expense;
            newexpNum.innerText = `+$${display}`

            newdiv.appendChild(newexpName);
            newdiv.appendChild(newexpNum);
            expenseDiv.append(newdiv);

            modalDiv.remove();
        });

        div.className = "text-xl text-center flex justify-between mx-5 py-2";
        expName.innerText = expense;
        expNum.innerText = `-$${display}`;


        modalDiv.appendChild(modalExpName);
        modalDiv.appendChild(modalNum);
        modalDiv.appendChild(removeBtn);
        expenseModal.append(modalDiv);
        div.appendChild(expName);
        div.appendChild(expNum);
        expenseDiv.append(div);
    });
    
}




displayBudget();
window.onload(displayExpenses());









