import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './Route';

// import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={SignUp} />

            <Route path="/profile" component={Home} />
        </Switch>
    );
}
