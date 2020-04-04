import React from 'react';
import NewGift from '../components/NewGift'
import { Switch, Route } from 'react-router-dom';
import { MainHeader } from '../components/Header/Header'

export function GiftsPage(){
  return(
    <div style={{backgroundColor: '#E5E5E5'}}>
      <h1>Inserir brinde</h1>
      <Switch>
        <Route path="/logged/gifts" exact component={NewGift} />
      </Switch>
    </div>
  )
}