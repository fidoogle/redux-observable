import React from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Tooltip from '@material-ui/core/Tooltip';

const Type = ({type}) => {
    return (
        <div>
            {type==='creditcard' && 
                <Tooltip title="Credit Card">
                    <span>
                        <CreditCardIcon fontSize="small"/>
                    </span>
                </Tooltip>
            }
            
            {type==='checking' && 
                <Tooltip title="Checking">
                    <span>
                        <AccountBalanceIcon fontSize="small"/>
                    </span>
                </Tooltip>
            }
        </div>
    )
};

export default Type;