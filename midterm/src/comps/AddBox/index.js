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
const FilterBox = ({click, onMenuExpand, width, height, name, bgcolor, text}) => {
    
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
    
    
    // useEffect(()=>{
    //     //this is Change
    //     setCheck1(check3);
    //     setCheck2(check3);
    //     setCheck3(check3);
    //     setCheck4(check9);
    //     setCheck5(check11);
    //     setCheck6(check11);
    //     setCheck7(check11);
    //     setCheck8(check11);
    //     setCheck9(check11);
    //     setCheck10(check11);
    //     setCheck11(check11);
    // }, [check11])

    return <FilterBtnBox width={width} height={height}>
        
        {/* <ExitButton /> */}
        {/* <InputRow>
            <span>Filters</span>  
        </InputRow>
        <InputRow>
        </InputRow>
        <InputRow>
            <InputLabel for="size" >Size</InputLabel>
            <div>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck1(e.target.checked);
                    }} checked={check1} /> S
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck2(e.target.checked);
                    }} checked={check2} /> M
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck3(e.target.checked);
                    }} checked={check3} /> L
                </span>
            </div>
        </InputRow>
        <InputRow>
            <InputLabel for="Breed" >Breed</InputLabel>
            <div>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck4(e.target.checked);
                    }} checked={check4} /> Beagle
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck5(e.target.checked);
                    }} checked={check5} /> Pomeranian
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck6(e.target.checked);
                    }} checked={check6} /> Husky
                </span>
                </div>
        </InputRow>

        <InputRow>
            <div>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck7(e.target.checked);
                    }} checked={check7} /> Shiba
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck8(e.target.checked);
                    }} checked={check8} /> Other
                </span>
            </div>
        </InputRow>

        <InputRow>
            <InputLabel for="progress" >Progress</InputLabel>
            <div>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck9(e.target.checked);
                    }} checked={check9} /> Pending
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck10(e.target.checked);
                    }} checked={check10} /> In Progress
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck11(e.target.checked);
                    }} checked={check11} /> Completed
                </span>
            </div>
        </InputRow>
                */}
                <InputRow>
            <div>
            <InputLabel for="owner" >Name of Owner</InputLabel>
            <InputForm width="170px" height={height}  type='text' defaultValue="" />
            </div>
            <div>
                <InputLabel for="time" >Time</InputLabel>
                <InputForm width="90px" height={height}  type='text' defaultValue="" />
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="email" >Email</InputLabel>
                <InputForm width="170px" height={height}  type='text' defaultValue="" />
            </div>
            <div>
                <InputLabel for="phone" >Phone Number</InputLabel>
                <InputForm width="90px" height={height}  type='text' defaultValue=""/>
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="breed" >Breed</InputLabel>
                <InputForm width="273px" height={height}  type='text' defaultValue="" />
            </div>
            <div>
                {/*
                <InputRadio>
                    <div>
                        <InputLabel for="size" >S</InputLabel>
                        <InputRadioForm type="checkbox" value='small' onchange="checkboxChange()" />
                    </div>
                    <div>    
                        <InputLabel for="size" >M</InputLabel>
                        <InputRadioForm  type="checkbox" value='medium' onchange="checkboxChange()" />
                    </div>
                    <div>
                        <InputLabel for="size" >L</InputLabel>
                        <InputRadioForm type="checkbox" value='large' onchange="checkboxChange()"/>
                    </div>
                </InputRadio>
                */}
            </div>
        </InputRow>

        <InputRow>
            <div>
                <InputLabel for="gender" >Gender</InputLabel>
                <InputForm width="170px" height={height}  type='text' defaultValue="" />
            </div>
            <div>
                <InputLabel for="medication" >Medication</InputLabel>
                <InputForm width="90px" height={height}  type='text' defaultValue="" />
            </div>
        </InputRow>
        <div className="button">
            <ApplyButton onClick={(e)=>{
                clickedButton();
            }} width={width} height={height} bgcolor={bgcolor}>Add</ApplyButton>
        </div>
    </FilterBtnBox>
};

// FilterBox.defaultProps = {
//     width: null,
//     height: null,
//     text:"label",
//     bgcolor:null,
//     bdcolor:null,
//     ftcolor:"#FFC225",
// }

export default FilterBox;