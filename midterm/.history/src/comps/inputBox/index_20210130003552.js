import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 325px;
    height:auto;
    border: solid 1px red;
    
`;

const InputRow = styled.div`
    display:flex;
    justify-content:center;

    div{
        display:inline-flex;
        flex-direction:column;
        align-items:flex-start;
        margin:6px 4px;
    }
`;
const InputRadio = styled.div`
    display:inline-flex !important;
    flex-direction:row !important;
    // justify-content:center;
    // align-items:center;
    border: 1px solid green;
    div{
        display:flex;
    }
`;

const InputLabel = styled.label`
    font-size: 11px;

`
const InputForm = styled.input`
    min-width: ${props=>props.width ? props.width : "90px"};
    min-height: ${props=>props.height ? props.height: "28px"};
    max-width: ${props=>props.width ? props.width : "280px"};
    overflow:hidden;
    font-size:13px;
    border: 1px solid #D3D9D9;
    border-radius:5px;
    min-height:25px;
    padding:5px;

`;


const Input_box = ({ width, height,text}) => {

    return <Container width={width} height={height}>
        <InputRow>
            <div>
                <InputLabel for="owner" >Name of Owner</InputLabel>
                <InputForm width="170px" height={height}  type='text' placeholder='name' />
            </div>
            <div>
                <InputLabel for="time" >Time</InputLabel>
                <InputForm width="90px" height={height}  type='text' placeholder='time' />
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="email" >Email</InputLabel>
                <InputForm width="170px" height={height}  type='text' placeholder='email' />
            </div>
            <div>
                <InputLabel for="phone" >Phone Number</InputLabel>
                <InputForm width="90px" height={height}  type='text' placeholder='phone number' />
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="breed" >Breed</InputLabel>
                <InputForm width="170px" height={height}  type='text' placeholder='breed' />
            </div>
            <InputRadio>
                <div>
                    <InputLabel for="size" >S</InputLabel>
                    <InputForm width="90px" height={height}  type='radio' value='small' />
                </div>
                <div>    
                    <InputLabel for="size" >M</InputLabel>
                    <InputForm width="90px" height={height}  type='radio' value='medium' />
                </div>
                <div>
                    <InputLabel for="size" >L</InputLabel>
                    <InputForm width="90px" height={height}  type='radio' value='large' />
                </div>
            </InputRadio>
        </InputRow>

        <InputRow>
            <div>
                <InputLabel for="email" >Email</InputLabel>
                <InputForm width="170px" height={height}  type='text' placeholder='email' />
            </div>
            <div>
                <InputLabel for="phone" >Phone Number</InputLabel>
                <InputForm width="90px" height={height}  type='text' placeholder='phone number' />
            </div>
        </InputRow>

    </Container>
};

Input_box.defaultProps = {
    width: null,
    height: null,
    text:"label"
}

export default Input_box;