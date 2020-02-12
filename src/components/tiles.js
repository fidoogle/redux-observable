import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { StoreContext } from '../stores/store'
import FlipMove from 'react-flip-move';
import Tile from './tile'
import {fetchProperties} from '../services/accounts'
import CardSkeleton from './card-skeleton';
import GridView from './grid-view'
import CircularProgress from '@material-ui/core/CircularProgress'


const Tiles = (props) => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);
    const { ['propertyInfo']: [globalProperties, setGlobalProperties] } = useContext(StoreContext); //global
    const { ['propertyInfoIntact']: [globalPropertiesIntact, setGlobalPropertiesIntact] } = useContext(StoreContext); //original global data
    const [properties, setProperties] = useState([]); //local
    const [propertiesError, setPropertiesError] = useState(null);

    useEffect(() => {
        if (!globalPropertiesIntact.length) {
            fetchProperties(true).then(
                p => {setGlobalProperties(p); setGlobalPropertiesIntact(p)},
                e => {setPropertiesError(e)}
            )
        }
        setProperties(globalProperties)
    }, [globalProperties]);

    return (
        <>
        <div className="flex-css">
            <div className="content-max">
                {dataApp.viewAs==='tiles' &&
                    <FlipMove className="flex-card-container">
                        {
                            propertiesError ?
                                <div>There is an error</div>
                            :
                            properties.length ?
                            properties.map((o) => 
                                <div key={o.useraccountid}>
                                    <Tile property={o} key={o.useraccountid}/>
                                </div>
                            )
                            : 
                            Array.from(new Array(20)).map((o, index) => 
                            <div className="flex-card" key={index}>
                                <CardSkeleton key={index}/>
                            </div>
                            )
                        }
                    </FlipMove>
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
                <div className="flex-css">
                    <CircularProgress size={40}/>
                </div>
        )}
        </>
    );
};

export default Tiles;