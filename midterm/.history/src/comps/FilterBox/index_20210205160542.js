import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterCheck from 'comps/FliterCheck';
// import ExitButton from '../../image/exit.png';

const FilterBtnBox = styled.div`
    width: 345px;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border: solid 1px red;
    background-color:${props=>props.bgcolor ? props.bgcolor : "white"};
    border-radius: 5px;
    color: ${props=>props.color ? props.color : "#141414"};
    font-size: 17px;
    cursor: pointer;
    &>span {
        font-size:22px;
    }
`;

const InputRow = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    div{
        display:inline-flex;
        flex-direction:column;
        align-items:flex-start;
        margin:6px 4px;
    }
`;

const InputLabel = styled.label`
    font-size: 20px;

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
const FilterCheckbox = styled.input.attrs({type:'checkbox'})``;

const FilterBox = ({expand, onMenuExpand, width, height, name, bgcolor, text}) => {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    
    useEffect(()=>{
        //this is Change
        setCheck1(check3);
        setCheck2(check3);
    }, [check3])

    return <FilterBtnBox width={width} height={height}>
        <span>Filters</span>
        {/* <ExitButton /> */}
        <InputRow>
            
        </InputRow>
        <InputRow>
        </InputRow>
        <InputRow>
            <InputLabel for="size" >Size</InputLabel>
            <span>
                <FilterCheckbox onChange={(e)=>{
                    setCheck3(e.target.checked);
                }} checked={check1} /> S
            </span>
            <span>
                <FilterCheckbox onChange={(e)=>{
                    setCheck3(e.target.checked);
                }} checked={check1} /> M
               </span>
            <span>
                <FilterCheckbox onChange={(e)=>{
                    setCheck3(e.target.checked);
                }} checked={check1} /> L
            </span>
        </InputRow>

    </FilterBtnBox>
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