import React from 'react';
import { ParticipantsPage } from './ParticipantsPage'
import { GiftsPage } from './GiftsPage'
import { Switch, Route } from 'react-router-dom'
import { MainHeader } from '../components/Header/Header'

export const LoggedPage = () => {
  return (
    <>
      <MainHeader />

      <Switch>
        <Route path='/logged/participants' >
          <ParticipantsPage />
        </Route>
        <Route path='/logged/gifts' >
          <GiftsPage />
        </Route >
      </Switch>

    </>
  );
}

