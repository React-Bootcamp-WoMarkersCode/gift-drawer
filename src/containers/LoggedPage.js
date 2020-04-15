import React from 'react';
import { ParticipantsPage } from './ParticipantsPage'
import { GiftsPage } from './GiftsPage'
import { WinnersPage } from './WinnersPage'
import { Switch, Route } from 'react-router-dom'
import { MainHeader } from '../components/Header/Header'
import { ListOfGifts } from '../components/ListOfGifts'

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
        <Route path='/logged/winners' >
          <WinnersPage />
        </Route >
      </Switch>

      <ListOfGifts />
    </>
  );
}

