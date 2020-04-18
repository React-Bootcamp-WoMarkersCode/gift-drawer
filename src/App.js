import React from 'react';
import { LoginPage } from './containers/LoginPage'
import { LoggedPage } from './containers/LoggedPage'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <LoginPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/logged' >
            <LoggedPage />
          </Route >
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
