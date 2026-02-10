const expenses = [
    { name: "Coffee", category: "Food", amount: 5 },
    { name: "Uber Ride", category: "Transport", amount: 18 },
    { name: "Grocery Shopping", category: "Food", amount: 45 },
    { name: "Concert Ticket", category: "Entertainment", amount: 60 },
    { name: "Textbook", category: "Education", amount: 110 },
    { name: "Subway Pass", category: "Transport", amount: 3 }
];

const expensesWithTax = expenses.map(exp => ({
    ...exp,
    amount: Number((exp.amount * 1.15).toFixed(2)) 
}));

const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);

const totalFoodSpent = expenses
    .filter(exp => exp.category === "Food")
    .reduce((sum, exp) => sum + exp.amount, 0);

const resultsDiv = document.getElementById("results-container");

let displayHTML = "<h3>All Expenses</h3><ul>";
expenses.forEach(exp => {
    displayHTML += `<li>${exp.name} (${exp.category}): <strong>$${exp.amount}</strong></li>`;
});
displayHTML += "</ul>";

displayHTML += `<p><strong>Total Amount Spent:</strong> $${totalSpent}</p>`;
displayHTML += `<p><strong>Total Spent on Food (Coffee + Groceries):</strong> $${totalFoodSpent}</p>`;

resultsDiv.innerHTML = displayHTML;

console.log("Analysis Complete. Check the webpage for the full report!");
console.log("Total Spent:", totalSpent);

