import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1{
    text-align: left;
  }
  a{
    text-decoration: none;
  }
`
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
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
    img{
      cursor: pointer;
    }
  }
`;