import React from 'react';
import styled from 'styled-components';

const LinkStyle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  color: #D33741;
  padding: 10px 0;
  height: ${props => props.height};
  width: ${props => props.width};
  &:link{
    text-decoration:none;
  }
`
const Link = props => {
  return (
    <LinkStyle as="a" {...props}>{props.text}</LinkStyle>
  )
}
export default Link;