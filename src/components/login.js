import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../stores/store'

import { useDispatch, useSelector } from "react-redux"
import { fetchUserLoginData } from '../actions'

import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import CircularProgress from '@material-ui/core/CircularProgress'

import { useHistory } from "react-router-dom";

const DEFAULT_LOGIN = 'sawsdev-mcastillo@saisd.net'

const Login = () => {
    //Locals
    const [username, setUsername] = useState(DEFAULT_LOGIN);

    const history = useHistory();

    const userloginstatus = useSelector(state => state.app.userloginstatus)
    const dispatch = useDispatch()

    const changeHandler = (event) => {
        setUsername(event.target.value)
    }
    const login = (event) => { //TODO: get and store token
        event.preventDefault()
        event.stopPropagation()
        dispatch(fetchUserLoginData(username))
    }
    
    useEffect(() => {
        if (userloginstatus==='success') {
            history.replace({ pathname: '/app' })
        }
    }, [userloginstatus]);

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
                <div>
                    {userloginstatus==='failure' && (
                        `There was an error for ${username}`
                    )}
                </div>
                <div className="sign-in-button" onClick={(e) => {login(e)}}>
                    <div>
                        {userloginstatus==='pending' && (
                            <CircularProgress size={20}/>
                        )}
                        
                        {userloginstatus!=='pending' && (
                            <span>Sign In</span>
                        )}
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