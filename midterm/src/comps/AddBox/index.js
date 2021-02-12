import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterCheck from 'comps/FliterCheck';
// import ExitButton from '../../image/exit.png';

const FilterBtnBox = styled.div`
    width: 333px;
    height:auto;
    display:flex;
    flex-direction:column;
    background-color:${props=>props.bgcolor ? props.bgcolor : "white"};
    border-radius: 10px;
    color: ${props=>props.color ? props.color : "#141414"};
    font-size: 17px;
    cursor: pointer;
    padding: 12px;
    .button{
        margin:12px;
        right:0 !important;
        bottom:12%;
    }
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


const ApplyButton = styled.button`
    width: ${props=>props.width ? props.width : "112px"};
    height: ${props=>props.height ? props.height : "48px"};
    background-color: ${props=>props.bgcolor ? props.bgcolor : "white"};
    border: 2px solid #60BE68;
    color:#60BE68;
    border-radius:5px;
    font-size:17px;
    :hover{
        background-color: ${props=>props.bgcolor ? "white" : "#60BE68"};
        color:white;
    }
`;
const FilterBox = ({onFormComplete, width, height, bgcolor, text}) => {
    
    const [clickedButton, setClicked] = useState(null);

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [check7, setCheck7] = useState(false);
    const [check8, setCheck8] = useState(false);
    const [check9, setCheck9] = useState(false);
    const [check10, setCheck10] = useState(false);
    const [check11, setCheck11] = useState(false);
    
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [breed, setBreed] = useState("");
    const [size, setSize] = useState("");
    const [gender, setGender] = useState("");
    const [med, setMed] = useState("");

    return <FilterBtnBox width={width} height={height}>
                <InputRow>
            <div>
            <InputLabel for="owner" >Name of Owner</InputLabel>
            <InputForm width="170px" height={height}  type='text' defaultValue="" onChange={(e)=>{
            setName(e.target.value);
        }}/>
            </div>
            <div>
                <InputLabel for="time" >Time</InputLabel>
                <InputForm width="90px" height={height}  type='text' defaultValue="" onChange={(e)=>{
            setTime(e.target.value);
        }}/>
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="email" >Email</InputLabel>
                <InputForm width="170px" height={height}  type='text' defaultValue="" onChange={(e)=>{
            setEmail(e.target.value);
        }}/>
            </div>
            <div>
                <InputLabel for="phone" >Phone Number</InputLabel>
                <InputForm width="90px" height={height}  type='text' defaultValue=""onChange={(e)=>{
            setPhone(e.target.value);
        }}/>
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="breed" >Breed</InputLabel>
                <InputForm width="170px" height={height}  type='text' defaultValue="" onChange={(e)=>{
            setBreed(e.target.value);
        }}/>
            </div>
            <div>
                <InputLabel for="size" >Size</InputLabel>
                <InputForm width="90px" height={height}  type='text' defaultValue="" onChange={(e)=>{
            setSize(e.target.value);
        }}/>
            </div>
        </InputRow>

        <InputRow>
            <div>
                <InputLabel for="gender" >Gender</InputLabel>
                <InputForm width="170px" height={height}  type='text' defaultValue="" onChange={(e)=>{
            setGender(e.target.value);
        }}/>
            </div>
            <div>
                <InputLabel for="medication" >Medication</InputLabel>
                <InputForm width="90px" height={height}  type='text' defaultValue="" onChange={(e)=>{
            setMed(e.target.value);
        }}/>
            </div>
        </InputRow>
        <div className="button">
            <ApplyButton onClick={()=>{
            onFormComplete(name, time, email, phone, breed, size, gender, med);
        }}>Add</ApplyButton>
        </div>
    </FilterBtnBox>
};

FilterBox.defaultProps = {
    onFormComplete:()=>{}
}

export default FilterBox;