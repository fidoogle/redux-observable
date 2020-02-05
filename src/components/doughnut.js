import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const legend = {
    display: false
}
const options = {
    cutoutPercentage: 90
}

const Component = ({data}) => {
    return (
        <div>
            <Doughnut data={data} legend={legend} options={options} width={140}/>
        </div>
    );
};

export default Component;