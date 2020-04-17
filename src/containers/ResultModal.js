import React, { useState }from 'react';
import { Modal, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/source/_base.css'
import 'animate.css/source/attention_seekers/heartBeat.css'
import '../assets/styles/result-modal.css'
import close from '../assets/images/close.png'
import trophy from '../assets/images/trophy.png'

const ResultModal = ({ show, hideModal }) => {
  const [showModal, setShowModal] = useState(show);

  return (
    <Modal show={show} onHide={hideModal} className='modal-winner'>
      <Modal.Body className='modal-result-body scroller'>
        <img className='close-icon' src={close}  onClick={hideModal}/>

        <h3>VENCEDORX</h3>
        <img className='trophy-img' src={trophy}/>

        <p className='animate heartBeat infinite' >NOME DO VENCEDOR</p>
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


