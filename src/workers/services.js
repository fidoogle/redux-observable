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

const services = {
    account: {
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
                console.error(`getbalance failed for ${accountKey}`);
                throw e;
            }
        }
    },

    user: {
        fetchUserAccounts: async (accountID) => {
            const url = `https://dev-api-assetmanagemnt-workerhost.azure.saws.org/user/api/getuseraccounts/${accountID}`;
        
            try {
                console.log({accountID});
                const response = await axios({
                    method: 'get',
                    url: url,
                    crossdmomain:true,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                console.log('accounts:', {response});
                return response.data;
            } catch(e) {
                console.error(`getuseraccounts failed for ${accountID}`);
                throw e;
            }
        },

        sendLogin: async (email) => {
            const url = `https://dev-api-assetmanagemnt-workerhost.azure.saws.org/user/api/getuserbyemail/${email}`;
        
            try {
                console.log(email);
                const response = await axios({
                    method: 'get',
                    url: url,
                    crossdmomain:true,
                    data:{
                        emailAddress: email
                    },
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                console.log({response});
                return response.data;
            } catch(e) {
                console.error(`Login failed for ${email}`);
                throw e;
            }
        }
    }
}