import React, { useContext, useState } from 'react';
import { StoreContext } from '../stores/store'
import { fetchUserAccounts, sendLogin } from '../services/accounts'
import CircularProgress from '@material-ui/core/CircularProgress'


const PageTitle = () => {
    const [email, setEmail] = useState('');
    const [loginError, setLoginError] = useState(null);
    const [loadingLogin, setLoadingLogin] = useState(false);
    const { ['propertyInfo']: [globalProperties, setGlobalProperties] } = useContext(StoreContext); //global
    const { ['propertyInfoIntact']: [globalPropertiesIntact, setGlobalPropertiesIntact] } = useContext(StoreContext); //original global data

    const changeHandler = (event) => {
        setEmail(event.target.value)
        setLoginError(null)
    }
    const login = (event) => { //Sample login: sawsdev-mcastillo@saisd.net
        event.preventDefault()
        event.stopPropagation()
        setLoadingLogin(true)
        sendLogin(email).then(
            //success
            p => {
                setLoginError(null)
                setLoadingLogin(false)
                fetchUserAccounts(p.userx52id).then(
                    //success
                    p => {
                        setGlobalProperties(p); 
                        setGlobalPropertiesIntact(p);
                    },
                    //error
                    e => {console.error('error getting accounts', {e})}
                ).catch((e) => { throw e})

            }, 
            //error
            e => {
                setLoginError(e)
                setLoadingLogin(false)
                console.error({e, email})
            }
        )
    }

    return (
        <div className="page-titles">
            <div className="content-max">
                <div className="title">
                    Overview
                    <div className="subtitle">
                        Expand and see more information about an account below.
                    </div>
                </div>
                <div>
                    { loginError && `There was an error for ${email}` }
                    <form>
                        sawsdev-mcastillo@saisd.net { !loginError && loadingLogin && <CircularProgress size={20}/>}
                        <input type="text" name="email" placeholder="email address" onChange={changeHandler}/>
                        <button onClick={login}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;