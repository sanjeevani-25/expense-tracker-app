import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  // onSaveExpenseData --> is a prop which connects new data from ExpenseForm component to the expenses array in app.jsx via this NewExpense component --> parent child relationship

  const saveExpenseDataHandler = (enteredData) => {
    const eexpenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
  };
  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
