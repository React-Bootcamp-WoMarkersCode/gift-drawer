import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/source/_base.css'
import 'animate.css/source/attention_seekers/heartBeat.css'
import '../assets/styles/result-modal.css'
import close from '../assets/images/close.png'
import trophy from '../assets/images/trophy.png'

const ResultModal = ({ show, hideModal, winnerName }) => {

  return (
    <Modal show={show} onHide={hideModal} className='modal-winner'>
      <Modal.Body className='modal-result-body scroller'>
        <img alt='close-icon' className='close-icon' src={close}  onClick={hideModal}/>

        <h3>VENCEDORX</h3>
        <img alt='trophy-img' className='trophy-img' src={trophy}/>

        <p className='animate heartBeat infinite' >{winnerName}</p>
      </Modal.Body>

      <Modal.Footer className='modal-result-footer'>
        <Button className='button confirm-btn' variant='' onClick={hideModal}>
          CONFIRMAR
        </Button>
      </Modal.Footer>
    </Modal>
  )
};

  export default ResultModal;


