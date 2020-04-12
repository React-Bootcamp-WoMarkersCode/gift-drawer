import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  padding-top: ${props => props.paddingTop};
  padding-left: ${props => props.paddingLeft};
  padding-bottom: ${props => props.paddingBottom};
  padding-right: ${props => props.paddingRight};
`
const Title = props => {
  return (
    <TitleStyle {...props}>{props.text}</TitleStyle>
  )
}
export default Title;