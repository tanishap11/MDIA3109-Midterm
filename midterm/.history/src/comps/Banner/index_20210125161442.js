import React from 'react';
import styled from 'styled-components';
import Home from '../../image/home.png';

const Container = styled.div`
min-width: ${props=>props.width ? props.width : "327px"};
min-height: ${props=>props.height ? props.height : "72px"};
max-width: ${props=>props.width ? props.width : "327px"};
max-height: ${props=>props.height ? props.height : "72px"};
border-radius: 8px;
display: flex;
flex-direction: row;
align-items: center;
background-color: #FFFFFF;
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
position: relative;
`;


const Banner = ({width, height, name}) => {
    return <Container width={width} height={height}>

    </Container>
};

Banner.defaultProps = {
    width: null,
    height: null,
    name: "Name",
}

export default Banner;