import React from 'react';
import Status from './status'
import Type from './type'
import SparklineChart from './sparkline-chart'

const GridUsage = ({property, index}) => {
    return (
        <div className="flex-css">
            <div className="content-max">
            <div className={`grid-row ${(index%2===0) ? "even" : ""}`}>
                    <div>{index}</div>
                    <div>{property.address}</div>
                    <div><SparklineChart width={200} height={30}/></div>
                    <div>-78</div>
                    <div><Status status={property.status}/></div>
                    <div><Type type={property.type}/></div>
                </div>
            </div>
        </div>
    );
};

export default GridUsage;