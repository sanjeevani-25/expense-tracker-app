export default function ExpenseDate({ FullDate }) {
  const date = FullDate.getDate();
  const month = FullDate.toLocaleString("en-US", { month: "short" });
  const year = FullDate.getFullYear();

  return (
    <div className="expense-item__date">
      <span>{date}</span>
      <span>{month}</span>
      <span className="yr">{year}</span>
    </div>
  );
}
