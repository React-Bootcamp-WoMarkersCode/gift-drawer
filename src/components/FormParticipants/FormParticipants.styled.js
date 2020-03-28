import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;

`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin-bottom: 30px;
  label{
    color: #5a5a5a;
    margin-bottom: 5px;
  }
  input{
    width: 100%;
    height: 30px;
    border-radius: 4px;
    border: solid 1px #c3c3c3;
    padding: 0px 10px;
    box-sizing: border-box;
  }
  button{
    width: 300px;
  }
`