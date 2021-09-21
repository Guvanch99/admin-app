import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import {Auth, Home, Products, Users} from '../pages'

import {PrivateRoute} from "../components";

import {ROUTER_LOGIN, ROUTER_USERS, ROUTER_PRODUCTS, ROUTER_HOME} from "../constants/routers";

import './index.scss'

const App = () => (
    <Router>
        <Switch>
            <Route exact path={ROUTER_LOGIN} component={Auth} />
            <PrivateRoute exact path={ROUTER_PRODUCTS} component={Products}/>
            <PrivateRoute exact path={ROUTER_USERS} component={Users}/>
            <PrivateRoute exact path={ROUTER_HOME} component={Home}/>
            <Redirect to={ROUTER_HOME}/>
        </Switch>
    </Router>
)
export default App