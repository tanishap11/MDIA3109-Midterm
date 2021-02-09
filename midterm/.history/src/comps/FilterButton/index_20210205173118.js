import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterImage from '../../image/filter.png';
import FilterBox from 'comps/FilterBox';
import ActiveFilterImage from '../../image/filter-active.png';

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
    // border: ${props=>props.border ? props.border : "0px solid white"};
    border:2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${props=>props.bgcolor ? props.bgcolor : "#60BE68"};
    border-radius: 5px;
    color: ${props=>props.expanded ? "#60BE68" : "white"};
    font-size: 17px;
    font-weight:500;
    cursor: pointer;
    margin-bottom:12px;
`;

const FilterImg = styled.img`
    display: ${props=>props.display ? props.display : "block"};
    position: relative;
    left: -10px;
    width: 22px;
    height: 22px;
    background-image:url(${props=>props.expanded ? ActiveFilterImage : FilterImage});

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
    margin-top:12x;
    background-color:#F4F6F6;
`;

const FilterButton = ({width, height, border, bgcolor, color, img, display, expand}) => {
    
    const [expanded, setExpanded] = useState(false);

    useEffect(()=>{
        setExpanded(expand);
    },[expand])

    return <ButtonCnt width={width} height={height}>
            <Filterbtn onClick={()=> (
            setExpanded(!expanded)
        )} width={width} height={height} border={border} bgcolor={expanded} color={color}>
                <FilterImg expanded={expanded} img={expanded} display={display}/>
                <div>Filter</div>
            </Filterbtn>
             

            <Expand expanded={expanded}>
                {/* <Container> */}
                    <FilterBox />
                {/* </Container> */}
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