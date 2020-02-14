import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../stores/store'

const PayContinueBar = () => {
    const [runningTotal, setRunningTotal] = useState(null)
    const { ['payInfo']: [paySelected, setPaySelected] } = useContext(StoreContext); //global

    useEffect(() => {
        let total = 0;
        for (let v of paySelected.values()) {
            try {
                total += v.balances.activebalance
            } catch(e){
                //skip for bad balance
            }
        }
        setRunningTotal(total)
    }, [paySelected]);

    return (
        <>
            {runningTotal && 
            <div className="pay-continue-bar">
                <div>Running Total: 
                    ${runningTotal.toFixed(2)}
                </div>
                <div className="button">Continue?</div>
                <div></div>
            </div>
            }
        </>
    );
};

export default PayContinueBar;