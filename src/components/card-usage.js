import React, {useContext} from 'react'
import { StoreContext } from '../stores/store'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import grey from '@material-ui/core/colors/grey'
import Status from './status'
import SparklineChart from './sparkline-chart'

const CardUsage = ({property}) => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);
    const { ['balancesInfo']: [balances, setBalances] } = useContext(StoreContext); //global
    const { ['payInfo']: [paySelected, setPaySelected] } = useContext(StoreContext); //global

    const clickCard = (e) => {
        e.stopPropagation()
        if (dataApp.activeLink==='payment') {
            if (dataApp.activeLink==='payment') {
                updatePaySelectedMap(property.accountkey, {
                    //TODO: may redefine what we store in each selected property
                    acctnumber: property.acctnumber,
                    useraccountid: property.useraccountid,
                    balances: balances.get(property.accountkey)
                })
            }
        }
    }

    const updatePaySelectedMap = (k,v) => {
        //setPaySelected(paySelected.set(k,v)); //Wrong: paySelected.set directly alters paySelected
        const paySelectedClone = new Map(paySelected)
        paySelectedClone.set(k,v)
        setPaySelected(paySelectedClone) //Right: alter via setPaySelected
    }

    return (
        <div className={`flex-card ${(dataApp.activeLink==='payment') ? "pointer" : ""}`} onClick={(e) => {clickCard(e)}}>
            <div className="flex-card-row">
                <div className="address">{property.address}</div>
                <div><MoreHorizIcon style={{ color: grey[400] }}/></div>
            </div>
            <div className="flex-card-row">
                <div className="usage-trend">Usage Trend</div>
            </div>
            <div className="flex-card-row">
                <div className="gallons clip">
                    -78 gal
                </div>
                <div className="from-last-month">
                    from last month
                </div>
            </div>
            <div className="flex-card-row">
                <div className="trend-chart">
                    <SparklineChart width={350} height={60}/>
                </div>
            </div>
            <div className="flex-card-row">
                <div></div>
                <Status status={property.status}/>
            </div>
        </div>
    );
};

export default CardUsage;