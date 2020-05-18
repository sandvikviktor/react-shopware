import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedRoute({ component: Component, ...rest }) {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated)

    return (
        <Route {...rest} render={props => {

            if(isAuthenticated) {
                return <Component {...props} />
            } 
            else {
                return <Redirect to={{ pathname: "/login", state:{ from: props.location } }}/>
            }

        }}/>
    )
}
