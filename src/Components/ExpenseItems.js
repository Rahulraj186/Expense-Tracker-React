import "./ExpenseItems.css";
function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <div>
          <h2>{props.location}</h2>
        </div>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItems;
