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
    min-height: ${props=>props.height ? props.height: "24px"};
    overflow:hidden;
    border: 1px solid #D3D9D9;
    border-radius:5px;
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

/*const fakedb = [
    {
        name: "Tanisha Patel",
        time: "01/02/2021",
        email: "tanishapatel@outlook.com",
        phone: "6046056789",
        breed: "Beagle",
        size: "M",
        gender: "Male",
        med: "N",
        progress: "completed"
    }
]*/



const Input_box = ({ width, height, name, time, email, phone, breed, size, gender, med}) => {


    return <div>
        <Container width={width} height={height}>
        <InputRow>
            <div>
            <InputLabel for="owner" >Name of Owner</InputLabel>
            <InputForm width="170px" height={height}  type='text' defaultValue={name} />
            </div>
            <div>
                <InputLabel for="time" >Time</InputLabel>
                <InputForm width="90px" height={height}  type='time' defaultValue={time} />
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="email" >Email</InputLabel>
                <InputForm width="170px" height={height}  type='email' defaultValue={email} />
            </div>
            <div>
                <InputLabel for="phone" >Phone Number</InputLabel>
                <InputForm width="90px" height={height}  type='text' defaultValue={phone} />
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="breed" >Breed</InputLabel>
                <InputForm width="170px" height={height}  type='text' defaultValue={breed} />
            </div>
            <div>
                <InputLabel for="size" >Size</InputLabel>
                <InputForm width="90px" height={height}  type='text' defaultValue={size} />
                
            </div>
        </InputRow>

        <InputRow>
            <div>
                <InputLabel for="gender" >Gender</InputLabel>
                <InputForm width="170px" height={height}  type='text' defaultValue={gender} />
            </div>
            <div>
                <InputLabel for="medication" >Medication</InputLabel>
                <InputForm width="90px" height={height}  type='text' defaultValue={med} />
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
    </div>
};

Input_box.defaultProps = {
    width: null,
    height: null,
    text:"label",
    bgcolor:null,
    bdcolor:null,
    ftcolor:"#FFC225",
    name:null,
    time:null,
    email:null,
    phone:null,
    breed:null,
    size:null,
    gender:null,
    med:null

}

export default Input_box;