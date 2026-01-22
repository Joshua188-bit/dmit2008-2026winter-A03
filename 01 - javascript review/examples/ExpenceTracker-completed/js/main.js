import theExpenses from "./expense-data.js";

const expenseContainer = document.getElementById("expense-container");

function renderExpenses(expenses) {
  const expenseList = document.getElementById("expense-list");
  expenseContainer.innerHTML = ""; // Clear existing content

  expenses.forEach((expense) => {
    expenseContainer.innerHTML += `
    <div class="card" id="${expense.id}">
              <div class="header">
                <div>
                  <div class="title">${expense.title}</div>
                  <div class="meta category">${expense.category}</div>
                </div>
                <div class="amount">${expense.amount} </div>
              </div>
              <div class="meta date">${expense.date}</div>
              <div class="actions">
                <button class="edit-btn" id=${expense.id}>Edit</button>
                <button class="delete-btn" id=${expense.id}>Delete</button>
              </div>
            </div>
    `;
  });
}
renderExpenses(theExpenses);

document
  .getElementById("expense-form-add")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    const amount = parseFloat(document.getElementById("amount").value);
    if (document.getElementById("submiter").innerText === "Add Expense") {
      if (title && category && date && !isNaN(amount)) {
        const newExpense = {
          id: theExpenses.length + 1,
          title,
          category,
          date,
          amount,
        };
        theExpenses.push(newExpense);
        renderExpenses(theExpenses);
        this.reset(); // Reset the form
      } else {
        alert("Please fill in all fields correctly.");
      }
    } else {
        const expenseId = parseInt(document.getElementById("expense-id").value);
        const expenseToEdit = theExpenses.find(
            (expense) => expense.id === expenseId
        );
        if (expenseToEdit) {
            expenseToEdit.title = title;
            expenseToEdit.category = category;
            expenseToEdit.date = date;
            expenseToEdit.amount = amount;
            this.reset(); // Reset the form
            document.getElementById("submiter").innerText = "Add Expense";
            renderExpenses(theExpenses);
        }   
    }
  });

document
  .getElementById("searchbox")
  .addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredExpenses = theExpenses.filter((expense) =>
      expense.title.toLowerCase().includes(searchTerm)
    );
    renderExpenses(filteredExpenses);
  });

expenseContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const expenseId = parseInt(event.target.id);
    const expenseIndex = theExpenses.findIndex(
      (expense) => expense.id === expenseId
    );
    if (expenseIndex !== -1) {
      theExpenses.splice(expenseIndex, 1);
      renderExpenses(theExpenses);
    }
  } else if (event.target.classList.contains("edit-btn")) {
    const expenseId = parseInt(event.target.id);
    const expenseToEdit = theExpenses.find(
      (expense) => expense.id === expenseId
    );
    if (expenseToEdit) {
      document.getElementById("title").value = expenseToEdit.title;
      document.getElementById("category").value = expenseToEdit.category;
      document.getElementById("date").value = expenseToEdit.date;
      document.getElementById("amount").value = expenseToEdit.amount;
      document.getElementById("submiter").innerText = "Save";
      document.getElementById("expense-id").value = expenseToEdit.id;
      // Handle saving the edited expense
    }
  }
});
