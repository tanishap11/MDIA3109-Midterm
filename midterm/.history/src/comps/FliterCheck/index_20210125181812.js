import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Check from '../../image/check.png';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    position:relative;
`;
const Clickable = styled.div`
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 20px;
    display: inline-flex;
    cursor: pointer;
    background-color:#FFF;
    transition:background-color 0.5s;
    &:hover {
        background-color:#DDD;
    }
`;
const RoundCont = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-width: ${props=>props.width ? props.width : "24px"};
    min-height: ${props=>props.height ? props.height : "24px"};
    max-width: ${props=>props.width ? props.width : "24px"};
    max-height: ${props=>props.height ? props.height : "24px"};
    border: 2px solid #60BE68;
    border-radius:100%;
    position: absolute;
    background: ${props=>props.clicked ? "#60BE68" : "none"};
`;

const ClickedBox = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-width: ${props=>props.width ? props.width : "24px"};
    min-height: ${props=>props.height ? props.height : "24px"};
    max-width: ${props=>props.width ? props.width : "24px"};
    max-height: ${props=>props.height ? props.height : "24px"};
    display:${props=>props.clicked ? "flex" : "hidden"};
    height:${props=>props.clicked ? "auto" : "0"};
    opacity:${props=>props.clicked ? 1 : 0};
    background-color:${props=>props.clicked ? "#60BE68" : "none"};
    background-image: url(${Check});
    background-size: fit;
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid #60BE68;
    border-radius:100%;
    position: absolute;
    z-index:1;
`;

const FilterName = styled.div`
    margin-left:20px;
    font-size: 15px;
`;


const FilterCheck = ({click, onBoxSelect, width, height,color, bgcolor, text}) => {
    const [clicked, setClicked] = useState(false);
    useEffect(()=>{
        setClicked(click);
    },[click])

    return <Container color={color} bgcolor={bgcolor} width={width} height={height}>
        <Clickable onClick={()=>{
                setClicked(!clicked);
            }}>
            <RoundCont onClick={()=>{
                setClicked(!clicked);
            }}></RoundCont>
            <FilterName> {text} </FilterName>
        </Clickable>

        <ClickedBox clicked={clicked}>

        </ClickedBox>
    </Container>
};

FilterCheck.defaultProps = {
    width: null,
    height: null,
    color:null,
    bgcolor: null,
    text: null,
    click:false,
}

export default FilterCheck;