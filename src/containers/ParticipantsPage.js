import React, {useState} from 'react';
import { FormParticipant } from '../components/FormParticipants/FormParticipants'
import { ListParticipants } from '../components/ListParticipants/ListParticipants'
import { Switch, Route } from 'react-router-dom'
import { Container } from './Containers.styled'
import { StyledButton } from '../components/Button/Button'
import CSVReader from 'react-csv-reader'

export function ParticipantsPage(props){
  const [participant, setParticipant] = useState({
    Id: null,
    participantId: 1,
    Name: '',
    Phone: '',
    Email: '',
    Status: false,
    participantItem: {},
    participantItems: [
      {
        Id: 1,
        participantId: 1,
        Name: 'Ana Paula',
        Phone: '111111111',
        Email: 'anapaula@gmail.com',
      },
      {
        Id: 2,
        participantId: 2,
        Name: 'Angela',
        Phone: '22222222',
        Email: 'angela@gmail.com',
      },
      {
        Id: 3,
        participantId: 3,
        Name: 'Diana',
        Phone: '33333333',
        Email: 'diana@gmail.com',
      },
    ],
  })

  const handleInputChange = (event) => {
    setParticipant({ ...participant, [event.target.name]: event.target.value });
  }

  const addParticipant = (event) => {
    event.preventDefault();
    if(!participant.Name || !participant.Phone || !participant.Email ) {
      alert('preencher tudo');
    }
    else {
      const participantItem = {
        Id: participant.participantItems.length + 1,
        participantId: participant.participantItems.length + 1,
        Name: participant.Name,
        Phone: participant.Phone,
        Email: participant.Email,
      };
      setParticipant({
        ...participant,
        Name: '',
        Phone: '',
        Email: '',
        participantItem: participantItem,
        participantItems: [...participant.participantItems, participantItem],
      })
    }
    console.log(participant)
  }

  const deleteParticipant = ( participantId ) => {
    const newParticipantItems = participant.participantItems.filter( item => item.participantId !== participantId );
    setParticipant({...participant, participantItems: newParticipantItems});
  }

  const handleForce = data => {
    data.map(item => {
      return(
        participant.participantItems.push({
          Id: participant.participantItems.length + 1,
          participantId: participant.participantItems.length + 1,
          Name: item[0],
          Phone: item[1],
          Email: item[2],
        })
      )
    })
    console.log(participant.participantItems)
    setParticipant({...participant, participantItems: participant.participantItems});
  };

  return(
    <Container>
      <StyledButton type='purple' label='Importar arquivo'></StyledButton>
      <CSVReader
        cssClass="csv-reader-input"
        onFileLoaded={handleForce}
      />
      <Switch>
        <Route path='/logged/participants/new' >
          <FormParticipant 
            Name={ participant.Name }
            Phone={ participant.Phone }
            Email={ participant.Email }
            handleInputChange={ handleInputChange } 
            addParticipant={ addParticipant }
          />
        </Route >
        <Route path='/logged/participants/list' >
          <ListParticipants 
            participantItems={ participant.participantItems }
            deleteParticipant={ deleteParticipant }
          />
        </Route>
      </Switch>
    </Container>
  )
}