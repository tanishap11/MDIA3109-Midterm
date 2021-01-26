import React from 'react';
import styled from 'styled-components';
import Dot from 'comps/Dot';
import Avatar from 'comps/Avatar';
import DropdownImage from '../../image/dropdown.png';

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

const Dropdown = styled.div`
min-width: ${props=>props.width ? props.width : "40px"};
min-height: ${props=>props.height ? props.height : "16px"};
max-width: ${props=>props.width ? props.width : "40px"};
max-height: ${props=>props.height ? props.height : "16px"};
background-image: url(${DropdownImage});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
position: absolute;
right: 35px;
`;

const Pro_box = ({width, height, name}) => {
    return <Container width={width} height={height}>
        <Dot />
        <Avatar />
        {name}
        <Dropdown />
    </Container>
};

Pro_box.defaultProps = {
    width: null,
    height: null,
    name: "Name",
}

export default Pro_box;