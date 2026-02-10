// PART 1: Create the data (arrays)
const expenses = [
    { name: "Coffee", category: "Food", amount: 5 },
    { name: "Uber Ride", category: "Transport", amount: 18 },
    { name: "Grocery Shopping", category: "Food", amount: 45 },
    { name: "Concert Ticket", category: "Entertainment", amount: 60 },
    { name: "Textbook", category: "Education", amount: 110 },
    { name: "Subway Pass", category: "Transport", amount: 3 }
];

console.log("--- All Expenses ---");
expenses.forEach(exp => {
    console.log(`${exp.name} | ${exp.category} | $${exp.amount}`);
});

const expensesWithTax = expenses.map(exp => {
    return {
        ...exp,
        amount: Number((exp.amount * 1.15).toFixed(2)) 
    };
});
console.log("\n--- Expenses with 15% Tax ---", expensesWithTax);

const foodExpenses = expenses.filter(exp => exp.category === "Food");
console.log("\n--- Food Expenses Only ---", foodExpenses);

const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
console.log(`\nTotal Amount Spent: $${totalSpent}`);

const totalFoodSpent = expenses
    .filter(exp => exp.category === "Food")
    .reduce((sum, exp) => sum + exp.amount, 0);

console.log(`Total Spent on Food: $${totalFoodSpent}`);
