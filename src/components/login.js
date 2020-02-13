import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../stores/store'
import { fetchUserAccounts, sendLogin } from '../services/accounts'
import { get } from 'lodash'

import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import CircularProgress from '@material-ui/core/CircularProgress'

import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
        Redirect,
        useHistory,
        useLocation
    } from "react-router-dom";

const DEFAULT_LOGIN = 'sawsdev-mcastillo@saisd.net'

const Login = () => {
    const [username, setUsername] = useState(DEFAULT_LOGIN);
    const [loginError, setLoginError] = useState(null);
    const [loadingLogin, setLoadingLogin] = useState(false);
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);
    const { ['propertyInfo']: [globalProperties, setGlobalProperties] } = useContext(StoreContext); //global
    const { ['propertyInfoIntact']: [globalPropertiesIntact, setGlobalPropertiesIntact] } = useContext(StoreContext); //original global data
    let history = useHistory();

    useEffect(() => {
        setDataApp({...dataApp, activeLink: 'login'})
    }, []);

    const changeHandler = (event) => {
        setUsername(event.target.value)
        console.log({username})
        setLoginError(null)
    }
    const login = (event) => { //Sample login: sawsdev-mcastillo@saisd.net
        event.preventDefault()
        event.stopPropagation()
        setLoadingLogin(true)
        sendLogin(username).then(
            //success
            p => {
                setLoginError(null)
                setLoadingLogin(false)
                fetchUserAccounts(get(p, 'userx52id', null)).then(
                    //success
                    p => {
                        setGlobalProperties(p); 
                        setGlobalPropertiesIntact(p);
                        history.replace({ pathname: '/app'});
                    },
                    //error
                    e => {
                        console.error('error getting accounts', {e})
                        throw e
                    }
                ).catch((e) => { handleError(e) })

            }, 
            //error
            e => { handleError(e) }
        )
    }
    const handleError = (e) => {
        setLoginError(e)
        setLoadingLogin(false)
        console.error({e, username})
    }

    return (
        <div className="login">

            <div className="overlay"></div>

            <div className="title">
                <div><img src="/Logo-25-white.png" alt=""/></div>
                <div className="spacer"></div>
                <div>My Commercial Account</div>
            </div>

            <div className="box">
                <div><TextField
                    id="username"
                    defaultValue={DEFAULT_LOGIN}
                    label="Username"
                    fullWidth={true}
                    name="username"
                    placeholder="Type here..."
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon color="disabled"/>
                            </InputAdornment>
                        )
                    }}
                    onChange={changeHandler}
                    />
                </div>
                <div><TextField
                    id="password"
                    label="Password"
                    fullWidth={true}
                    type="password"
                    placeholder="Type here..."
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon color="disabled"/>
                            </InputAdornment>
                        )
                    }}
                    />
                </div>
                <div>{ loginError && `There was an error for ${username}` }</div>
                <div className="sign-in-button" onClick={(e) => {login(e)}}>
                    <div>{
                            (!loginError && loadingLogin)? 
                            <CircularProgress size={20}/>
                            :
                            <span>Sign In</span>
                        }
                    </div>
                </div>
                <div className="terms">
                    <div>By clicking "Sign In" you are agreeing to the terms and conditions for using this site. Last updated on 05/25/2018</div>
                </div>
            </div>

            <div className="bottom">
                <div>Need an account?</div>
                <div><a>Sign Up Here</a></div>
            </div>

        </div>
    );
};

export default Login;