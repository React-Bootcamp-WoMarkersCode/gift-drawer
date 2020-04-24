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
    max-width: 650px;
    @media only screen and (max-width: 768px) {
      max-width: unset;
    }
  }
  .modal-result-body {
    .Content{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;
      .ContentGiftImg{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          width: 300px;
          height: 300px;
        }
      }
      .ContentSortInfos{
        width: 50%; 
        text-align: left; 
        margin-left: 50px;
        p{
          font-weight: bold;
        }
        .Winner{
          display: flex;
          flex-direction: column;
          p{
            color: #D33741;
          }
        }
        .Sponsor{
          display: flex;
          flex-direction: column;
          img{
            padding: 20px 0px;
          }
        }
      }
    }
    .Desktop{ display: flex}
    .Mobile{ display: none }
    @media only screen and (max-width: 768px) {
      .Content{
        align-items: center;
        justify-content: center;
        .trophy-img{
          width: 200px;
          height: auto;
        }
        .ContentSortInfos{
          text-align: center;
          margin-left: 0;
          p{
            font-weight: bold;
            font-size: 20px;
          }
          .Sponsor{
            align-items: center;
          }
        }
      }
      .Desktop{ display: none!important }
      .Mobile{ display: flex!important}
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

              <div className='Content Desktop'>
                <div className='ContentGiftImg'>
                  <img alt='gift' src={giftImg}/>
                </div>

                <div className='ContentSortInfos'>
                  <p>{giftName}</p>

                  <div className='Winner'>
                    <span>Vencedxr:</span>
                    <p className='animate heartBeat infinite' >{winnerName}</p>
                  </div>
    
                  <div className='Sponsor'>
                    <span>Patrocinador:</span>
                    <img title={sponsorName} alt={sponsorName} src={sponsorImg} width='150px' height='auto'/>
                  </div>
                </div>
              </div>

              <div className='Content Mobile'>
                <div className='ContentSortInfos'>
                  <p>{giftName}</p>

                  <div className='Winner'>
                    <span>Vencedxr:</span>
                    <img alt='trophy-img' className='trophy-img' src={trophy}/>
                    <p className='animate heartBeat infinite' >{winnerName}</p>
                  </div>
    
                  <div className='Sponsor'>
                    <span>Patrocinador:</span>
                    <img title={sponsorName} alt={sponsorName} src={sponsorImg} width='150px' height='auto'/>
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