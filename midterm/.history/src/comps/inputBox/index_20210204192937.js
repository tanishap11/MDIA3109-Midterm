import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


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
    border: 1px solid green;
    margin-left: 6px;
    div{
        display:flex;
        align-items:center;
        margin: 0px 5px;
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

const InputRadioForm = styled.input`
    min-width: ${props=>props.width ? props.width : "12px"};
    min-height: ${props=>props.height ? props.height: "28px"};
    max-width: ${props=>props.width ? props.width : "280px"};
    overflow:hidden;
    font-size:13px;
    border: 1px solid #D3D9D9;
    border-radius:5px;
    min-height:25px;
    padding:5px;
`;
export const Pending = "#0D71E7";
export const Progress = "#FFC225";
export const Completed = "#60BE68";

const ButtonRow = styled.div`
    display:flex;
    align-items:space-between;
    justify-contents:center;
`;
const ProcessBtn = styled.button`
    min-width: ${props=>props.width ? props.width : "90px"};
    min-height: ${props=>props.height ? props.height: "28px"};
    border: ${props=>props.bdcolor ?  "1px solid"+props.bdcolor+";" : "none"};
    border-radius:5px;
    color:${props=>props.ftcolor ? props.ftcolor : "#F4F6F6" };
    background-color:${props=>props.bgcolor ?  "#F4F6F6" : props.bgcolor};
    :active, :focus{
        background-color:${props=>props.bgcolor ? props.bgcolor : "#F4F6F6"};
        color:${props=>props.ftcolor ? "#F4F6F6" : props.ftcolor};
    }
    margin:12px 5px 16px 5px;
`;


const Input_box = ({ width, height,text, bgcolor, bdcolor, ftcolor, onBtnSelect}) => {

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
            <div>
                <InputRadio>
                    <div>
                        <InputLabel for="size" >S</InputLabel>
                        <InputRadioForm type='radio' value='small' />
                    </div>
                    <div>    
                        <InputLabel for="size" >M</InputLabel>
                        <InputRadioForm  type='radio' value='medium' />
                    </div>
                    <div>
                        <InputLabel for="size" >L</InputLabel>
                        <InputRadioForm type='radio' value='large' />
                    </div>
                </InputRadio>
            </div>
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

        <ButtonRow>
            <ProcessBtn onClick={()=>{
                // onBtnSelect("bg");
            }}
             bgcolor={Pending} bdcolor={Pending} ftcolor={Pending} >Pending</ProcessBtn>
            <ProcessBtn bgcolor={Progress} bdcolor={Progress} ftcolor={Progress} >In-Progress</ProcessBtn>
            <ProcessBtn bgcolor={Completed} bdcolor={Completed} ftcolor={Completed} >Completed</ProcessBtn>
        </ButtonRow>

    </Container>
};

Input_box.defaultProps = {
    width: null,
    height: null,
    text:"label",
    bgcolor:null,
    bdcolor:null,
    ftcolor:"#FFC225"
}

export default Input_box;