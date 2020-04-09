import React from 'react';
import styled from 'styled-components';

const LinkStyle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  color: #D33741;
  padding-top: ${props => props.paddingTop};
  padding-left: ${props => props.paddingLeft};
  padding-bottom: ${props => props.paddingBottom};
  padding-right: ${props => props.paddingRight};
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