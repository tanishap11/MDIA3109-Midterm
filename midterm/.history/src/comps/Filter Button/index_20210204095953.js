import React from 'react';
import styled from 'styled-components';
import FilterImage from '../../image/filter.png';

const Container = styled.div`
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

const FilterButton = ({width, height, border, bgcolor, color, img, name, display}) => {
    return <Container width={width} height={height} border={border} bgcolor={bgcolor} color={color}>
        <FilterImg src={img} display={display}/>
        <div>{name}</div>
    </Container>
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