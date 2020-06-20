import React, {useState, useContext} from 'react'
import {GlobalContext} from '../contents/GlobalState';

function AddTransaction() {
  const [description, setdescription] =useState();
  const [transactionAmount, setTransactionAmount] =useState();

  //Add Transaction
  const {addTransaction} = useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      description,
      transactionAmount: +transactionAmount
    }

    addTransaction(newTransaction);
  }

    return (
      <div>
        <h3>Add New Transaction</h3>
        <form onSubmit={onSubmit}> 
          <div className="form-control">
            <label htmlFor="text">
              Description
            </label>
            <input type="text" 
                   id="description" 
                   placeholder="Detail of Transaction" 
                   value={description} 
                   onChange= {(e) => setdescription(e.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Transaction Amount
            </label>
            <input type="number" 
                   id="transactionAmount" 
                   placeholder="Enter Transaction Amount"
                   value={transactionAmount}
                   onChange= {(e) => setTransactionAmount(e.target.value)} 
            />     
          </div>
          <button className="btn">
            Add transaction
          </button>
        </form>
      </div>
    )
}

export default AddTransaction
