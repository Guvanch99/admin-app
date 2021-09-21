import {Route, Switch} from "react-router-dom";

import {Login, Error, Home, Users, Products} from '../pages'

import {PrivateRoute} from "../components";

import {ROUTER_LOGIN, ROUTER_USERS, ROUTER_PRODUCTS, ROUTER_HOME, ROUTER_ERROR} from "../constants/routers";

import './index.scss'

const privateRoutes = [
    {
        path: ROUTER_HOME,
        children: <Home/>
    },
    {
        path: ROUTER_PRODUCTS,
        children: <Products/>
    },
    {
        path: ROUTER_USERS,
        children: <Users/>
    }
]

const App = () => (
    <div className='container'>
        <Switch>
            {
                privateRoutes.map(({path, children}, idx) => (
                    <PrivateRoute key={idx} exact path={path}>
                        {children}
                    </PrivateRoute>
                ))
            }
            <Route exact path={ROUTER_LOGIN} component={Login}/>
            <Route path={ROUTER_ERROR} component={Error}/>
        </Switch>
    </div>

)

export default App
