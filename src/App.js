import React from 'react';
import { LoginPage } from './containers/LoginPage'
import { LoggedPage } from './containers/LoggedPage'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { GiftsPage } from './containers/GiftsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/logged' >
            <LoggedPage />
          </Route >
          <Route path='/gifts'>
            <GiftsPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
