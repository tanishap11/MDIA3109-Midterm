import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Dot from 'comps/Dot';
import Avatar from 'comps/Avatar';
import DropdownImage from '../../image/dropdown.png';

const Container = styled.div`
    display:inline-flex;
    flex-direction:column;
    border: solid 1px red;
`;

const DropDownMenu  = styled.div`
    min-width: ${props=>props.width ? props.width : "327px"};
    min-height: ${props=>props.height ? props.height : "72px"};
    max-width: ${props=>props.width ? props.width : "327px"};
    max-height: ${props=>props.height ? props.height : "72px"};
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
`;

const Dropdown = styled.div`
    min-width: ${props=>props.width ? props.width : "40px"};
    min-height: ${props=>props.height ? props.height : "16px"};
    max-width: ${props=>props.width ? props.width : "40px"};
    max-height: ${props=>props.height ? props.height : "16px"};
    background-image: url(${DropdownImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    // position: absolute;
    right: 35px;
    transition: transform 0.5s;
    transform: ${props=>props.expanded ? "rotate(180deg)" : "none"};
`;

const DropDownBox = styled.div`
    width:100%;
    padding:10px;
    display:flex;
    justify-content: center;
    align-items: center;
    div {
        margin:0 10px;xw
    }
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
    margin-top:10px;
    div{
        padding:${props=>props.expanded ? "10px 15px" : "0px" };
        margin:${props=>props.expanded ? "5px 0" : "0px" };
        cursor: pointer;
        &:hover {
            background-color:#DDD;
        }
    }
`;

const Pro_box = ({expand, onMenuExpand, width, height, name}) => {

    const [expanded, setExpanded] = useState(false);

    useEffect(()=>{
        setExpanded(expand);
    },[expand])

    return <Container onClick={()=> (
            setExpanded(!expanded)
        )} width={width} height={height}>

        <DropDownMenu onClick={()=> (
            setExpanded(!expanded)
        )}>
            <DropDownBox>
                <div><Dot /></div>
                <div><Avatar /></div>
                <div>{name}</div>
                <div><Dropdown expanded={expanded} /></div>
            </DropDownBox>
        </DropDownMenu>

        <Expand expanded={expanded}>
            <div onClick={()=>{
                // onMenuSelect("bg");
            }}>Change BG Color</div>
            <div onClick={()=>{
                // onMenuSelect("img");
            }}>Change BG Image</div>
            <div onClick={()=>{
                // onMenuSelect("help");
            }}>Help</div>
        </Expand>
    </Container>
};

Pro_box.defaultProps = {
    width: null,
    height: null,
    name: "Name",
    expand: false
}

export default Pro_box;