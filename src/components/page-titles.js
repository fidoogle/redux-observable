import React, { useState } from 'react';
import {sendLogin} from '../services/accounts'


const PageTitle = () => {
    const [email, setEmail] = useState('');
    const [resultData, setResultData] = useState(null);
    const [loginError, setLoginError] = useState(null);

    const changeHandler = (event) => {
        setEmail(event.target.value);
    }
    const login = (event) => {
        event.preventDefault()
        event.stopPropagation()
        sendLogin(email).then(
            p => {setResultData(p); console.log({resultData})}, 
            e => {setLoginError(e); console.error({e})}
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
                    { loginError && 'There was an error' }
                    <form>
                        <input type="text" name="email" placeholder="email address" onChange={changeHandler}/>
                        <button onClick={login}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;