import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import NewRegister from '../components/NewRegister';

export function LoginPage(){
  return(
    <div style={{backgroundColor: '#552B9A'}}>
      <h1>LOGIN</h1>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/login/new-register" exact component={NewRegister} />
      </Switch>
    </div>
  )
}
