import React from 'react';
import Status from './status'
import Type from './type'

const GridBalance = ({property, index}) => {
    return (
        <div className="flex-css">
            <div className="content-max">
                <div className={`grid-row ${(index%2===0) ? "even" : ""}`}>
                    <div>{index}</div>
                    <div>{property.name}</div>
                    <div>{property.address}</div>
                    <div>{property.balance}</div>
                    <div><Status status={property.status}/></div>
                    <div><Type type={property.type}/></div>
                </div>
            </div>
        </div>
    );
};

export default GridBalance;