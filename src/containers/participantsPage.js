import React, {useState} from 'react';
import { FormParticipant } from '../components/FormParticipants/FormParticipants'
import { ListParticipants } from '../components/ListParticipants/ListParticipants'

export function ParticipantsPage(props){
  const [participant, setParticipant] = useState({
    Id: null,
    ParticipantId: 1,
    Name: '',
    Phone: '',
    Email: '',
    Status: false,
    participantItem: {},
    participantItems: [],
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
        ParticipantId: participant.participantItems.length + 1,
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
  }

  return(
    <>
      <FormParticipant 
        Name={ participant.Name }
        Phone={ participant.Phone }
        Email={ participant.Email }
        handleInputChange={ handleInputChange } 
        addParticipant={ addParticipant }
      />
      <ListParticipants 
        participantItems={ participant.participantItems }
      />
    </>
  )
}