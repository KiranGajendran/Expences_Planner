import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  function handleIncome(e) {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
 addTransaction(newTransaction);
  }

  function handleExpences(e) {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: -Math.abs(amount)
    }
    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount<br />
           </label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div>
        <button className="btn btn-success" onClick={handleIncome}>Add Income</button>
          <button className="btn btn-danger" onClick={handleExpences}>Add Spending</button>
          </div>
      </form>
    </>
  )
}
