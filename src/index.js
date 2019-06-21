import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Notes from './Notes';

const routing = (
    <Router>
        <Menu />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contacts' component={Contacts} />
            <Route exact path='/notes' component={Notes} />
        </Switch>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
