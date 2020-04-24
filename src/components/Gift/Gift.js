import React from  'react';
import styled from 'styled-components';

export const StyledGift = styled.div`
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: column;

  .imgContainer {
    width: 100%;
    height: 280px;
    overflow: hidden;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.13);
    border-radius: 10px;
  }

  img {
    opacity: 1;
    display: block;
    transition: .5s ease;
    backface-visibility: hidden;
    height: 100%;
    width: 100%;
  }

  .cover {
    object-fit: cover;
    
  }
 
  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 125px;
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
    background-color: #D33741;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 16px;
    text-align: center;
  }

  label {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 20px 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.8rem;
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
      <div className="imgContainer">
        <img className="cover" src={props.imgUrl} alt='Imagem do brinde'/>
      </div>
      
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
