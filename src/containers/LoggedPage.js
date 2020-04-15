import React, {useState}  from 'react';
import { ParticipantsPage } from './ParticipantsPage'
import { GiftsPage } from './GiftsPage'
import { WinnersPage } from './WinnersPage'
import { Switch, Route } from 'react-router-dom'
import { MainHeader } from '../components/Header/Header'
import { message } from 'antd'

export const LoggedPage = () => {
  const [participant, setParticipant] = useState({
    Id: null,
    participantId: 1,
    Name: '',
    Phone: '',
    Email: '',
    Status: false,
    participantItem: {},
    participantItems: [],
  })

  const [list, setList] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [visible, setVisible] = useState(false)

  const handleInputChange = (event) => {
    setParticipant({ ...participant, [event.target.name]: event.target.value });
  }

  const addParticipant = (event) => {
    event.preventDefault();
    if(!participant.Name || !participant.Phone || !participant.Email ) {
      message.warning('Preencha todos os campos');
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

  const handleForce = (data, fileInfo) => {
    if(data.length > 0){
      setList(data)
      setDisabled(false)
      setErrorMsg('')
    } else {
      setErrorMsg('Arquivo não pode ser lido!')
    }
  };

  const handleError = () => {
    setErrorMsg('Erro ao importar o arquivo')
  }

  const importCsv = () => {
    if(list.length > 0){
      list.map(item => {
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
      setParticipant({...participant, participantItems: participant.participantItems});
      setErrorMsg('')
    }else{
      setErrorMsg('Arquivo não pode ser lido!')
    }

    setList([])
    setTimeout(() => {
      setVisible(false)
    }, 1500)
  }

  return (
    <>
      <MainHeader />

      <Switch>
        <Route path='/logged/participants' >
          <ParticipantsPage 
          showModal={() => setVisible(true)}
          onCancelModal={() => setVisible(false)}
          visibleModal={visible}

          onFileLoaded={handleForce}
          onError={handleError}
          errorMsg={errorMsg}
          onClickImport={importCsv}
          disabledBtn={disabled}

          Name={ participant.Name }
          Phone={ participant.Phone }
          Email={ participant.Email }
          handleInputChange={ handleInputChange } 
          addParticipant={ addParticipant }

          participantItems={ participant.participantItems }
          deleteParticipant={ deleteParticipant }
          />
        </Route>
        <Route path='/logged/gifts' >
          <GiftsPage />
        </Route >
        <Route path='/logged/winners' >
          <WinnersPage />
        </Route >
      </Switch>
    </>
  );
}

