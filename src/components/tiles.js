import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../stores/store'
import Services from '../services'
import { get } from 'lodash'

import CardBalance from './card-balance'
import CardUsage from './card-usage'
import CardPay from './card-pay';
import CardSkeleton from './card-skeleton';
import GridSkeleton from './grid-skeleton';
import GridView from './grid-view'
import CircularProgress from '@material-ui/core/CircularProgress'
import ReactCardFlip from 'react-card-flip';
import { useHistory } from "react-router-dom";

const Tiles = (props) => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);
    const { ['propertyInfo']: [globalProperties, setGlobalProperties] } = useContext(StoreContext); //global
    const { ['propertyInfoIntact']: [globalPropertiesIntact, setGlobalPropertiesIntact] } = useContext(StoreContext); //original global data
    const [properties, setProperties] = useState([]); //local
    const [propertiesError, setPropertiesError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        if (!globalPropertiesIntact || !globalPropertiesIntact.length) {
            Services.User.fetchUserAccounts(get(props.p, 'userx52id', null)).then(
                //success
                p => {
                    setGlobalProperties(p); 
                    setGlobalPropertiesIntact(p);
                    //history.replace({ pathname: '/app'})
                },
                //error
                e => {
                    console.error('error getting accounts', {e})
                    throw e
                }
            ).catch((e) => { handleError(e) })
        }
        setProperties(globalProperties)
    }, [globalProperties]);

    const handleError = (e) => {
        //TODO: do we show an error msg on the landing page?
    }

    return (
        <>
        <div className="flex-css">
            <div className="content-max">
                {dataApp.viewAs==='tiles' &&
                    <div className="flex-card-container">
                        {
                            propertiesError ?
                                <div>There is an error</div>
                            :
                            properties.length ?
                            properties.map((o) => 
                                <div key={o.accountkey} className="pay-card-parent">
                                    <ReactCardFlip isFlipped={dataApp.isFlipped} flipDirection="horizontal">
                                        <CardBalance property={o}/>
                                        <CardUsage property={o}/>
                                    </ReactCardFlip>
                                    <CardPay id={o.accountkey}/>
                                </div>
                            )
                            : 
                            Array.from(new Array(20)).map((o, index) => 
                            <React.Fragment key={index}>
                                <CardSkeleton/>
                            </React.Fragment>
                            )
                        }
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