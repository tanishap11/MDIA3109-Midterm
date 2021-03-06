import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display:inline-flex;
    flex-direction:column;
    border: solid 1px red;
`;

const inputLabel = styled.div`
    font-size: 11px;

`
const inputBox = styled.input`
    min-width: ${props=>props.width ? props.width : "90px"};
    min-height: ${props=>props.height ? props.height: "28px"};
    max-width: ${props=>props.width ? props.width : "280px"};
    border: 1px solid #D3D9D9;

`;


const Input_box = ({ width, height,text}) => {

    return <Container width={width} height={height}>
        <inputLabel>{text}</inputLabel>
        <inputBox></inputBox>
    </Container>
};

Input_box.defaultProps = {
    width: null,
    height: null,
    text:"label"
}

export default Input_box;