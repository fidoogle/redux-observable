import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const CardSkeleton = () => {
    return (
        <>
            <div className="flex-card-column clip">
                <Skeleton width={170}/>
                <Skeleton variant="rect" width={130} height={22}/>
                <div className="balance clip">
                    <Skeleton variant="rect" width={200} height={44}/>
                </div>
                <div className="legend">
                    <Skeleton variant="rect" width={80} height={74} />
                </div>
                <div className="confirmation">
                    <Skeleton width={120}/>
                </div>
            </div>
            <div className="flex-card-column right clip">
                <div><Skeleton width="20px" /></div>
                <div className="chart">
                    <Skeleton variant="circle" width={140} height={140}/>
                </div>
                <div>
                    <Skeleton width="60px" height={24}/>
                </div>
            </div>
        </>
    );
};

export default CardSkeleton;