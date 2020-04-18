import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import NewRegister from '../components/NewRegister-Login/NewRegister';
// import ResetPassword from '../components/ResetPassword'

export function LoginPage(){
  return( 
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/login/new-register" exact component={NewRegister} />
      </Switch>
  )
}
