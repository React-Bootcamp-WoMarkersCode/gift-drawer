import React from 'react'
import ParticipantsPage from './ParticipantsPage'
import { shallow } from 'enzyme'

describe('Tests of my participants page', () => {
  it('Should render an item of the list', () => {
    const app = shallow (<ParticipantsPage />)
    const instance = app.instance()
    const spyAddParticipant = jest.spyOn(instance, 'addParticipant')

    instance.forceUpdate();

    const newParticipant = {
      Id: 1,
      participantId: 1,
      Name: 'Ana Paula',
      Phone: '999999999',
      Email: 'anapaula@email.com',
    }
    newParticipant.spyAddParticipant(newParticipant)
    expect()
  })
})