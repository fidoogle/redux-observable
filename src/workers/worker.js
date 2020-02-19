//TODO: may want a Shared Worker in case a user wants multiple opened Tabs with the same data


export default function MyWorker(args) {
    //TODO: would be nice to do the service requests here but I can't get the imports to work
    //const Services = this.importScripts('/services/index.js');
    //this.importScripts('./services.js')
    let accounts = null;
    this.onmessage = e => {
        if (!e) return;
        if (e.data.action === 'setAccounts') {
            accounts = e.data.accounts;
            postMessage('accounts set')
        } else if (e.data.action === 'getAccounts') {
            postMessage({accounts})
        } else if (e.data.action === 'mergeAddress') {
            const foundIndex = accounts.findIndex(o => o.accountkey === e.data.accountkey)
            if (foundIndex!==-1) {
                //TODO: Spread operator didn't work: accounts[foundIndex] = {...accounts[foundIndex], address: e.data.address}
                const current = accounts[foundIndex]
                current.address = e.data.address
                accounts[foundIndex] = current
                //postMessage({accounts})
            }
        } else if (e.data.action === 'mergeBalances') {
            const foundIndex = accounts.findIndex(o => o.accountkey === e.data.accountkey)
            if (foundIndex!==-1) {
                //TODO: Spread operator didn't work: accounts[foundIndex] = {...accounts[foundIndex], balances: e.data.balances}
                const current = accounts[foundIndex]
                current.balances = e.data.balances
                accounts[foundIndex] = current
                //postMessage({accounts})
            }
        } else if (e.data.action === 'mergeGallons') {
            const foundIndex = accounts.findIndex(o => o.accountkey === e.data.accountkey)
            if (foundIndex!==-1) {
                //TODO: Spread operator didn't work: accounts[foundIndex] = {...accounts[foundIndex], gallons: e.data.gallons}
                const current = accounts[foundIndex]
                current.gallons = e.data.gallons
                accounts[foundIndex] = current
                //postMessage({accounts})
            }
        } else {
            postMessage('unknown postMessage in webworker:'+e.data)
        }
    }

    const handleError = (e) => {
        console.error('Error in webworker', e)
    }
}