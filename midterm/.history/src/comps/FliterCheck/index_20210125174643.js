import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Check from '../../image/check.png';

const Container = styled.div`
    // min-width: ${props=>props.width ? props.width : "46px"};
    // min-height: ${props=>props.height ? props.height : "24px"};
    // max-width: ${props=>props.width ? props.width : "25%"};
    // max-height: ${props=>props.height ? props.height : "auto"};
    // display: inline-flex;
    // justify-content:space-around;
    // align-items: center;
    // color:${props=>props.bgcolor ? props.bgcolor : "#141414"};
    // background-color: ${props=>props.bgcolor ? props.bgcolor : "#141414"};
    font-size: 0.95em;
    padding:24px 20px 0px 20px;
    position:relative;

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

const RoundBox = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-width: ${props=>props.width ? props.width : "24px"};
    min-height: ${props=>props.height ? props.height : "24px"};
    max-width: ${props=>props.width ? props.width : "24px"};
    max-height: ${props=>props.height ? props.height : "24px"};
    display:${props=>props.clicked ? "inline-flex" : "hidden"};
    height:${props=>props.clicked ? "auto" : "0"};
    opacity:${props=>props.clicked ? 1 : 0};
    background-color:#60BE68;
    border: 2px solid #60BE68;
    border-radius:100%;
    position: absolute;
`;

const CheckIcon = styled.div`
    min-width: ${props=>props.width ? props.width : "21px"};
    min-height: ${props=>props.height ? props.height : "15px"};
    max-width: ${props=>props.width ? props.width : "21px"};
    max-height: ${props=>props.height ? props.height : "15px"};
    display:${props=>props.clicked ? "inline-flex" : "hidden"};
    height:${props=>props.clicked ? "auto" : "0"};
    opacity:${props=>props.clicked ? 1 : 0};
    background-image: url(${Check});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    z-index:2;
`;


const FilterCheck = ({click, onBoxSelect, width, height,color, bgcolor, text}) => {
    const [clicked, setClicked] = useState(false);
    useEffect(()=>{
        setClicked(click);
    },[click])

    return <Container color={color} bgcolor={bgcolor} width={width} height={height}>
        <RoundCont onClick={()=>{
            setClicked(!clicked);
        }}>
            <RoundBox />
        </RoundCont>
        {text}

        <RoundBox clicked={clicked}>
            <CheckIcon />
        </RoundBox>

    </Container>
};

FilterCheck.defaultProps = {
    width: null,
    height: null,
    color:null,
    bgcolor: null,
    text: "S",
    click:false,
}

export default FilterCheck;