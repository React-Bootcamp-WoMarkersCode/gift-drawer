import React, {useState} from 'react'
import { StyledButton } from '../Button/Button'
import styled from 'styled-components';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

export const StyledModal = props => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = e => {
    setVisible(false)
  };

  return(
    <div>
      <StyledButton type={props.btnType} onClick={showModal} label={props.btnLabel} />

      <Modal
        title={props.modalTitle}
        visible={visible}
        onCancel={handleCancel}
      >
        <p>{props.content}</p>
      </Modal>
    </div>
  )
}