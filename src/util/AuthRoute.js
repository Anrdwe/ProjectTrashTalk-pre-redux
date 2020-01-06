import React, {useState, useEffect} from 'react'
import { Route, Redirect } from 'react-router-dom'
import jwtDecode from 'jwt-decode';

function AuthRoute({ component: Component, ...rest }) {
    const [authen, setAuthen] = useState(false); 
    const token = localStorage.FBIdToken;

    useEffect(() => {
        if(token) {
        //we have token, we want to decode it with jwt-decode, inside there is a expiration date
        //the exp value is in seconds and can be passed into date() to get the exact time the token expires
        const decodedToken = jwtDecode(token);
        if(decodedToken.exp * 1000 < Date.now()) {
            //if the token is expired, we redirect them to the login page
            setAuthen(() => false)
        } else {
            setAuthen(() => true)
        }
        }
    }, [])
    return (
    <Route
        {...rest}
        //if authenticated we redirect to '/board' else we give back a component which is either '/login' or '/signup' route
        render = {(props) => authen === true ? <Redirect to="/board"/> : <Component {...props}/>}
    />
    )
}

export default AuthRoute
