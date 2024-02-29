import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [titleEntered, setTitleEntered] = useState("");
  const [amountEntered, setAmountEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");

  const titleChangeHandler = (event) => {
    setTitleEntered(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmountEntered(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateEntered(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleEntered,
      amout: amountEntered,
      date: new Date(dateEntered),
    };
    console.log(expenseData);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
