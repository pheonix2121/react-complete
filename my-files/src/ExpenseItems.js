import './ExpenseItems.css'


function ExpenseItems(props) {
    return (
      <div>
        <p>Amount: {props.amount}</p>
        <p>Location of Expenditure: {props.location}</p>
      </div>
    );
  }
  
  export default ExpenseItems;