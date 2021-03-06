import React from 'react';
import styled from 'styled-components';
import Home from '../../image/home.png';

const Container = styled.div`
min-width: ${props=>props.width ? props.width : "50%"};
min-height: ${props=>props.height ? props.height : "108px"};
max-width: ${props=>props.width ? props.width : "100vw"};
max-height: ${props=>props.height ? props.height : "auto"};
display: flex;
justify-content:space-between;
align-items: center;
background-color: ${props=>props.bgcolor ? props.bgcolor : "#60BE68"};
font-size: 1.8em;
padding:12px 20px 0px 20px;
`;

const HomeIcon = styled.div`
min-width: ${props=>props.width ? props.width : "40px"};
min-height: ${props=>props.height ? props.height : "38px"};
max-width: ${props=>props.width ? props.width : "40px"};
max-height: ${props=>props.height ? props.height : "38px"};
background-image: url(${Home});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;

const Banner = ({width, height, bgcolor, text}) => {
    return <Container width={width} height={height}>
        {text}
        <HomeIcon />
    </Container>
};

Banner.defaultProps = {
    width: null,
    height: null,
    name: "Name",
    text: "All Events"
}

export default Banner;