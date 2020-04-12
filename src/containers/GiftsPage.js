import React from 'react';
import NewGift from '../components/NewGift'
import SortGift from '../components/SortGift'
import { Switch, Route } from 'react-router-dom';

export function GiftsPage(){

  return(
    <>
      <h1>BRINDES</h1>
      <Switch>
        <Route path="/logged/gifts" exact component={NewGift} />
        <Route path='/logged/gifts/sort' component={SortGift} />
      </Switch>
    </>
  )
}