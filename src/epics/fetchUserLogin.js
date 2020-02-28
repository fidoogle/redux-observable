import { ajax } from 'rxjs/ajax'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { 
    FETCH_USER_LOGIN_DATA, 
    fetchUserLoginFailed, 
    fetchUserLoginFulFilled, 
    setUserLoginStatus 
} from '../actions'
import { ofType } from 'redux-observable'
import { concat, of, throwError } from 'rxjs'

const apiBase = 'https://dev-api-assetmanagemnt-workerhost.azure.saws.org/user/api/getuserbyemail/'

export function fetchUserLoginEpic(action$) {//TODO: trap errors

    return action$.pipe(
        ofType(FETCH_USER_LOGIN_DATA),
        filter(({ payload }) => {return (payload && payload.toString().trim() !== '')}),
        switchMap(({ payload }) => {
            return concat(
                of(setUserLoginStatus('pending')),
                ajax.getJSON(apiBase+payload).pipe(
                    //map(resp => fetchUserLoginFulFilled(resp)),
                    map(resp => {
                        if (resp !== null) {
                            return fetchUserLoginFulFilled(resp)
                        } else { //Server returned null
                            return throwError(new Error('Bad username')) //TODO: not working for bad username
                        }
                    }),
                    catchError(err => { //Catches network or bad username error
                        return of(fetchUserLoginFailed(err.response.message))
                    })
                )
            )
        })
    )
}