import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((e) => (
        <ExpenseItem key={e.id} title={e.title} amt={e.amount} date={e.date} />
      ))}
    </Card>
  );
}
