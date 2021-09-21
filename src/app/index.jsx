import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Login, Error} from '../pages'

import {Navbar, PrivateRoute} from "../components";

import {ROUTER_LOGIN, ROUTER_USERS, ROUTER_PRODUCTS, ROUTER_HOME, ROUTER_ERROR} from "../constants/routers";

import './index.scss'


const App = () => (
    <main className='main'>
    <Router>
        <Switch>
            <Route exact path={ROUTER_LOGIN} component={Login}/>
            <PrivateRoute exact path={ROUTER_PRODUCTS}/>
            <PrivateRoute exact path={ROUTER_USERS}/>
            <PrivateRoute exact path={ROUTER_HOME}/>
            <Route path={ROUTER_ERROR} component={Error}/>
        </Switch>
    </Router>
</main>

)

export default App