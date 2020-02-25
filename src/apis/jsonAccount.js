import axios from 'axios'

export default axios.create({
    baseURL: 'https://dev-api-assetmanagemnt-workerhost.azure.saws.org/account/api/',
    crossdmomain: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})