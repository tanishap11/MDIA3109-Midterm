import React from 'react';
import styled from 'styled-components';
import Home from '../../image/home.png';

const Container = styled.div`
min-width: ${props=>props.width ? props.width : "50%"};
min-height: ${props=>props.height ? props.height : "120px"};
max-width: ${props=>props.width ? props.width : "100vw"};
max-height: ${props=>props.height ? props.height : "auto"};
display: flex;
justify-content:center;
align-items: center;
background-color: #60BE68;
// position: relative;
font-size: 1.8em;
`;

const HomeIcon = styled.div`
background-image: url(${Home});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
// position: absolute;
`;

const Banner = ({width, height, name, text}) => {
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