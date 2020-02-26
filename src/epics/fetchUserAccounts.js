import { ajax } from 'rxjs/ajax'
import { map, switchMap } from 'rxjs/operators'
import { fetchFulFilled, FETCH_DATA, setStatus } from '../actions'
import { ofType } from 'redux-observable'
import { concat, of } from 'rxjs'

const API = 'https://dev-api-assetmanagemnt-workerhost.azure.saws.org/user/api/getuseraccounts/636430'

export function fetchUserAccountsEpic(action$) {

    return action$.pipe(
        ofType(FETCH_DATA),
        switchMap(() => {
            return concat(
                of(setStatus('pending')),
                ajax.getJSON(API).pipe(
                    map(resp => fetchFulFilled(resp))
                )
            )
        })
    )
}