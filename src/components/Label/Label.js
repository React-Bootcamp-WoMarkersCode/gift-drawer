import React from 'react';
import styled from 'styled-components';

const LabelStyle = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.fontSize};
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    bottom: ${props => props.bottom};
    right: ${props => props.right};
    color: ${props => props.color};
`
const Label = props => {
    return (
        <>
            <LabelStyle top={props.top}
                        bottom={props.bottom}
                        left={props.left}
                        right={props.right}
                        fontSize={props.fontSize}
                        color={props.color}>{props.label}</LabelStyle>
        </>
    )
}
export default Label;