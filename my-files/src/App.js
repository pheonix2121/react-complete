import ExpenseDetails from "./components/expenseItem";
import "./ExpenseItems.css";



function ExpenseItem(props) {



  return (

    <div className='expense-item'>

     

      <ExpenseDetails 

        title={props.title} 

        amount={props.amount} 

        category={props.category} 

      />

    </div>

  );

}



export default ExpenseItem;