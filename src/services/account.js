import axios from 'axios';

const MIN_FETCH_TIME = 500;
function sleep(t = MIN_FETCH_TIME) {
    t = Math.random() * t + MIN_FETCH_TIME
    return new Promise(resolve => setTimeout(resolve, t))
}
function randomError() {
    const rnd = Math.floor(Math.random() * 10); // integer between 0 and 9
    return (rnd%5===0)
}

const Account = {
    fetchAccountBalances: async (accountKey) => {
        const url = `https://dev-api-assetmanagemnt-workerhost.azure.saws.org/account/api/getbalance/${accountKey}`;
    
        try {
            const response = await axios({
                method: 'get',
                url: url,
                crossdmomain:true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            // if (randomError()) {
            //     throw new Error('Random error');
            // }
            //console.log('activebalance: ', response.data.activebalance);
            return response.data;
        } catch(e) {
            console.error(`getbalance failed for accountkey: ${accountKey}`);
            throw e;
        }
    },

    fetchAccountAddress: async (accountKey) => {
        const url = `https://dev-api-assetmanagemnt-workerhost.azure.saws.org/account/api/getaccountaddress/${accountKey}`;
    
        try {
            const response = await axios({
                method: 'get',
                url: url,
                crossdmomain:true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            // if (randomError()) {
            //     throw new Error('Random error');
            // }
            //console.log('activebalance: ', response.data.activebalance);
            return response.data;
        } catch(e) {
            console.error(`getaccountaddress failed for accountkey: ${accountKey}`);
            throw e;
        }
    }
}

export default Account;