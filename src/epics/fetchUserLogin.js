import { ajax } from 'rxjs/ajax'
import { filter, map, switchMap } from 'rxjs/operators'
import { FETCH_USER_LOGIN_DATA, fetchUserLoginFulFilled, setUserLoginStatus } from '../actions'
import { ofType } from 'redux-observable'
import { concat, of } from 'rxjs'

const API = 'https://dev-api-assetmanagemnt-workerhost.azure.saws.org/user/api/getuserbyemail/'

export function fetchUserLoginEpic(action$) {//TODO: trap errors

    return action$.pipe(
        ofType(FETCH_USER_LOGIN_DATA),
        filter(({ payload }) => payload.trim() !== ''),
        switchMap(({ payload }) => {
            return concat(
                of(setUserLoginStatus('pending')),
                ajax.getJSON(API+payload).pipe(
                    map(resp => fetchUserLoginFulFilled(resp))
                )
            )
        })
    )
}