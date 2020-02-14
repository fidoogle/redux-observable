import React, { useContext } from 'react'
import { StoreContext } from '../stores/store'

const PayButtons = () => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);
    const { ['payInfo']: [paySelected, setPaySelected] } = useContext(StoreContext);
    const { ['propertyInfo']: [globalProperties, setGlobalProperties] } = useContext(StoreContext);

    const selectAll = (e, setAll) => {
        e.stopPropagation()
        if (setAll) {
            let newMap = new Map()
            globalProperties.forEach(item => { //TODO: there may be a faster way to create Map from globalProperties
                newMap.set(item.accountkey, item)
            })
            setPaySelected(newMap)
        } else {
            setPaySelected(new Map()) //clears all by creating new Map
        }
    }

    return (
        <>
            {
                dataApp.activeLink==='payment' && 
                <div className="pay-buttons">
                    <div className="content-max">
                        <div className="multiple" 
                            onClick={(e) => {selectAll(e, false)}}>
                            <div>Select Accounts</div>
                        </div>
                        <div className="all"
                            onClick={(e) => {selectAll(e, true)}}>
                            <div>Pay All Accounts</div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default PayButtons;