import React from 'react';
import styled from 'styled-components';
import Edit from '../../image/edit.png';

const pending = "#0D71E7";
const progress = "#FFC225";
const completed = "#60BE68";

const Container = styled.div`
min-width: ${props=>props.width ? props.width : "295px"};
min-height: ${props=>props.height ? props.height : "36px"};
max-width: ${props=>props.width ? props.width : "12px"};
max-height: ${props=>props.height ? props.height : "12px"};
background-color: ${props=>props.bgcolor ? props.bgcolor : pending};
border-radius: 50%;
margin: 12px;
`;

const EditBtn = ({width, height, bgcolor}) => {
    return <Container width={width} height={height} bgcolor={bgcolor}>
        
    </Container>
};

EditBtn.defaultProps = {
    width: null,
    height: null,
    bgcolor: pending,
}

export default EditBtn;