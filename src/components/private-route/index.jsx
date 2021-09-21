import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ROUTER_LOGIN } from '../../constants/routers'

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useSelector(state => state.auth)

    return (
        <Route
            {...rest}
            render={() => (user ? children : <Redirect to={ROUTER_LOGIN} />)}
        />
    )
}

export default PrivateRoute