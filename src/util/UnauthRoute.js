import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function UnauthRoute({ component: Component, authenticated, ...rest }) {
    return (
    <Route
        {...rest}
        //if authenticated we redirect to '/board' else we give back a component which is either '/login' or '/signup' route
        render = {(props) => authenticated === false ? <Redirect to="/login"/> : <Component {...props}/>}
    />
    )
}


export default UnauthRoute
