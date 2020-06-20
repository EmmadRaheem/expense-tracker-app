import React, {useContext} from 'react'

import {GlobalContext} from '../contents/GlobalState';

export const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext);

  const transactionAmount = transactions.map(transaction => transaction.transactionAmount);

  const Income = transactionAmount
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2)

  const Expense = (transactionAmount
  .filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0)*-1)
  .toFixed(2);

    return (
        <div className="inc-exp-container"> 
          <div>
            <h4>Income</h4>
            <p className="money plus">${Income}</p>
          </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${Expense}</p>
        </div>
      </div>
    )
}
export default IncomeExpense;