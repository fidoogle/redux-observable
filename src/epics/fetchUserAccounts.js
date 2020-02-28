import { ajax } from 'rxjs/ajax'
import { catchError, filter, map, mapTo, switchMap } from 'rxjs/operators'
import { fetchBalancesData, fetchFailed, fetchFulFilled, FETCH_DATA, setStatus } from '../actions'
import { ofType } from 'redux-observable'
import { concat, of } from 'rxjs'

const API = 'https://dev-api-assetmanagemnt-workerhost.azure.saws.org/user/api/getuseraccounts/'

export function fetchUserAccountsEpic(action$) {
 //TODO: trap errors
    return action$.pipe(
        ofType(FETCH_DATA),
        filter(({ payload }) => {return (payload && payload.toString().trim() !== '')}),
        switchMap(({ payload }) => {
            return concat(
                of(setStatus('pending')),
                ajax.getJSON(API+payload).pipe(
                    map(resp => fetchFulFilled(resp)),
                    catchError(err => { //Network error
                        return of(fetchFailed(err.response.message))
                    })
                ),
                of(fetchBalancesData())
            )
        })
    )
}