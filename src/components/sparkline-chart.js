import React, {useEffect, useState} from 'react';
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesCurve,  SparklinesNormalBand, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';

function boxMullerRandom () {
    let phase = false,
        x1, x2, w, z;

    return (function() {

        if (phase = !phase) {
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);

            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            return x1 * w;
        } else {
            return x2 * w;
        }
    })();
}

function randomData(n = 30) {
    return Array.apply(0, Array(n)).map(boxMullerRandom);
}


const SparklineChart = ({width, height}) => {
    const [sampleData, setSampleData] = useState([]);

    useEffect(() => {
        setSampleData(randomData(24))
    }, []);

    return (
        <Sparklines data={sampleData} svgWidth={width} svgHeight={height}>
            <SparklinesBars />
        </Sparklines>
    );
};

export default SparklineChart;