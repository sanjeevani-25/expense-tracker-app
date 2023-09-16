import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

export default function ExpenseItem({ title, amt, date }) {
  return (
    <Card className="expense-item">
      <ExpenseDate FullDate={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amt}</div>
      </div>
    </Card>
  );
}
