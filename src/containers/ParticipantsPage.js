import React from 'react';
import { FormParticipant } from '../components/FormParticipants/FormParticipants'
import { ListParticipants } from '../components/ListParticipants/ListParticipants'
import { StyledModal } from '../components/Modal/Modal'
import { StyledButton } from '../components/Button/Button'
import { Switch, Route, Link } from 'react-router-dom'
import { Container, ImportDocArea } from './Containers.styled'
import fileIcon from '../assets/file-plus.png'
import CSVReader from 'react-csv-reader'
import { CSVLink } from "react-csv"
import styled from 'styled-components'

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 40px 0 40px 0;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    margin-right: 0;
  }
  a{
    margin-right: 30px;
    color: #552B9A;
    font-size: 17px;
  }
`
export function ParticipantsPage(props){

  const { 
    showModal,
    onCancelModal,
    visibleModal,
    onFileLoaded,
    onError,
    errorMsg,
    onClickImport,
    disabledBtn,
    Name,
    Phone,
    Email,
    handleInputChange,
    addParticipant,
    participantItems,
    deleteParticipant
  } = props

  const csvData = [
    ["Ana Paula", "11-99384766", "anapaula@email.com"],
    ["Angela", "11-984637476", "angela@email.com"],
    ["Diana", "11-98839291", "diana@email.com"],
    ["Pry", "11-929465194", "pry@email.com"],
    ["Bruna", "11-973836254", "bruna@email.com"],
    ["Evelyn", "11-998746254", "evelyn@email.com"],
  ];

  return(
    <Container>
      <Menu>
        <Link to={'/logged/participants/list'}>ver lista</Link>
        <Link to={'/logged/participants/new'}>+ adicionar</Link>
        <StyledModal
          btnLabel='importar'
          footer={null}
          showModal={showModal}
          onCancel={onCancelModal}
          visible={visibleModal}
          content={
            <>
              <h1>Adicionar participantes</h1>
              <img src={fileIcon} alt='load icon'/>
              <span>Para inserir a lista de participantes:</span>
              <span>1. baixe o modelo da planilha</span>
              <span>2. salve o arquivo no formato .csv</span>
              <span>3. faça upload do arquivo</span>

              <CSVLink data={csvData}>Baixar arquivo</CSVLink>

              <ImportDocArea>
                <label>Upload do arquivo</label>
                <CSVReader
                  inputId='file-upload'
                  cssClass="csv-reader-input"
                  cssInputClass="csv-input"
                  onFileLoaded={onFileLoaded}
                  onError={onError}
                />
                <span>{errorMsg}</span>
              </ImportDocArea>
              <StyledButton type='red' label='Importar' onClick={onClickImport} disabled={disabledBtn}/>
            </>
          }
        />
      </Menu>

      <Switch>
        <Route path='/logged/participants/new' >
          <FormParticipant 
            Name={ Name }
            Phone={ Phone }
            Email={ Email }
            handleInputChange={ handleInputChange } 
            addParticipant={ addParticipant }
          />
        </Route >
        <Route path='/logged/participants/list' >
          <ListParticipants 
            participantItems={ participantItems }
            deleteParticipant={ deleteParticipant }
          />
        </Route>
      </Switch>
    </Container>
  )
}