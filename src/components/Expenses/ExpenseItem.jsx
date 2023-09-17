import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem({ title, amt, date }) {
  const [currentTitle, setTitle] = useState(title);
  // console.log("start");

  const clickHandler = () => {
    setTitle("Updated");
    // console.log(currentTitle + "j");
  };
  // console.log(currentTitle);

  return (
    <Card className="expense-item">
      <ExpenseDate FullDate={date} />
      <div className="expense-item__description">
        <p>{currentTitle}</p>
        <div className="expense-item__price">{amt} Rs</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
// export default ExpenseItem;
