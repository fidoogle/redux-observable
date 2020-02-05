import React from 'react';
import Status from './status'
import Type from './type'
import FlipMove from 'react-flip-move';


const GridView = ({properties}) => {
    return (
        <>
            <div className="flex-css">
                <div className="content-max">
                <div className="grid-row header">
                        <div></div>
                        <div>Name</div>
                        <div>Address</div>
                        <div>Balance</div>
                        <div>Status</div>
                        <div>Type</div>
                    </div>
                </div>
            </div>
            <FlipMove>
            {properties.length &&
                properties.map((o, index) => 
                    <div className="flex-css" key={o.id}>
                        <div className="content-max">
                        <div className={`grid-row ${(index%2===0) ? "even" : ""}`}>
                                <div>{index}</div>
                                <div>{o.name}</div>
                                <div>{o.address}</div>
                                <div>{o.balance}</div>
                                <div><Status status={o.status}/></div>
                                <div><Type type={o.type}/></div>
                            </div>
                        </div>
                    </div>
                )}
            </FlipMove>
        </>
    );
};

export default GridView;