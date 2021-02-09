import React from 'react';
import styled from 'styled-components';
import Oliver from '../../image/oliver.jpeg';
import Spotty from '../../image/spotty.png';

const Container = styled.div`
min-width: ${props=>props.width ? props.width : "48px"};
min-height: ${props=>props.height ? props.height : "48px"};
max-width: ${props=>props.width ? props.width : "48px"};
max-height: ${props=>props.height ? props.height : "48px"};
// display: flex;
// flex-direction: column;
// justify-cotent: center;
align-items: center;
background-image: url(${props=>props.img ? props.img : Oliver});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-color: #D3D9D9;
border-radius: 5px;
margin: 12px;
`;

const Avatar = ({width, height, img}) => {
    return <Container width={width} height={height} img={img}>
        
    </Container>
};

Avatar.defaultProps = {
    width: null,
    height: null,
    img: null,
}

export default Avatar;