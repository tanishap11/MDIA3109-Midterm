import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterImage from '../../image/filter.png';

const ButtonCnt = styled.div`
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

const textBox = styled.div``;

const Container = styled.div`
    display:inline-flex;
    flex-direction:column;
    border: solid 1px red;
    background-color:#F4F6F6;
`;

const DropDownMenu  = styled.div`
    min-width: ${props=>props.width ? props.width : "327px"};
    min-height: ${props=>props.height ? props.height : "72px"};
    max-width: ${props=>props.width ? props.width : "327px"};
    max-height: ${props=>props.height ? props.height : "72px"};
    border-radius: 8px;
    display: flex;
    flex-direction: space-between;
    background-color: #FFFFFF;
    // box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
`;

const DropdownIcon = styled.div`
    min-width: ${props=>props.width ? props.width : "40px"};
    min-height: ${props=>props.height ? props.height : "16px"};
    max-width: ${props=>props.width ? props.width : "40px"};
    max-height: ${props=>props.height ? props.height : "16px"};
    background-image: url(${DropdownImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: transform 0.5s;
    transform: ${props=>props.expanded ? "rotate(180deg)" : "none"};
`;

const DropDownBox = styled.div`
    width:100%;
    padding:10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    div {
        // margin:0 10px;
    }
    background-color:#F4F6F6;
`;
export const Pending = "#0D71E7";
export const Progress = "#FFC225";
export const Completed = "#60BE68";


const NameBox = styled.div`
    font-size:18px;
    margin-left:${props=>props.expanded ? "-58px" : "-48px"};
    margin-right:64px;
`;

const Expand = styled.div`
    background: #FFFFFF;
    box-sizing: border-box;
    box-shadow: 5px 0px 18px rgba(0, 0, 0, 0.08);
    display:${props=>props.expanded ? "inline-flex" : "hidden" };
    height:${props=>props.expanded ? "auto" : "0px" };
    font-size:${props=>props.expanded ? "18px" : "0px" };
    opacity:${props=>props.expanded ? 1 : 0 };
    transition:opacity 0.5s;
    flex-direction:column;
    // justify-content: center;
    align-items:center;
    margin-top:10px;
    div{
        // padding:${props=>props.expanded ? "10px 15px" : "0px" };
        // margin:${props=>props.expanded ? "5px 0" : "0px" };
        cursor: pointer;
        &:hover {
            background-color:#DDD;
        }
    }
    background-color:#F4F6F6;
`;
const EditBox = styled.div`
min-width: ${props=>props.width ? props.width : "295px"};
min-height: ${props=>props.height ? props.height : "36px"};
max-width: ${props=>props.width ? props.width : "295px"};
max-height: ${props=>props.height ? props.height : "36px"};
background-color: "#ffffff";
border-radius:5px;
border:black solid 1px;
display:flex;
justify-content:center;
align-items:center;
font-size:13px;

`;

const EditIcon = styled.div`
min-width: ${props=>props.width ? props.width : "18px"};
min-height: ${props=>props.height ? props.height : "18px"};
max-width: ${props=>props.width ? props.width : "18px"};
max-height: ${props=>props.height ? props.height : "18px"};
background-image: url(${Edit});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
margin-right:8px;
`;


const FilterButton = ({width, height, border, bgcolor, color, img, display, expand}) => {
    
    const [expanded, setExpanded] = useState(false);

    useEffect(()=>{
        setExpanded(expand);
    },[expand])

    return <ButtonCnt onClick={()=> (
            setExpanded(!expanded)
        )} width={width} height={height} border={border} bgcolor={bgcolor} color={color}>
             <FilterImg src={img} display={display}/>

            {/* <FilterBtnBox>
                <FilterImg />
            </FilterBtnBox> */}
        <DropDownMenu onClick={()=> (
            setExpanded(!expanded)
        )}>
            <DropDownBox expanded={expanded}>
            
            </DropDownBox>
        </DropDownMenu>

        <Expand expanded={expanded}>
            <Container />
        </Expand>
    </ButtonCnt>
};



FilterButton.defaultProps = {
    width: null,
    height: null,
    border: null,
    bgcolor: null,
    color: null,
    img: FilterImage,
    name:"Filters",
    display:null
}

export default FilterButton;