import React, { useContext, useState } from 'react';
import { StoreContext } from '../stores/store'

import SortIcon from '@material-ui/icons/Sort'
import orange from '@material-ui/core/colors/orange'
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';


const Search = () => {
    const [amountAscending, setAmountAscending] = useState(false);
    const [streetAscending, setStreetAscending] = useState(false);
    const [selectedType, setSelectedType] = useState('all');
    const { ['propertyInfo']: [globalProperties, setGlobalProperties] } = useContext(StoreContext);
    const { ['propertyInfoIntact']: [globalPropertiesIntact, setGlobalPropertiesIntact] } = useContext(StoreContext); //original global data
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);

    const filterByType = (e) => {
        setSelectedType(e.target.value)
        let temp = [...globalPropertiesIntact] //clone, avoids mutating state directly, always start with original data
        setGlobalProperties(
            temp.filter(o => {
                if (e.target.value==='all') return true;
                return (o.type===e.target.value);
            })
        )
    }
    const sortAmount = (e) => {
        e.stopPropagation()
        let temp = [...globalProperties] //clone, avoids mutating state directly
        if (amountAscending) {
            temp.sort((a, b) => {
                try {
                    return a.balance - b.balance
                } catch(err) {
                    return 0
                }
            });
        } else {
            temp.sort((a, b) => {
                try {
                    return b.balance - a.balance
                } catch(err) {
                    return 0
                }
            });
        }
        setGlobalProperties(temp)
        setAmountAscending(!amountAscending)
    }
    const sortStreet = (e) => {
        e.stopPropagation()
        let temp = [...globalProperties] //clone, avoids mutating state directly
        if (streetAscending) { 
            temp.sort((a, b) => {
                try {
                    const streetA = a.address.toUpperCase().split(' ')[1]
                    const streetB = b.address.toUpperCase().split(' ')[1]
                    if (streetA > streetB) { return 1 }
                    else if (streetA < streetB) { return -1 }
                    return 0
                } catch(err) {
                    return 0
                }
            });
        } else {
            temp.sort((a, b) => {
                try {
                    const streetA = a.address.toUpperCase().split(' ')[1]
                    const streetB = b.address.toUpperCase().split(' ')[1]
                    if (streetA > streetB) { return -1 }
                    else if (streetA < streetB) { return 1 }
                    return 0
                } catch(err) {
                    return 0
                }
            });
        }
        setGlobalProperties(temp)
        setStreetAscending(!streetAscending)
    }
    const viewAs = (e, view) => {
        e.stopPropagation()
        setDataApp({...dataApp, viewAs: view})
    }

    return (
        <form>
        <div className="search">
            <div className="content-max search-border">
                <div className="search-option">
                    <div className="search-top">
                        Search by:
                    </div>
                    <div className="search-bottom">
                        <div>Sort</div>
                        <div className="search-row">
                            <div onClick={(e) => {sortAmount(e)}} className="search-row sort">
                                Amount &nbsp;<SortIcon fontSize="small" style={{ color: orange[700] }}/>
                            </div>
                            <div className="spacer">&nbsp;</div>
                            <div onClick={(e) => {sortStreet(e)}} className="search-row sort">
                                Street Name &nbsp;<SortIcon fontSize="small" style={{ color: orange[700] }}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="search-option">
                    <div className="search-top">
                        &nbsp;
                    </div>
                    <div className="search-bottom">
                        <div>Type</div>
                        <div className="search-row">
                        <div className="search-row">
                                <input 
                                    name="type" 
                                    type="radio" 
                                    value="checking"
                                    checked={selectedType==='checking'}
                                    onChange={filterByType}
                                />Checking
                            </div>
                            <div className="spacer">&nbsp;</div>
                            <div className="search-row">
                                <input 
                                    name="type" 
                                    type="radio" 
                                    value="creditcard"
                                    checked={selectedType==='creditcard'}
                                    onChange={filterByType}
                                />Credit Card
                            </div>
                            <div className="spacer">&nbsp;</div>
                            <div className="search-row">
                                <input 
                                    name="type" 
                                    type="radio" 
                                    value="all"
                                    checked={selectedType==='all'}
                                    onChange={filterByType}
                                />All
                            </div>
                        </div>
                    </div>
                </div>

                <div className="search-option">
                    <div className="search-top">
                        &nbsp;
                    </div>
                    <div className="search-bottom">
                        <div>Amount</div>
                        <div className="search-row">
                            <input type="text" placeholder="$"/> to &nbsp; &nbsp;<input type="text" placeholder="$"/>
                        </div>
                    </div>
                </div>

                <div className="search-option">
                    <div className="search-top">
                        <div>&nbsp;</div>
                        <div className="flex-css">
                            <div className="flex-css pointer" 
                                onClick={(e) => {viewAs(e, 'tiles')}} 
                                style={{ color: (dataApp.viewAs==='tiles')? orange[700]:''}}>
                                <AppsIcon /> Tile View&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="flex-css pointer" 
                                onClick={(e) => {viewAs(e, 'grid')}} 
                                style={{ color: (dataApp.viewAs==='grid')? orange[700]:''}}>
                                <ListIcon /> Grid View
                            </div>
                        </div>
                    </div>
                    <div className="search-bottom">
                        <div>Status</div>
                        <div className="search-row">
                            <div className="search-row"><input type="checkbox"/>Received</div>
                            <div className="spacer">&nbsp;</div>
                            <div className="search-row"><input type="checkbox"/>Pending</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    );
};

export default Search;