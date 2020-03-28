import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 30px;
  margin: 10px;
  border-radius: 50px;
  cursor:pointer;
  outline: none;
  border: none;
  background-color: ${props => 
  props.type === 'red' ? '#D33741' : 
  props.type === 'purple' ? '#552B9A' : '#fff'};
  color: #fff;
  font-weight: bold;
`;