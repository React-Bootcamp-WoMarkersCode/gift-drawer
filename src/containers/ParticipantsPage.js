import React, {useState} from 'react';
import { FormParticipant } from '../components/FormParticipants/FormParticipants'
import { ListParticipants } from '../components/ListParticipants/ListParticipants'
import { StyledModal } from '../components/Modal/Modal'
import { StyledButton } from '../components/Button/Button'
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
    participantItems: [],
  })
  const [list, setList] = useState([])
  const [errorMsg, setErrorMsg] = useState()
  const [disabled, setDisabled] = useState(true)
  const [visible, setVisible] = useState(false)
 
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

  return(
    <Container>
      <Menu>
        <Link to={'/logged/participants/list'}>ver lista</Link>
        <Link to={'/logged/participants/new'}>+ adicionar</Link>
        <StyledModal
          btnType='purple'
          btnLabel='importar'
          footer={null}
          showModal={() => setVisible(true)}
          onCancel={() => setVisible(false)}
          visible={visible}
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
                  onError={handleError}
                />
                <span>{errorMsg}</span>
              </ImportDocArea>
              <StyledButton type='red' label='Importar' onClick={importCsv} disabled={disabled}/>
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