import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';


const GridSkeleton = () => {
    return (
        <div className="flex-css">
            <div className="content-max">
                <div className="grid-row">
                    <div></div>
                    <div><Skeleton width={'100%'}/></div>
                    <div><Skeleton width={'100%'}/></div>
                    <div><Skeleton width={'100%'}/></div>
                    <div><Skeleton width={'100%'}/></div>
                    <div><Skeleton width={'100%'}/></div>
                </div>
            </div>
        </div>
    );
};

export default GridSkeleton;