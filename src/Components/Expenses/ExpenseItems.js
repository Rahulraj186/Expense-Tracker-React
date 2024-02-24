import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItems(props) {
  const [amount, setTitle] = useState(props.amount);
  //console.log("ExpenseItem is evaluated By React");

  const changeAmount = () => {
    setTitle("$100");
    console.log(amount);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={amount}
      />
      <button onClick={changeAmount}>Change Amount</button>
    </div>
  );
}
export default ExpenseItems;
