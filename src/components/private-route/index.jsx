import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ROUTER_LOGIN } from '../../constants/routers'

const PrivateRoute = ({ children, ...rest }) => {
    const { isAdmin } = useSelector(state => state.admin)
    return (
        <Route
            {...rest}
            render={() => (true  ? children : <Redirect to={ROUTER_LOGIN} />)}
        />
    )
}

export default PrivateRoute
