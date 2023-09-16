export default function ExpenseDate({ FullDate }) {
  const date = FullDate.getDate();
  const month = FullDate.toLocaleString("en-US", { month: "short" });
  const year = FullDate.getFullYear();

  return (
    <div className="expense-item__date">
      <h2>{date}</h2>
      <h2>{month}</h2>
      <h3>{year}</h3>
    </div>
  );
}
