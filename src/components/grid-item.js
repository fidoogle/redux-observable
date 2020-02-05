import React from 'react';
import Status from './status'
import Type from './type'

const GridItem = ({property, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{property.name}</td>
            <td>{property.address}</td>
            <td>{property.balance}</td>
            <td><Status status={property.status}/></td>
            <td><Type type={property.type}/></td>
        </tr>
    );
};

export default GridItem;