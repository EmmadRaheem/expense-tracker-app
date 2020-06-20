import React, { useContext } from 'react';
//Import Global Provider
import {GlobalContext} from '../contents/GlobalState';

import {Transaction} from './Transaction';
export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);


    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                    )
                )}
            </ul>        
        </div>
    )
}

export default TransactionList;
