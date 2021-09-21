import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ROUTER_LOGIN } from '../../constants/routers'

const PrivateRoute = ({ children, ...rest }) => {
    const { isAdmin } = useSelector(state => state.admin)
console.log('admin',isAdmin)
    return (
        <Route
            {...rest}
            render={() => (isAdmin  ? children : <Redirect to={ROUTER_LOGIN} />)}
        />
    )
}

export default PrivateRoute