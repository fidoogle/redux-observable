import React, { useContext, useState } from 'react';
import { StoreContext } from '../stores/store'
import { sendLogin} from '../services/accounts'


const PageTitle = () => {
    const [email, setEmail] = useState('');
    const [loginError, setLoginError] = useState(null);
    const { ['propertyInfo']: [globalProperties, setGlobalProperties] } = useContext(StoreContext); //global
    const { ['propertyInfoIntact']: [globalPropertiesIntact, setGlobalPropertiesIntact] } = useContext(StoreContext); //original global data

    const changeHandler = (event) => {
        setEmail(event.target.value);
    }
    const login = (event) => {
        event.preventDefault()
        event.stopPropagation()
        sendLogin(email).then(
            //success
            p => {
                setGlobalProperties(p); 
                setGlobalPropertiesIntact(p);
                setLoginError(null);
                console.log({globalPropertiesIntact});
            }, 
            //error
            e => {
                setLoginError(e); 
                console.error({e, email});
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
                        <input type="text" name="email" placeholder="email address" onChange={changeHandler}/>
                        <button onClick={login}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;