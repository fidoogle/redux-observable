


export default function MyWorker(args) {
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
        } else if (e.data.action === 'mergeBalances') {
            const foundIndex = accounts.findIndex(o => o.accountkey === e.data.accountkey)
            if (foundIndex!==-1) {
                //Spread operator didn't work: accounts[foundIndex] = {...current, balances: e.data.balances}
                const current = accounts[foundIndex]
                current.balances = e.data.balances
                accounts[foundIndex] = current
            }
        } else {
            postMessage('some other message')
        }
        // Services.User.fetchUserAccounts('636430').then(
        //     //success
        //     p => {
        //         postMessage('successful fetch')
        //         postMessage(p);
        //     },
        //     //error
        //     e => {
        //         postMessage('failed fetch')
        //         console.error('error getting accounts', {e})
        //         throw e
        //     }
        // ).catch((e) => { handleError(e) })
    }

    const handleError = (e) => {
        console.error('Error in webworker', e)
    }
}