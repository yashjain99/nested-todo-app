import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Dashboard } from '../Pages/Dashboard/Components/Dashboard';
import { Login } from "../Pages/Login/Components/Login";

export function Routes() {
    return (
        <div>
            <Route exact path = "/" render={(props) => <Login {...props} />} />
            <Switch>
                <Route exact path = "/dashboard" render={(props) => <Dashboard {...props} />} />
            </Switch>
        </div>
    )
}
