import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display:inline-flex;
    flex-direction:column;
    border: solid 1px red;
`;

const inputLabel = styled.div`
    font-size: 11px;

`
const inputBox = styled.input`
    min-width: ${props=>props.width ? props.width : "90px"};
    min-height: ${props=>props.height ? props.height: "28px"};
    max-width: ${props=>props.width ? props.width : "280px"};

`;


const Input_box = ({ width, height}) => {

    return <Container width={width} height={height}>

        <DropDownMenu onClick={()=> (
            setExpanded(!expanded)
        )}>
            <DropDownBox expanded={expanded}>
                <div><Dot expanded={expanded} /></div>
                <div><Avatar  expanded={expanded} /></div>
                <div><NameBox expanded={expanded}>{name}</NameBox></div>
                <div><DropdownIcon expanded={expanded} /></div>
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