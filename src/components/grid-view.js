import React, { useContext } from 'react'
import { StoreContext } from '../stores/store'
import GridBalance from './grid-balance'
import GridUsage from './grid-usage'
import ReactCardFlip from 'react-card-flip'


const GridView = ({properties}) => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);

    return (
        <>
            <div className="flex-css">
                <div className="content-max">
                    <ReactCardFlip isFlipped={dataApp.isFlipped} flipDirection="vertical" containerStyle={{width: '100%'}}>
                        <div className="grid-row header">
                            <div></div>
                            <div>Name</div>
                            <div>Address</div>
                            <div>Balance</div>
                            <div>Status</div>
                            <div>Type</div>
                        </div>
                        <div className="grid-row header">
                            <div></div>
                            <div>Address</div>
                            <div>Usage</div>
                            <div>Gallons</div>
                            <div>Status</div>
                            <div>Type</div>
                        </div>
                    </ReactCardFlip>
                </div>
            </div>
            {properties.length &&
                properties.map((o, index) => 
                    <React.Fragment key={o.accountkey}>
                        <ReactCardFlip isFlipped={dataApp.isFlipped} flipDirection="vertical">
                            <GridBalance property={o} index={index+1}/>
                            <GridUsage property={o} index={index+1}/>
                        </ReactCardFlip>
                    </React.Fragment>
                )
            }
        </>
    );
};

export default GridView;