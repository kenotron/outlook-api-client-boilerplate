import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, hashHistory, RouterState, RedirectFunction } from 'react-router';

import App from './components/App';
import Auth from './components/Auth';

import * as auth from './store/auth';

import 'whatwg-fetch';

function saveAuthAndRedirect(nextState: RouterState, replace: RedirectFunction) {
    auth.setAuthToken(nextState.params["email"], nextState.params["accessToken"]);
    replace({}, '/');
}

function requiresAuth(nextState: RouterState, replace: RedirectFunction) {
    if (!auth.loggedIn()) {
        replace({}, '/auth');
    }
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={requiresAuth} />
        <Route path="/auth" component={Auth} />
        <Route path="/authorize/:accessToken/:email" onEnter={saveAuthAndRedirect} />
    </Router>
), document.getElementById('app'))