import React, {useContext} from 'react';

import {GlobalContext} from '../contents/GlobalState';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const transactionAmount = transactions.map(transaction => transaction.transactionAmount);
    const totalAmount = transactionAmount.reduce((acc, item) => (acc += item),0).toFixed(2);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${totalAmount}</h1>            
        </div>
    )
}
export default Balance;