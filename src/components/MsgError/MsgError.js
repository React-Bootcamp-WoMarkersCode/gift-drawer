import React from 'react';
import styled from 'styled-components';

const ErrorStyle = styled.div`
	font-family: 'Montserrat', sans-serif;
	position: absolute;
	font-size: 10px;
	color: rgb(180, 0, 0);
	top: ${props => props.top};
	left: ${props => props.left};
	bottom: ${props => props.bottom};
	right: ${props => props.right};
	height: ${props => props.height};
	width: ${props => props.width};
`
const MsgError = props => {
	return (
		<>
			<ErrorStyle
				top={props.top}
				bottom={props.bottom}
				left={props.left}
				right={props.right}
				height={props.height}
				width={props.width}>
					{props.text}
			</ErrorStyle>
		</>
	)
}
export default MsgError;