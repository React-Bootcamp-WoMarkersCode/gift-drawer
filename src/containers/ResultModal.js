import React, {useState, useEffect }from 'react';
import { Modal, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/source/_base.css'
import 'animate.css/source/attention_seekers/heartBeat.css'
import '../assets/styles/result-modal.css'
import close from '../assets/images/close.png'
import trophy from '../assets/images/trophy.png'
import styled from 'styled-components';

export const ModalBootstrap = styled(Modal)`
  padding: 0px;
  .modal-dialog{
    max-width: 500px;
  }
`

export const Counter = styled.div`
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center; 
  span{
    color: #552B9A;
    font-size: 100px;
    font-weight: bold;
  }
`
const ResultModal = ({ show, hideModal, winnerName }) => {
  const [counterNumber, setCounterNumber] = useState(3);

  useEffect(() => {
    CountDown()
  },[counterNumber])

  const CountDown = () => {
    if(counterNumber > 0){
      setTimeout(() => setCounterNumber(counterNumber - 1), 1000)
    }
  }

  return (
    <ModalBootstrap show={show} onHide={hideModal} className='modal-winner' onEntering={CountDown}>

        {counterNumber > 0 ?
          <Modal.Body className='modal-result-body scroller'>
            <Counter>
              <span>{counterNumber}</span>
            </Counter>
          </Modal.Body>
          :
          <>
            <Modal.Body className='modal-result-body scroller'>
              <img alt='close-icon' className='close-icon' src={close}  onClick={hideModal}/>
              <h3>VENCEDORX</h3>
              <img alt='trophy-img' className='trophy-img' src={trophy}/>
              <p className='animate heartBeat infinite' >{winnerName}</p>
            
            <Modal.Footer className='modal-result-footer'>
              <Button className='button confirm-btn' variant='' onClick={hideModal}>
                CONFIRMAR
              </Button>
            </Modal.Footer>
            </Modal.Body>
          </>
        }
    </ModalBootstrap>
  )
};

export default ResultModal;