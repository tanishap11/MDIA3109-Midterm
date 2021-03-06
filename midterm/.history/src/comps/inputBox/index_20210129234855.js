import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display:column;
    flex-direction:flex-start;
    border: solid 1px red;
`;

const InputLabel = styled.div`
    font-size: 11px;

`
const InputForm = styled.input`
    min-width: ${props=>props.width ? props.width : "90px"};
    min-height: ${props=>props.height ? props.height: "28px"};
    max-width: ${props=>props.width ? props.width : "280px"};
    border: 1px solid #D3D9D9;
    border-radius:5px;
    min-height:25px;
    padding:5px;

`;


const Input_box = ({ width, height,text}) => {

    return <Container width={width} height={height}>
        <InputLabel>{text}</InputLabel>
        <InputForm width={width} height={height}  type='text' placeholder='name' />
    </Container>
};

Input_box.defaultProps = {
    width: null,
    height: null,
    text:"label"
}

export default Input_box;