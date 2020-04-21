import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Landing } from '../components/Landing/Landing'

export function LandingPage(){
  return( 
      <Switch>
        <Route path="/landing" exact component={Landing} />
      </Switch>
  )
}
