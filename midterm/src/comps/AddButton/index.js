import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterImage from '../../image/filter.png';
import AddBox from 'comps/AddBox';
import ActiveFilterImage from '../../image/filter-active.png';
import axios from 'axios';

const ButtonCnt = styled.div`
    display:inline-flex;
    flex-direction:column;
    // border: solid 1px red;
`;
const Filterbtn = styled.button`
    min-width: ${props=>props.width ? props.width : "112px"};
    min-height: ${props=>props.height ? props.height : "48px"};
    max-width: ${props=>props.width ? props.width : "112px"};
    max-height: ${props=>props.height ? props.height : "48px"};
    border: ${props=>props.expanded ? "2px solid #60BE68" : "0px solid white" };
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${props=>props.expanded ? "white" : "#60BE68"};
    border-radius: 5px;
    color: ${props=>props.expanded ? "#60BE68" : "white"};
    font-size: 17px;
    font-weight:500;
    cursor: pointer;
    margin:12px;
`;

const FilterImg = styled.div`
    display: ${props=>props.display ? props.display : "flex"};
    position: relative;
    left: -10px;
    width: 22px;
    height: 22px;
    background-image:url(${props=>props.expanded ? ActiveFilterImage : FilterImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`;

const Expand = styled.div`
    background: #FFFFFF;
    box-sizing: border-box;
    box-shadow: 5px 0px 18px rgba(0, 0, 0, 0.08);
    display:${props=>props.expanded ? "inline-flex" : "none" };
    height:${props=>props.expanded ? "auto" : "0px" };
    font-size:${props=>props.expanded ? "18px" : "0px" };
    opacity:${props=>props.expanded ? 1 : 0 };
    transition:opacity 0.5s;
    flex-direction:column;
    justify-content: left;
    align-items:left;
    margin-top:12x;
    background-color:#F4F6F6;
    
`;

const AddButton = ({width, height, img, display, expand}) => {
    
    const [expanded, setExpanded] = useState(false);
    

    const HandleFormComplete = (name, time, email, phone, breed, size, gender, med) => {
        console.log(name, time, email, phone, breed, size, gender, med);
    var resp = axios.post("http://localhost:8080/api/tasks", {name:name, time:time, email:email, phone:phone, breed:breed, size:size, gender:gender, med:med});
    console.log("create", resp)
    }

    useEffect(()=>{
        setExpanded(expand);
    },[expand])

    return <ButtonCnt width={width} height={height}>
            <Filterbtn onClick={()=> (
            setExpanded(!expanded)
        )} width={width} height={height} expanded={expanded}>
                <div>Add</div>
            </Filterbtn>
             

            <Expand expanded={expanded}>
                {/* <Container> */}
                    <AddBox onFormComplete={HandleFormComplete}/>
                {/* </Container> */}
            </Expand>
    </ButtonCnt>
};



AddButton.defaultProps = {
    width: null,
    height: null,
    border: null,
    bgcolor: null,
    color: null,
    img: null,
    name:"Add",
    display:null
}

export default AddButton;