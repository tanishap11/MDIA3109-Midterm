import React from 'react';
import styled from 'styled-components';
import Edit from '../../image/edit.png';


const Container = styled.div`
min-width: ${props=>props.width ? props.width : "295px"};
min-height: ${props=>props.height ? props.height : "36px"};
max-width: ${props=>props.width ? props.width : "295px"};
max-height: ${props=>props.height ? props.height : "auto"};
background-color: ${props=>props.bgcolor ? props.bgcolor : "ffffff"};

margin: 12px;
`;

const Img = styled.div`
max-width: ${props=>props.width ? props.width : "18px"};
min-height: ${props=>props.height ? props.height : "18px"};
background-image: url(${props=>props.img ? props.img : Edit});
`;

const EditBtn = ({width, height, bgcolor, img}) => {
    return <Container width={width} height={height} bgcolor={bgcolor}>
        <Img img={img}/>
    </Container>
};

EditBtn.defaultProps = {
    width: null,
    height: null,
    bgcolor: "#ffffff",
    img: null
}

export default EditBtn;