import { ajax } from 'rxjs/ajax'
import { filter, map, switchMap } from 'rxjs/operators'
import { fetchFulFilled, FETCH_DATA, setStatus } from '../actions'
import { ofType } from 'redux-observable'
import { concat, of } from 'rxjs'

const API = 'https://dev-api-assetmanagemnt-workerhost.azure.saws.org/user/api/getuseraccounts/'

export function fetchUserAccountsEpic(action$) {
 //TODO: trap errors
    return action$.pipe(
        ofType(FETCH_DATA),
        filter(({ payload }) => payload.trim() !== ''),
        switchMap(({ payload }) => {
            return concat(
                of(setStatus('pending')),
                ajax.getJSON(API+payload).pipe(
                    map(resp => fetchFulFilled(resp))
                )
            )
        })
    )
}