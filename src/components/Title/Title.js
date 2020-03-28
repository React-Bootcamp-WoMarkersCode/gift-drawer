import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.div`
	font-family: 'Montserrat', sans-serif;
	position: absolute;
	font-weight: 900;
	font-size: ${props => props.fontSize};
	top: ${props => props.top};
	left: ${props => props.left};
	bottom: ${props => props.bottom};
	right: ${props => props.right};
	height: ${props => props.height};
	width: ${props => props.width};
	color: ${props => props.color};
`
const Title = props => {
	return (
		<TitleStyle
			top={props.top}
			bottom={props.bottom}
			left={props.left}
			right={props.right}
			height={props.height}
			width={props.width}
			fontSize={props.fontSize}
			color={props.color}>
				{props.text}
		</TitleStyle>
	)
}
export default Title;