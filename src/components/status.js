import React from 'react';
import CachedIcon from '@material-ui/icons/Cached';
import CheckIcon from '@material-ui/icons/Check';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const Status = ({status}) => {
    const getStatusClassNames = () => {
        let result = 'status flex-css ';
        try {
            result += status.toLowerCase()
        } catch(e) {}
        return result;
    }
    const getStatusIcon = () => {
        if (status==='Issue') return <PriorityHighIcon fontSize="small"/>
        if (status==='Pending') return <CachedIcon fontSize="small"/>
        return <CheckIcon fontSize="small"/>
    }

    return (
        <div className={getStatusClassNames()}>
            {getStatusIcon()}
            <div>{status}</div>
        </div>
    );
};

export default Status;