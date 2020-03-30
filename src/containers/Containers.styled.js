import styled from 'styled-components'

export const Container = styled.div`
  margin: 40px 0px;
`
export const ImportDocArea = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  label{
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 7px;
  }
  .csv-reader-input{
    display: flex;
    flex-direction: column;
    color: #552B9A;
    border: solid 1px #80808059;
    padding: 4px 14px;
    border-radius: 5px;
  }
` 