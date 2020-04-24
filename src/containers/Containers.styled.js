import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 67px;
  }
    @media only screen and (max-width: 600px) {
      h1{
        font-size: 1.7em;
        text-align: center;
      }
  }
`
export const ImportDocArea = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media only screen and (max-width: 600px) {
    width: 250px;
  }
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
  span{
    color: red;
    font-size: 12px;
  }
` 