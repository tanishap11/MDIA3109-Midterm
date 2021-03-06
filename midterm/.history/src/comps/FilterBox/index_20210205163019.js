import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterCheck from 'comps/FliterCheck';
// import ExitButton from '../../image/exit.png';

const FilterBtnBox = styled.div`
    width: 333px;
    height:auto;
    display:flex;
    flex-direction:column;
    // justify-content:center;
    // align-items:center;
    border: solid 1px red;
    background-color:${props=>props.bgcolor ? props.bgcolor : "white"};
    border-radius: 5px;
    color: ${props=>props.color ? props.color : "#141414"};
    font-size: 17px;
    cursor: pointer;
    padding: 12px;
`;

const InputRow = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    &:div{
        display:inline-flex;
        flex-direction:row !important;
        align-items:flex-start;
        margin:6px 12px;
        
        
    }
    &>span {
        font-size:22px;
        margin-bottom:10px;
    }
    .checks{
        margin-right:6px;
    }
`;

const InputLabel = styled.label`
    font-size: 20px;
    margin:6px 0px;

`
const FilterCheckbox = styled.input.attrs({type:'checkbox'})`

`;

const FilterBox = ({expand, onMenuExpand, width, height, name, bgcolor, text}) => {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck3] = useState(false);
    const [check5, setCheck3] = useState(false);
    const [check6, setCheck3] = useState(false);
    const [check7, setCheck3] = useState(false);
    const [check8, setCheck3] = useState(false);
    const [check9, setCheck3] = useState(false);
    const [check10, setCheck3] = useState(false);
    
    
    useEffect(()=>{
        //this is Change
        setCheck1(check3);
        setCheck2(check3);
    }, [check3])

    return <FilterBtnBox width={width} height={height}>
        
        {/* <ExitButton /> */}
        <InputRow>
            <span>Filters</span>  
        </InputRow>
        <InputRow>
        </InputRow>
        <InputRow>
            <InputLabel for="size" >Size</InputLabel>
            <div>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck3(e.target.checked);
                    }} checked={check1} /> S
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck3(e.target.checked);
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
                        setCheck3(e.target.checked);
                    }} checked={check4} /> Beagle
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck3(e.target.checked);
                    }} checked={check5} /> Pomeranian
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck3(e.target.checked);
                    }} checked={check6} /> Husky
                </span>

                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck3(e.target.checked);
                    }} checked={check7} /> Shiba
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck3(e.target.checked);
                    }} checked={check8} /> Shih Tzu
                </span>
            </div>
        </InputRow>
        <InputRow>
            <InputLabel for="progress" >Progress</InputLabel>
            <div>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck3(e.target.checked);
                    }} checked={check9} /> Pending
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck3(e.target.checked);
                    }} checked={check10} /> In Progress
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck3(e.target.checked);
                    }} checked={check11} /> Completed
                </span>
            </div>
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