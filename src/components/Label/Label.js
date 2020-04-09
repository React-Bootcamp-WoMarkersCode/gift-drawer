import React from 'react';
import styled from 'styled-components';

const LabelStyle = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
`
const Label = props => {
  return (
    <LabelStyle {...props}> {props.label} </LabelStyle>
  )
}
export default Label;