import React, { useContext } from 'react'
import { StoreContext } from '../stores/store'

const PayButtons = () => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);
    const { ['propertyInfo']: [globalProperties, setGlobalProperties] } = useContext(StoreContext); //global

    const selectAll = (e, setAll) => {
        e.stopPropagation()
        if (setAll) {
            const selected = globalProperties.map( o => o.id)
            setDataApp({...dataApp, payMultiple: selected})
        } else {
            setDataApp({...dataApp, payMultiple: []})
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