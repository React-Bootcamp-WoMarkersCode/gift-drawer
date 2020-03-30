import React, {useState} from 'react';
import { FormParticipant } from '../components/FormParticipants/FormParticipants'
import { ListParticipants } from '../components/ListParticipants/ListParticipants'
import { StyledModal } from '../components/Modal/Modal'
import { Switch, Route, Link } from 'react-router-dom'
import { Container, ImportDocArea } from './Containers.styled'
import fileIcon from '../assets/file-plus.png'
import { CSVLink } from "react-csv";
import CSVReader from 'react-csv-reader'
import styled from 'styled-components'

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 6%;
  a{
    margin-right: 30px;
    color: #552B9A;
    font-size: 17px;
  }
`
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

  const csvData = [
    ["Ana Paula", "11-99384766", "anapaula@email.com"],
    ["Angela", "11-984637476", "angela@email.com"]
  ];

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
    console.log(data)
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
      <Menu>
        <Link to={'/logged/participants/list'}>ver lista</Link>
        <Link to={'/logged/participants/new'}>+ adicionar</Link>
        <StyledModal
          btnType='purple'
          btnLabel='importar'
          footer={null}
          content={
            <>
              <h1>Adicionar participantes</h1>
              <img src={fileIcon} alt='load icon'/>
              <p>Para inserir a lista de participantes:</p>
              <p>1. baixe o modelo da planilha</p>
              <p>2. salve o arquivo no formato .csv</p>
              <p>3. faça upload do arquivo</p>

              <CSVLink data={csvData}>Baixar arquivo</CSVLink>

              <ImportDocArea>
                <label>Upload do arquivo</label>
                <CSVReader
                  inputId='file-upload'
                  cssClass="csv-reader-input"
                  cssInputClass="csv-input"
                  onFileLoaded={handleForce}
                />
              </ImportDocArea>
            </>
          }
        />
      </Menu>

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