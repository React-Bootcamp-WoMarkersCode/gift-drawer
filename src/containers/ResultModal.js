import React from 'react';
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
    max-width: 50%;
  }
  .modal-result-body .Content{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 30px;
    .trophy-img{
      width: 100px;
      height: auto;
    }
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

const ResultModal = ({ show, hideModal, winnerName, counterNumber, giftName, giftImg, sponsorName, sponsorImg}) => {
  return (
    <ModalBootstrap show={show} onHide={hideModal} className='modal-winner'>

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

              <div className='Content'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img alt='gift image' src={giftImg} width='300px'/>
                  <p>{giftName}</p>
                </div>

                <div>
                  <p>Vencedxr:</p>
                  <img alt='trophy-img' className='trophy-img' src={trophy}/>
                  <p className='animate heartBeat infinite' >{winnerName}</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <span>Patrocinador:</span>
                    <img title={sponsorName} alt={sponsorName} src={sponsorImg} width='auto' height='40px'/>
                  </div>
                </div>
              </div>
            
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