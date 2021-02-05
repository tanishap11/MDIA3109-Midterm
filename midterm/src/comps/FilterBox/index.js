import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterCheck from 'comps/FliterCheck';

const FilterBtnBox = styled.div`
min-width: ${props=>props.width ? props.width : "112px"};
min-height: ${props=>props.height ? props.height : "48px"};
max-width: ${props=>props.width ? props.width : "112px"};
max-height: ${props=>props.height ? props.height : "48px"};
border: ${props=>props.border ? props.border : "0px solid white"};
display: flex;
justify-content: center;
align-items: center;
background-color:${props=>props.bgcolor ? props.bgcolor : "#60BE68"};
border-radius: 5px;
color: ${props=>props.color ? props.color : "white"};
font-size: 17px;
cursor: pointer;
`;

const FilterImg = styled.img`
display: ${props=>props.display ? props.display : "block"};
position: relative;
left: -10px;
width: 22px;
height: 22px;
`;

export const Pending = "#0D71E7";
export const Progress = "#FFC225";
export const Completed = "#60BE68";

const Container = styled.div`
    width: 325px;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    // border: solid 1px red;
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
        align-items:center;
        justify-content:center;
        margin: 0px -32px;
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

const ButtonRow = styled.div`
    // width:280px;
    display:flex;
    // flex-direction:space-between;
    align-items:space-between;
    justify-contents:center;
`;

const FilterBox = ({expand, onMenuExpand, width, height, name, bgcolor, text}) => {

    return <Container width={width} height={height}>
        <InputRow>
            <div>
                <FilterCheck text="S"> </FilterCheck>
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
                <InputLabel for="gender" >Gender</InputLabel>
                <InputForm width="170px" height={height}  type='text' placeholder='gender' />
            </div>
            <div>
                <InputLabel for="medication" >Medication</InputLabel>
                <InputForm width="90px" height={height}  type='text' placeholder='Y/N' />
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="preference" >Accompany Preference</InputLabel>
                <InputForm width="170px" height={height}  type='text' placeholder='group/alone' />
            </div>
            <div>
                <InputLabel for="allergy" >Allergy</InputLabel>
                <InputForm width="90px" height={height}  type='text' placeholder='Y/N' />
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="comments" >Comments</InputLabel>
                <InputForm width="280px" height="auto"  type='text' placeholder='memo' />
            </div>
        </InputRow>

    </Container>
};

FilterBox.defaultProps = {
    width: null,
    height: null,
    text:"label",
    bgcolor:null,
    bdcolor:null,
    ftcolor:"#FFC225"
}

export default FilterBox;