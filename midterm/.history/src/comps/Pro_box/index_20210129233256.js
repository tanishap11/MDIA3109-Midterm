import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Dot from 'comps/Dot';
// import Avatar from 'comps/Avatar';
import DropdownImage from '../../image/dropdown.png';
import Oliver from '../../image/oliver.jpeg';
import Spotty from '../../image/spotty.png';
import Edit from '../../image/edit.png';


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

const textBox = styled.div``;

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
    flex-direction: space-between;
    background-color: #FFFFFF;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
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
`;
export const Pending = "#0D71E7";
export const Progress = "#FFC225";
export const Completed = "#60BE68";

const Dot = styled.div`
    min-width: ${props=>props.width ? props.width : "12px"};
    min-height: ${props=>props.height ? props.height : "12px"};
    max-width: ${props=>props.width ? props.width : "12px"};
    max-height: ${props=>props.height ? props.height : "12px"};
    background-color: ${props=>props.bgcolor ? props.bgcolor : Completed};
    border-radius: 50%;
    display:${props=>props.expanded ? "hidden" : "inline-flex" };
`;

const Avatar = styled.div`
    min-width: ${props=>props.width ? props.width : "48px"};
    min-height: ${props=>props.height ? props.height : "48px"};
    max-width: ${props=>props.expanded ? "60px" : "48px"};
    max-height: ${props=>props.expanded ? "60px" : "48px"};
    width:${props=>props.expanded ? "72px" : "48px" };
    height:${props=>props.expanded ? "72px" : "48px" };
    background-image: url(${props=>props.img ? props.img : Oliver});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #D3D9D9;
    border-radius: 5px;
    margin-left:${props=>props.expanded ? "-58px" : "-48px"};
    margin-right:-36px;
`;

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
    justify-content: center;
    align-items:center;
    margin-top:4px;
    div{
        // padding:${props=>props.expanded ? "10px 15px" : "0px" };
        // margin:${props=>props.expanded ? "5px 0" : "0px" };
        cursor: pointer;
        &:hover {
            background-color:#DDD;
        }
    }
`;

const Pro_box = ({expand, onMenuExpand, width, height, name, bgcolor, text}) => {

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
            <DropDownBox expanded={expanded}>
                <div><Dot expanded={expanded} /></div>
                <div><Avatar  expanded={expanded} /></div>
                <div><NameBox expanded={expanded}>{name}</NameBox></div>
                <div><DropdownIcon expanded={expanded} /></div>
            </DropDownBox>
        </DropDownMenu>

        <Expand expanded={expanded}>
            <EditBox width={width} height={height} bgcolor={bgcolor}>
                <EditIcon />
                <textBox>{text}</textBox>
            </EditBox>
            
        </Expand>
    </Container>
};

Pro_box.defaultProps = {
    width: null,
    height: null,
    name: "Name",
    expand: false,
    text: "Edit Profile"
}

export default Pro_box;