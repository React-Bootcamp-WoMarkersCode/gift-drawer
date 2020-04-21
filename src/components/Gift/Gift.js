import React from  'react';
import styled from 'styled-components';

export const StyledGift = styled.div`
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  img {
    opacity: 1;
    display: block;
    width: 250px;
    height: 250px;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 37%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  &:hover img{
    opacity: 0.3;
  }
  &:hover .middle{
    opacity: 1;
  }
  .text {
    background-color: #9e9e9e;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 16px;
  }

  label {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    padding: 20px 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    overflow-wrap: break-word;
  }
`
const Gift = (props) => {
  return (
    <StyledGift
      {...props}
      key={props.id}
      onClick={props.showModal}
    >
      <img src={props.imgUrl} alt='Imagem do brinde'/>
      <div className="middle">
        <div className="text" onClick={props.onClick}>
          Sortear esse brinde!
        </div>
      </div>
      <label>{props.title}</label>
    </StyledGift>
  );
}

export default Gift;
