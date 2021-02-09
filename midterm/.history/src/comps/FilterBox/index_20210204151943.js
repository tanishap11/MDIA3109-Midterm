import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Dot from 'comps/Dot';
// import Avatar from 'comps/Avatar';
import DropdownImage from '../../image/dropdown.png';
import Oliver from '../../image/oliver.jpeg';
import Spotty from '../../image/spotty.png';
import Edit from '../../image/edit.png';
import Input_Box from 'comps/inputBox';

const FilterBtnBox = styled.div`
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

const FilterBox = ({expand, onMenuExpand, width, height, name, bgcolor, text}) => {

    const [expanded, setExpanded] = useState(false);

    useEffect(()=>{
        setExpanded(expand);
    },[expand])

    return <Container onClick={()=> (
            setExpanded(!expanded)
        )} width={width} height={height}>
            <FilterBtnBox>
                <FilterImg />
            </FilterBtnBox>
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
            
        </Expand>
    </Container>
};

FilterBox.defaultProps = {
    width: null,
    height: null,
    name: "Name",
    expand: false,
    text: "Edit Profile"
}

export default FilterBox;




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
export const Pending = "#0D71E7";
export const Progress = "#FFC225";
export const Completed = "#60BE68";

const ButtonRow = styled.div`
    // width:280px;
    display:flex;
    // flex-direction:space-between;
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


const Input_box = ({ width, height,text, bgcolor, bdcolor, ftcolor, onBtnSelect}) => {

    return <Container width={width} height={height}>
        <InputRow>
            <div>
                <InputLabel for="owner" >Name of Owner</InputLabel>
                <InputForm width="170px" height={height}  type='text' placeholder='name' />
            </div>
            <div>
                <InputLabel for="time" >Time</InputLabel>
                <InputForm width="90px" height={height}  type='text' placeholder='time' />
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="email" >Email</InputLabel>
                <InputForm width="170px" height={height}  type='text' placeholder='email' />
            </div>
            <div>
                <InputLabel for="phone" >Phone Number</InputLabel>
                <InputForm width="90px" height={height}  type='text' placeholder='phone number' />
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="breed" >Breed</InputLabel>
                <InputForm width="170px" height={height}  type='text' placeholder='breed' />
            </div>
            <InputRadio>
                <div>
                    <InputLabel for="size" >S</InputLabel>
                    <InputForm width="90px" height={height}  type='radio' value='small' />
                </div>
                <div>    
                    <InputLabel for="size" >M</InputLabel>
                    <InputForm width="90px" height={height}  type='radio' value='medium' />
                </div>
                <div>
                    <InputLabel for="size" >L</InputLabel>
                    <InputForm width="90px" height={height}  type='radio' value='large' />
                </div>
            </InputRadio>
        </InputRow>

        <InputRow>
            <div>
                <InputLabel for="gender" >Gender</InputLabel>
                <InputForm width="170px" height={height}  type='text' placeholder='gender' />
            </div>
            <div>
                <InputLabel for="medication" >Medication</InputLabel>
                <InputForm width="90px" height={height}  type='text' placeholder='Y/N' />
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="preference" >Accompany Preference</InputLabel>
                <InputForm width="170px" height={height}  type='text' placeholder='group/alone' />
            </div>
            <div>
                <InputLabel for="allergy" >Allergy</InputLabel>
                <InputForm width="90px" height={height}  type='text' placeholder='Y/N' />
            </div>
        </InputRow>
        <InputRow>
            <div>
                <InputLabel for="comments" >Comments</InputLabel>
                <InputForm width="280px" height="auto"  type='text' placeholder='memo' />
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
};

Input_box.defaultProps = {
    width: null,
    height: null,
    text:"label",
    bgcolor:null,
    bdcolor:null,
    ftcolor:"#FFC225"
}

export default Input_box;