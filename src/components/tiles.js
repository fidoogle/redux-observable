import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../stores/store'
import services from '../services'
import { get } from 'lodash'

import { useDispatch, useSelector } from "react-redux"
import { fetchData, fetchBalancesData } from '../actions'

import CardBalance from './card-balance'
import CardUsage from './card-usage'
import CardPay from './card-pay';
import CardSkeleton from './card-skeleton';
import GridSkeleton from './grid-skeleton';
import GridView from './grid-view'
import ReactCardFlip from 'react-card-flip';
import { useHistory } from "react-router-dom";

const Tiles = (props) => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);
    const { ['propertyInfo']: [globalProperties, setGlobalProperties] } = useContext(StoreContext); //global
    const { ['propertyInfoIntact']: [globalPropertiesIntact, setGlobalPropertiesIntact] } = useContext(StoreContext); //original global data
    const { ['webWorker']: [webWorker, setWebWorker] } = useContext(StoreContext);
    
    const [properties, setProperties] = useState([]); //local
    const [propertiesError, setPropertiesError] = useState(null);
    const history = useHistory();

    const userdata = useSelector(state => state.app.userdata)
    const accounts = useSelector(state => state.userAccounts.data)
    const status = useSelector(state => state.userAccounts.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData(userdata.userx52id))
        dispatch(fetchBalancesData(userdata.userx52id))
    }, []);

    const handleError = (e) => {
        //TODO: do we show an error msg on the landing page?
    }

    return (
        <>
        <div className="flex-css">
            <div className="content-max">
                {dataApp.viewAs==='tiles' &&
                    <div className="flex-card-container">
                        {status==='failure' && (
                            <div>There is an error</div>
                        )}
                        
                        {status==='success' && (
                            accounts.map((o) => 
                                <div key={o.accountkey} className="pay-card-parent">
                                    <ReactCardFlip isFlipped={dataApp.isFlipped} flipDirection="horizontal">
                                        <CardBalance property={o}/>
                                        <CardUsage property={o}/>
                                    </ReactCardFlip>
                                    <CardPay id={o.accountkey}/>
                                </div>
                            )
                        )}
                        
                        {status==='pending' && (
                            Array.from(new Array(20)).map((o, index) => 
                            <React.Fragment key={index}>
                                <CardSkeleton/>
                            </React.Fragment>
                            )
                        )}
                    </div>
                }
            </div>
        </div>
        {dataApp.viewAs==='grid' && (
            propertiesError ?
                <div>There is an error</div>
            :
            properties.length ?
                <GridView properties={properties}/>
            :
                Array.from(new Array(20)).map((o, index) => 
                    <React.Fragment key={index}>
                        <GridSkeleton/>
                    </React.Fragment>
                )
        )}
        </>
    );
};

export default Tiles;