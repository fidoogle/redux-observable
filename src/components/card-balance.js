import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StoreContext } from '../stores/store'
import { get } from 'lodash'
import Services from '../services'
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


function CardBalance({property}) {
    const [balancesLocal, setBalancesLocal] = useState(null); //local to this component instance
    const [balancesError, setBalancesError] = useState(null);
    const [refreshThis, setRefreshThis] = useState(null);
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);
    const { ['balancesInfo']: [balances, setBalances] } = useContext(StoreContext); //global
    const { ['payInfo']: [paySelected, setPaySelected] } = useContext(StoreContext); //global

    useEffect(() => {
        setBalancesError(null)
        if (get(property, 'accountkey', null)) {
            if (!balances.get(property.accountkey) || balances.get(property.accountkey)['activebalance']==null) { //Since null == undefined is true, this catches both null and undefined
                Services.Account.fetchAccountBalances(property.accountkey).then(
                    p => {//console.log('acctnumber:', property.acctnumber, {p})
                        updateBalancesMap(property.accountkey, p)
                        updateBalancesLocal(p) //triggers re-render of this component instance only
                    },
                    e => { throw e }
                ).catch( e => { setBalancesError(e) })
            } else {
                updateBalancesLocal(balances.get(property.accountkey)) //triggers re-render of this component instance only
            }
        } else {
            setBalancesError(new Error('missing [property or accountkey'))
        }
    }, [property, refreshThis]);
    
    const clickCard = (e) => {
        e.stopPropagation()
        if (dataApp.activeLink==='payment') {
            updatePaySelectedMap(property.accountkey, property) //TODO: may reduce what we store in each selected property
        }
    }
    
    const updateBalancesMap = (k,v) => {
        setBalances(balances.set(k,v)); //if we need re-render for updates to entire Map, use setBalances(new Map(balances.set(k,v)));
    }
    const updatePaySelectedMap = (k,v) => {
        //setPaySelected(paySelected.set(k,v)); //Wrong: paySelected.set directly alters paySelected
        const paySelectedClone = new Map(paySelected)
        paySelectedClone.set(k,v)
        setPaySelected(paySelectedClone) //Right: alter via setPaySelected
    }

    const updateBalancesLocal = (p) => {
        if (balances.get(property.accountkey)['activebalance'] || balances.get(property.accountkey)['activebalance']===0) {
            setBalancesError(null)
            setBalancesLocal(p); //triggers re-render of this component instance only
        } else {
            setBalancesError(new Error('activebalance is undefined'));
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
        <div className={`flex-card ${(dataApp.activeLink==='payment') ? "pointer" : ""}`} onClick={(e) => {clickCard(e)}}>
            <div className="flex-card-row">
                <div className="flex-card-column clip">
                    <div className="account clip">Account #: {property.acctnumber}</div>
                    <div className="address">{property.address}</div>
                    <div className="balance clip">
                        {
                            balancesError ?
                                <div className="retry" onClick={(e) => setRefreshThis(Math.random)}>
                                <Tooltip title="Failed to load. Click to retry.">
                                    <span>
                                        <WarningIcon fontSize="small" style={{ color: red[500] }}/>
                                        <CachedIcon/> Retry
                                    </span>
                                </Tooltip>
                                </div>
                            :
                                (balancesLocal ?
                                    '$'+balancesLocal.activebalance+' Due'
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
        </div>
    )
}

//https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/
CardBalance.propTypes = { //TODO: define structure of property
    property: PropTypes.object.isRequired
}

export default CardBalance;