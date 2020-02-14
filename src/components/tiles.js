import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../stores/store'
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
        if (!globalPropertiesIntact.length) {
            //Re-login, need to get userx52id 
            //TODO: check if we have userx52id available so we don't have to relogin
            history.replace({ pathname: '/login'});
        }
        setProperties(globalProperties)
    }, [globalProperties]);

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