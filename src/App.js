import React from 'react';
import Head from './components/Head';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import {GlobalProvider} from './contents/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
        <Head />
      <div className="container"> 
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
