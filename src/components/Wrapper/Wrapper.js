import React from 'react';
import styled from 'styled-components';

export const Input = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label{
    margin: 5px 0px;
    color: black;
    z-index: 1;
  }
  input{
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: 4px;
    border: 1px solid #272727;
    padding: 0px 10px;
    box-sizing: border-box;
    opacity: 0.4;
  }
`

export const Wrapper = (props) => {
  return (
    <Input height={props.height} width={props.width}>
      <label>{props.textLabel}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleInputChange}
        className={props.className}
      />
    </Input>
  )
}
