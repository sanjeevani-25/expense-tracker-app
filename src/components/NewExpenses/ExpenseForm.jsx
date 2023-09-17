import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form action="">
      <div className="new-expense_controls">
        <div className="new-expense_ctrl">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense_ctrl">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense_ctrl">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2025-12-31" />
        </div>
        <div className="new-expense_action">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
