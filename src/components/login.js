import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import CircularProgress from '@material-ui/core/CircularProgress'

const Login = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pending, setPending] = useState(false);

    const fakeAuth = {
        isAuthenticated: false,
        authenticate(cb) {
            this.isAuthenticated = true
            setTimeout(cb, 100)
        },
        signout(cb) {
            this.isAuthenticated = false
            setTimeout(cb, 100)
        }
    }

    const signIn = (e) => {
        e.stopPropagation()
        setPending(true)
        fakeAuth.authenticate(() => {

        })
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
                    defaultValue="sawsdev-mcastillo@saisd.net"
                    label="Username"
                    fullWidth={true}
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
                <div className="sign-in-button" onClick={(e) => {signIn(e)}}>
                    <div>{
                            pending? 
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