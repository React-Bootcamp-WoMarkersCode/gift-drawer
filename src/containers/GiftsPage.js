import React from 'react';
import NewGift from '../components/NewGift'
import { Switch, Route } from 'react-router-dom';

export function GiftsPage(){
  return(
    <>
      <Switch>
        <Route path="/logged/gifts" exact component={NewGift} />
      </Switch>
    </>
  )
}