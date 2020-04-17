import React from 'react';
import styled from 'styled-components';

export const Input = styled.div`
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  label{
    margin: 5px 0px;
    color: black;
    z-index: 1;
  }
  input{
    height: auto;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #272727;
    opacity: 0.4;
    padding: 10px;
  }
`

export const Wrapper = (props) => {
  return (
    <Input height={props.height}>
      <label>{props.textLabel}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={props.className}
      />
    </Input>
  )
}
