import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmt, setNewAmt] = useState("");
  const [newDate, setNewDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     newTitle: "",
  //     newAmt: "",
  //     newDate: "",
  //   });

  const titleChangeHandler = (e) => {
    // best way to handle
    setNewTitle(e.target.value);

    // 2nd type might give some problem when multiple states are changesd at same time , states are scheduled and if the other states aren't updated before new state is updated it might be a problem
    // setUserInput({
    //   ...userInput,
    //   newTitle: e.target.value,
    // });

    // 3rd type for ensuring that state schedules in 2nd type are handles in this case
    // setUserInput((prevState)=>{
    //     ...prevState,
    //     newTitle: e.target.value,
    //   });
  };
  const amountChangeHandler = (e) => {
    setNewAmt(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   newAmt: e.target.value,
    // });
  };
  const dateChangeHandler = (e) => {
    setNewDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   newDate: e.target.value,
    // });
  };

  //   const inputChangeHandler = (identifier, value) => {
  //     if (identifier === "title") {
  //       setNewTitle(value);
  //     } else if (identifier === "date") {
  //       setNewDate(value);
  //     } else {
  //       setNewAmt(value);
  //     }
  //   };

  const submitHandler = (event) => {
    // default js behanviour --> request is sent which reloads the page
    event.preventDefault(); //this will prevent page reload
    const newExpenseData = {
      title: newTitle,
      amount: newAmt,
      date: new Date(newDate),
    };

    // two-way binding
    setNewTitle("");
    setNewDate("");
    setNewAmt("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_ctrl">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChangeHandler} />
          {/* <input
            type="text"
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          /> */}
        </div>
        <div className="new-expense_ctrl">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={newAmt}
          />
        </div>
        <div className="new-expense_ctrl">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            value={newDate}
          />
        </div>
        <div className="new-expense_action">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
