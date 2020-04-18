import React from 'react';
import styled from 'styled-components';

const ErrorStyle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  color: rgb(180, 0, 0);
`
const MsgError = props => {
  return (
    <ErrorStyle {...props}>{props.text}</ErrorStyle>
  )
}
export default MsgError;