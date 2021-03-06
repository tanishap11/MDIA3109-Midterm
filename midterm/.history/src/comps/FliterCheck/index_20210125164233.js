import React from 'react';
import styled from 'styled-components';
import Check from '../../image/check.png';

const Container = styled.div`
min-width: ${props=>props.width ? props.width : "50%"};
min-height: ${props=>props.height ? props.height : "96px"};
max-width: ${props=>props.width ? props.width : "100vw"};
max-height: ${props=>props.height ? props.height : "auto"};
display: flex;
justify-content:space-between;
align-items: center;
color:${props=>props.bgcolor ? props.bgcolor : "#141414"};
background-color: ${props=>props.bgcolor ? props.bgcolor : "#60BE68"};
font-size: 0.95em;
padding:24px 20px 0px 20px;
`;

const RoundCont = styled.div`
min-width: ${props=>props.width ? props.width : "24px"};
min-height: ${props=>props.height ? props.height : "24px"};
max-width: ${props=>props.width ? props.width : "24px"};
max-height: ${props=>props.height ? props.height : "24px"};
`;
const RoundBox = styled.div`
min-width: ${props=>props.width ? props.width : "21px"};
min-height: ${props=>props.height ? props.height : "15px"};
max-width: ${props=>props.width ? props.width : "21px"};
max-height: ${props=>props.height ? props.height : "15px"};
background-image: url(${Check});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;

const FilterCheck = ({width, height,color, bgcolor, text}) => {
    return <Container color={color} bgcolor={bgcolor} width={width} height={height}>
        
        <RoundCont>
            <RoundBox />
        </RoundCont>
        {text}
    </Container>
};

FilterCheck.defaultProps = {
    width: null,
    height: null,
    color:null,
    bgcolor: null,
    text: "All Events"
}

export default FilterCheck;