import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  console.log("transaction",transaction);

  const sign = transaction.amount < 0 ? '-' : '+';
  localStorage.setItem('transaction', JSON.stringify(transaction));
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
