import { useState } from "react";
import Expenses from "./components/Expenses";

function App() {
  return (
    <div>
      <header>Expense Tracker App</header>
      <Expenses />
    </div>
  );
}

export default App;
