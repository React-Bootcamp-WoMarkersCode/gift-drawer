import styled from 'styled-components';

export const Title = styled.h1`
  text-align: left;
  margin-left: 4%;
`
export const Table = styled.table`
display: flex;
    flex-direction: column;
    margin: 30px 60px;
    thead tr th{
      width: 25vw;
      text-align: left;
      padding: 20px;
      border-top: solid 1px #e4e4e4;
      border-bottom: solid 1px #e4e4e4;
    }
    tbody tr td{
      width: 25vw;
      text-align: left;
      padding: 0px 20px;
      border-bottom: solid 1px #e4e4e4;
      &:last-child{
      text-align: right;
      }
    }
`;