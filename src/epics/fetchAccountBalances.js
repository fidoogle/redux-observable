import { ajax } from 'rxjs/ajax'
import { catchError, filter, map, pluck, switchMap } from 'rxjs/operators'
import { fetchBalancesFailed, fetchBalancesFulFilled, FETCH_BALANCES_DATA, setBalancesStatus } from '../actions'
import { ofType } from 'redux-observable'
import { concat, of, forkJoin } from 'rxjs'

const apiBase = 'https://dev-api-assetmanagemnt-workerhost.azure.saws.org/account/api/getbalance/'

export function fetchAccountBalancesEpic(action$, state$) {
    return action$.pipe(
        ofType(FETCH_BALANCES_DATA),
        switchMap(() => {

            const reqs = state$.value.userAccounts.data.map((o) => {//TODO: access store$ for userAccounts and use this as the array
                return ajax.getJSON(apiBase + o.accountkey)//.pipe(pluck(0));
            });

            const ajax$ = forkJoin(reqs).pipe(
                map(resp => fetchBalancesFulFilled(resp)),
                catchError(err => {
                    return of(fetchBalancesFailed(err.response.message));
                })
            );

            // const blocker$ = merge(
            //     action$.pipe(ofType(CANCEL)),
            //     fromEvent(document, "keyup").pipe(
            //         filter(evt => evt.key === "Escape" || evt.key === "Esc")
            //     )
            // ).pipe(mapTo(reset()));

            // return concat(
            //     of(setStatus("pending")),
            //     race(ajax$, blocker$)
            // )
            return concat(
                of(setBalancesStatus('pending')),
                ajax$
            )
        })
    );
}