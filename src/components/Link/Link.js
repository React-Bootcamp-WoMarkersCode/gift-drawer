import React from 'react';
import styled from 'styled-components';

const LinkStyle = styled.div`
	font-family: 'Montserrat', sans-serif;
	position: absolute;
	font-size: 15px;
	color: #D33741;
	top: ${props => props.top};
	left: ${props => props.left};
	bottom: ${props => props.bottom};
	right: ${props => props.right};
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