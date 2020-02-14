import React, { useContext } from 'react'
import { StoreContext } from '../stores/store'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const CardPay = ({id}) => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);
    const { ['payInfo']: [paySelected, setPaySelected] } = useContext(StoreContext); //global

    const removeFromPay = (e) => {
        e.stopPropagation()
        removeFromPaySelectedMap(id)
    }

    const removeFromPaySelectedMap = (k) => {
        //setPaySelected(paySelected.delete(k)); //Wrong: paySelected.delete directly alters paySelected
        const paySelectedClone = new Map(paySelected)
        paySelectedClone.delete(k)
        setPaySelected(paySelectedClone) //Right: alter via setPaySelected
    }

    return (
        <>
            {
                dataApp.activeLink==='payment' && paySelected.has(id) &&
                <div className="flex-card pay-card"
                    onClick={(e) => {removeFromPay(e)}}>
                    <div className="flex-card-column center pay-card-content">
                        <CheckCircleIcon style={{ fontSize:'100px' }}/>
                        <div>Selected</div>
                    </div>
                </div>
            }
        </>
    );
};

export default CardPay;