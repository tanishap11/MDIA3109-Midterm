import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Check from '../../image/check.png';

const Container = styled.div`
    // min-width: ${props=>props.width ? props.width : "46px"};
    // min-height: ${props=>props.height ? props.height : "24px"};
    // max-width: ${props=>props.width ? props.width : "25%"};
    // max-height: ${props=>props.height ? props.height : "auto"};
    // color:${props=>props.bgcolor ? props.bgcolor : "#141414"};
    // background-color: ${props=>props.bgcolor ? props.bgcolor : "#141414"};
    // font-size: 0.95em;
    // padding:24px 20px 0px 20px;
    // position:relative;
    // border: 1px solid #BDBDBD;

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
    background-color:#60BE68;
    background-image: url(${Check});
    background-size: fit;
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid #60BE68;
    border-radius:100%;
    position: absolute;
`;

const FilterName = styled.div`
    font-size: 15px;
`;


const FilterCheck = ({click, onBoxSelect, width, height,color, bgcolor, text}) => {
    const [clicked, setClicked] = useState(false);
    useEffect(()=>{
        setClicked(click);
    },[click])

    return <Container color={color} bgcolor={bgcolor} width={width} height={height}>
        <RoundCont onClick={()=>{
            setClicked(!clicked);
        }} />
        <FilterName> {text} </FilterName>

        <ClickedBox clicked={clicked} />
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