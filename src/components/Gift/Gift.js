import React from  'react';
import styled from 'styled-components';

export const StyledGift = styled.div`
    
        cursor:pointer;
        width: 100%;
        display: flex;
        flex-direction: column;

        img {
            height: 300px;
            object-fit: cover;
            width: 100%;
            border-radius: 10px;
            box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.13);
        }

        label {
            display: flex;
            justify-content: left;
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
        <StyledGift key={props.id} {...props}>
            <img src={props.ImgUrl} alt='Imagem do brinde'/>
            <label>{props.Title}</label>
        </StyledGift>
     );
}
 
export default Gift;
