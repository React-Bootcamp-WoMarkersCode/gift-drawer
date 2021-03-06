import React from 'react'
import { StyledButton } from '../Button/Button'
import styled from 'styled-components';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

export const AntdModal = styled(Modal)`
    width: 800px!important;
    height: auto;
  .ant-modal-mask{
    background-color: #552B9A;
  }
  .ant-modal-close{
    color: #D33741;
    .ant-modal-close-x {
      width: 70px;
      height: 70px;
      line-height: 70px;
      .anticon svg{
        width: 25px;
        height: 25px;
      }
    }
  }
  .ant-modal-content{
    padding: 30px 0px;
    .ant-modal-body span{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0px;
      h1{
        font-weight: bold;
        font-size: 28px;
        line-height: 34px;
      }
      img{
        margin-bottom: 20px;
      }
      span{
        font-size: 14px;
      }
      a{
        font-size: 16px;
        font-weight: bold;
        color: #D33741;
        margin: 10px 0px;
      }
      @media only screen and (max-width: 600px) {
        h1{
          font-size: 24px;
        }
      }
    }
  }
`

export const StyledModal = props => {
  const { btnType, showModal, btnLabel, modalTitle ,visible, onCancel, footer, content} = props

  return(
    <div>
      <StyledButton className='btn-modal' type={btnType} onClick={showModal} label={btnLabel} />

      <AntdModal
        title={modalTitle}
        visible={visible}
        onCancel={onCancel}
        footer={footer}
        destroyOnClose='true'
      >
        <span>{content}</span>
      </AntdModal>
    </div>
  )
}