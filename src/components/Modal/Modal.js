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
    .ant-modal-body p{
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
      p{
        font-size: 14px;
      }
      a{
        font-size: 16px;
        font-weight: bold;
        color: #D33741;
        margin: 10px 0px;
      }
    }
  }
`

export const StyledModal = props => {
  return(
    <div>
      <StyledButton className='btn-modal' type={props.btnType} onClick={props.showModal} label={props.btnLabel} />

      <AntdModal
        title={props.modalTitle}
        visible={props.visible}
        onCancel={props.onCancel}
        footer={props.footer}
        destroyOnClose='true'
      >
        <p>{props.content}</p>
      </AntdModal>
    </div>
  )
}