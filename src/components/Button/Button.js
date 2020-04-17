import React from 'react'
import styled from 'styled-components';

export const Button = styled.button`
  font-family: ${ props => 
    props.type === 'red' || props.type === 'purple' ? 'Montserrat' : 'unset'};
  font-size: ${props =>
    props.type === 'red' || props.type === 'purple' ? '18px' : '17px'};
  font-weight: ${ props =>
    props.type === 'red' || props.type === 'purple' ? '700' : 'normal'};
  padding: ${ props =>
    props.type === 'red' || props.type === 'purple' ? '10px 30px' : '0px'};
  margin: ${ props =>
    props.type === 'red' || props.type === 'purple' ? '0px' : '0px 0px 0px 0px'};
  border-radius: 50px;
  border: none;
  box-shadow: ${ props => 
    props.type === 'red' ? '0px 7px 7px rgba(211, 55, 65, 0.25)' : 
    props.type === 'purple' ? '0px 7px 7px rgba(99, 55, 211, 0.25)' : '#fff'};
  transition: 0.5s;
  width: ${props => props.width};
  height: ${props => props.height};
  cursor:pointer;
  outline: none;
  border: none;
  background-color: ${ props => 
    props.type === 'red' ? '#D33741' : 
    props.type === 'purple' ? '#552B9A' : '#fff'};
  color: ${ props => props.type === 'red' || props.type === 'purple' ? '#fff' : '#552B9A'};
  &:hover{
      background: ${ props => 
        props.type === 'red' ? 'rgb(209, 5, 19)' : 
        props.type === 'purple' ? '#552B9A' : '#fff'};
      cursor: pointer;
    }
  &:disabled{
    background-color: #cacaca;
    box-shadow: 0px 7px 7px rgba(119, 119, 119, 0.25)
  }
`;

export const StyledButton = props => {
  const { type, onClick, id, className, disabled, label, width, height} = props

  return(
    <Button type={type} onClick={onClick} id={id} className={className} disabled={disabled} width={width} height={height}>
      {label}
    </Button>
  )
}
