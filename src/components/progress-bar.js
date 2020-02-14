import React, { useContext, useState } from 'react';
import { StoreContext } from '../stores/store'
import LinearProgress from '@material-ui/core/LinearProgress';

//For now this progress bar is used for waiting on fetchUserAccounts but can be refactored for reused for other requests
const ProgressBar = () => {
    const [percentComplete, setPercentComplete] = useState(0);
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);
    const { ['propertyInfoIntact']: [globalPropertiesIntact, setGlobalPropertiesIntact] } = useContext(StoreContext); //original global data
    
    const completed = () => {
        try{
            return dataApp.completedBalances/globalPropertiesIntact.length * 100
        } catch(e) {
            return 0
        }
    }
    return (
        <div className="progress-bar">
        {
            completed && completed<99 &&
            <LinearProgress variant="determinate" value={completed()} />
        }
        </div>
    );
};
export default ProgressBar;