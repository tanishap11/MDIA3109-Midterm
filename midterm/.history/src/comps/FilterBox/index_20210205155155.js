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
    // justify-content:center;

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

const InputRadioForm = styled.input`
    min-width: ${props=>props.width ? props.width : "12px"};
    min-height: ${props=>props.height ? props.height: "24px"};
    overflow:hidden;
    border: 1px solid #D3D9D9;
    border-radius:5px;
`;

const ButtonRow = styled.div`
    display:flex;
    align-items:space-between;
    justify-contents:center;
`;

const FilterBox = ({expand, onMenuExpand, width, height, name, bgcolor, text}) => {

    return <FilterBtnBox width={width} height={height}>
        <span>Filters</span>
        {/* <ExitButton /> */}
        <InputRow>
            
        </InputRow>
        <InputRow>
            <div>
                
            </div>
            <div>
                
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