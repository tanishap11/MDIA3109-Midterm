import React from 'react';
import styled from 'styled-components';
import Edit from '../../image/edit.png';


const Container = styled.div`
min-width: ${props=>props.width ? props.width : "295px"};
min-height: ${props=>props.height ? props.height : "36px"};
max-width: ${props=>props.width ? props.width : "295px"};
max-height: ${props=>props.height ? props.height : "auto"};
background-color: "#ffffff";
border-radius:5px;
border:black solid 1px;
display:flex;
justify-content:center;
align-items:center;
position:relative;
}

`;

const EditIcon = styled.div`
min-width: ${props=>props.width ? props.width : "18px"};
min-height: ${props=>props.height ? props.height : "18px"};
max-width: ${props=>props.width ? props.width : "18px"};
max-height: ${props=>props.height ? props.height : "18px"};
background-image: url(${Edit});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
// position:absolute;
`;

const textBox = styled.div`
// position:absolute;
`;

const EditBtn = ({width, height, bgcolor, img, text}) => {
    return <Container width={width} height={height} bgcolor={bgcolor}>
        <EditIcon />
        <textBox>{text}</textBox>
    </Container>
};

EditBtn.defaultProps = {
    width: null,
    height: null,
    bgcolor: "#ffffff",
    img: null,
    text: "Edit Profile"
}

export default EditBtn;