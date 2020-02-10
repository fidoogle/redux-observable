import React, { useContext, useLayoutEffect, useState } from 'react'
import { StoreContext } from '../stores/store'
import { get } from 'lodash'
import { fetchAccountBalances, fetchBalance } from '../services/accounts'
import Doughnut from './doughnut'
import Status from './status'

//Material UI
import CircularProgress from '@material-ui/core/CircularProgress'
import CachedIcon from '@material-ui/icons/Cached';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import WarningIcon from '@material-ui/icons/Warning';
import Tooltip from '@material-ui/core/Tooltip';
import Skeleton from '@material-ui/lab/Skeleton';

//Material Colors
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';


function Tile({property}) {
    const [balances, setBalances] = useState(null);
    const [balanceError, setBalancesError] = useState(null);
    const [refreshThis, setRefreshThis] = useState(null);
    const { ['propertyInfo']: [globalProperties, setGlobalProperties] } = useContext(StoreContext); //global
    const { ['propertyInfoIntact']: [globalPropertiesIntact, setGlobalPropertiesIntact] } = useContext(StoreContext); //original global data

    useLayoutEffect(() => {
        setBalancesError(null)
        if (get(property, 'accountkey', null)) {
            fetchAccountBalances(property.accountkey).then(
                p => {
                    setBalances(p); 
                    mergeAccountBalances(property.accountkey, p)
                }, // TODO merge into global properties store
                e => {setBalancesError(e)}
            ).catch( e => { throw e; setBalancesError(e); })
        }
    }, [property, refreshThis]);

    
    const mergeAccountBalances = (accountkey, balances) => {
        //Original
        let foundIndex = globalPropertiesIntact.findIndex( o => o.accountkey == accountkey )
        if (foundIndex!==-1) {
            let newObj = {...globalPropertiesIntact[foundIndex], ...balances} //creates new object with original values plus the new balances
            let temp = [...globalPropertiesIntact] //clones globalPropertiesIntact
            temp.splice(foundIndex, 1, newObj) //replaces object at globalPropertiesIntact[foundIndex] with newObj
            setGlobalPropertiesIntact(temp)
        }
        //Working
        foundIndex = globalProperties.findIndex( o => o.accountkey == accountkey )
        if (foundIndex!==-1) {
            let newObj = {...globalProperties[foundIndex], ...balances} //creates new object with original values plus the new balances
            let temp = [...globalProperties] //clones globalPropertiesIntact
            temp.splice(foundIndex, 1, newObj) //replaces object at globalPropertiesIntact[foundIndex] with newObj
            setGlobalProperties(temp)
        }
    }

    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };
    const data = {
        labels: [
            'Water',
            'Sewer',
            'Fees'
        ],
        datasets: [{
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
            backgroundColor: [
            '#0e7bb3',
            '#379932',
            '#e68a47'
            ],
            hoverBackgroundColor: [
            '#3d7ee6',
            '#33e621',
            '#efae0e'
            ]
        }]
    };

    return (
        <div className="flex-card">
                <div className="flex-card-column clip">
                    <div className="account clip">Account #: {property.acctnum}</div>
                    <div className="address">{property.address}</div>
                    <div className="balance clip">
                        {
                            balanceError ?
                                <div className="retry" onClick={(e) => setRefreshThis(Math.random)}>
                                <Tooltip title="Failed to load. Click to retry.">
                                    <span>
                                        <WarningIcon fontSize="small" style={{ color: red[500] }}/>
                                        <CachedIcon/> Retry
                                    </span>
                                </Tooltip>
                                </div>
                            :
                                (balances ?
                                    '$'+balances.activebalance+' Due'
                                : 
                                    <Skeleton variant="rect" width={200} height={44}/>
                                )
                        }
                    </div>
                    <div className="legend" style={{height: 66}}>
                        {/* <div><FiberManualRecordIcon fontSize="small" style={{ color: lightBlue[800] }}/> Water</div>
                        <div><FiberManualRecordIcon fontSize="small" style={{ color: green[600] }}/> Sewer</div>
                        <div><FiberManualRecordIcon fontSize="small" style={{ color: orange[700] }}/> Fees</div> */}
                    </div>
                    <div className="confirmation">
                        Confirmation #: 7577471
                    </div>
                </div>
                <div className="flex-card-column right clip">
                    <div><MoreHorizIcon style={{ color: grey[400] }}/></div>
                    <div className="chart">
                        <div className="doughnut-middle">
                            {10*randomScalingFactor()}
                            <div className="bottom">Gallons Used<br/>This Month</div>
                        </div>
                        <Doughnut data={data}/>
                    </div>
                    <Status status={property.status}/>
                </div>
            
        </div>
    )
}

export default Tile;