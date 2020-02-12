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

const fetchBalance = async (id=0, delay=false) => {
    const url = './data/properties.json';
    
    try {
        const response = await axios({
            method: 'get',
            url: url
        });
        if (delay) {
            await sleep();
        }
        if (randomError()) {
            throw new Error('Random error');
        }
        const result = response.data.find(o => o.useraccountid === id)
        return result.balance; // if null, throw error in catch
    } catch(e) {
        console.error('Request for fetchBalance failed');
        throw e;
    }
};

const fetchProperties = async (delay=false) => {
    const url = './data/properties.json';
    //const url = 'https://dev-api-assetmanagemnt-workerhost.azure.saws.org/account/api/gallons/3463463';
    try {
        const response = await axios({
            method: 'get',
            url: url,
            headers: {
                'Ocp-Apim-Trace': true,
                'Ocp-Apim-Subscription-Key': 'd334acadb84d48b39eca45d2bd4119ef'
            }
        });
        if (delay) {
            await sleep();
        }
        return response.data;
    } catch(e) {
        console.error('Request for fetchProperties failed');
        throw e;
    }
};

const fetchAccountBalances = async (accountKey) => {
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
        if (randomError()) {
            throw new Error('Random error');
        }
        console.log('activebalance: ', response.data.activebalance);
        return response.data;
    } catch(e) {
        console.error(`getbalance failed for ${accountKey}`);
        throw e;
    }
}

const fetchUserAccounts = async (accountID) => {
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
}

const sendLogin = async (email) => {
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
};


export { fetchAccountBalances, fetchBalance, fetchProperties, fetchUserAccounts, sendLogin }