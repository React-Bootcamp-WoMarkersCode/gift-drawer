import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Login/Login';
import NewRegister from '../components/NewRegister'
import { ParticipantsPage } from './ParticipantsPage'
import { GiftsPage } from './GiftsPage'
import { LoggedPage } from '../containers/LoggedPage'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/login" exact component={Login} />
                <Route path="/login/new-register" exact component={NewRegister} />
                <Route path="/logged" exact component={LoggedPage} />
                <Route path="/logged/participants" exact component={ParticipantsPage} />
                <Route path="/logged/gifts" exact component={GiftsPage} />
            </Switch>
        </BrowserRouter>
    )
}