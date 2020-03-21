import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 30px;
  margin: 10px;
  border-radius: 50px;
  cursor:pointer;
  outline: none;
  border: none;
  background-color: ${props => 
  props.type === 'red' ? 'red' : 
  props.type === 'purple' ? 'purple' : 
  props.type === 'green' ? 'green' : 'yellow'}
`;