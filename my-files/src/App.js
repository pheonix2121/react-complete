import ExpenseItems from "./ExpenseItems";


const expenses = [
  { id: 1, amount: 100, LocationOfExpenditure: "Delhi" },
  { id: 2, amount: 200, LocationOfExpenditure: "Mumbai" },
  // ... and so on for 100 expenses
];

function App() {
  const locations = [
    'Delhi',
    'Mumbai',
    'Dehradun',
    // ...and so on, for 97 more items
  ];

  const expenseItems = [];
  for (let i = 0; i < 100; i++) {
    const locationIndex = i % locations.length;
    const location = locations[locationIndex];
    expenseItems.push(<ExpenseItems LocationOfExpenditure={location} key={i} />);
  }

  return (
    <div>
      {expenseItems}
    </div>
  );
}

export default App;