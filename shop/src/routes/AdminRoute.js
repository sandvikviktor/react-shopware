import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedRoute({ component: Component, ...rest }) {

    const isAdmin = useSelector(state => state.user.isAdmin)

    return (
        <Route {...rest} render={props => {

            if(isAdmin) {
                return <Component {...props} />
            } 
            else {
                return <Redirect to={{ pathname: "/login", state:{ from: props.location } }}/>
            }

        }}/>
    )
}