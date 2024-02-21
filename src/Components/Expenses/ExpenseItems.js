import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItems(props) {
  const deleteExpense = () => {
    //const item = document.getElementsByClassName("expesne-name");
    console.log("Cilcked Delete Button");
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
      <button onClick={deleteExpense}>Delete</button>
    </div>
  );
}
export default ExpenseItems;
