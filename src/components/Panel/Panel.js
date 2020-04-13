import React from 'react';
import styled from 'styled-components';

const PanelStyle = styled.div`
  font-family: 'Montserrat', sans-serif;
  background-color: white;
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  
`
const Panel = props => {
  return (
    <PanelStyle
      top={props.top}
      bottom={props.bottom}
      left={props.left}
      right={props.right}
      height={props.height}
      width={props.width}
    />
  )
}
export default Panel;