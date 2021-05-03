import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeComponent from './home/components';
import DetailsComponent from './details/components';

const App = () => (
    <Switch>
        <Route path='/' component={HomeComponent} exact />
        <Route path='/details' component={DetailsComponent} exact />
        <Redirect from='*' to='/' />
    </Switch>
);

export default App;