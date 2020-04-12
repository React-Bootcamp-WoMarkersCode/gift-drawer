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
    width: 100%;
    height: 30px;
    border-radius: 4px;
    border: 1px solid #272727;
    padding: 0px 10px;
    box-sizing: border-box;
    opacity: 0.4;
  }
`

export const Wrapper = (props) => {
  return(
    <Input>
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
