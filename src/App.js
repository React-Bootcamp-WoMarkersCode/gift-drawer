import React from 'react';
import './App.css';
import { ParticipantsPage } from './containers/ParticipantsPage'
import { LoginPage } from './containers/LoginPage'
import { GiftsPage } from './containers/GiftsPage'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/login'>
              <LoginPage />
            </Route>
            <Route path='/participants' >
              <ParticipantsPage />
            </Route >
            <Route path='/gifts' >
              <GiftsPage />
            </Route >
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
