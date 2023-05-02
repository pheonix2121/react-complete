import "./ExpenseItems.css";



const ExpenseDetails=(props) => {

    return (

        <div className='expense-item__details'>

      <div className='expense-item__title'>{props.title}</div>

      <div className='expense-item__location'>{props.location}</div>

      <div className='expense-item__amount'>{props.amount}</div>

    </div>

    );

}

export default ExpenseDetails;
