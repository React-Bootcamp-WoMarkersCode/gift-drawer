 
import React from 'react';
import Title from '../Title/Title';
import Label from '../Label/Label';

export default function Logo() {
    return (
        <>
            <Title text="amobrindes" 
                   color="white" 
                   fontSize="55px"
                   top="40%" left="15%" />

            <Label label="from: womakerscode" 
                   color="white"
                   fontSize="15px"
                   top="48.5%" left="15%" />

            <img src="https://i.imgur.com/uQvmwdl.png" 
                 style={{
                     position: "absolute",
                     top: "41%",
                     left: "8.5%"
                 }} alt="logo" />
        </>
    )
}