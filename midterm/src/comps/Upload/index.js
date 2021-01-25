import React from 'react';
import styled from 'styled-components';
import UploadImage from '../../image/upload.png';

const Container = styled.div`
min-width: ${props=>props.width ? props.width : "48px"};
min-height: ${props=>props.height ? props.height : "48px"};
max-width: ${props=>props.width ? props.width : "48px"};
max-height: ${props=>props.height ? props.height : "48px"};
// display: flex;
// flex-direction: column;
// justify-cotent: center;
align-items: center;
background-image: url(${props=>props.img ? props.img : UploadImage});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
background-color: #D3D9D9;
border-radius: 5px;
margin: 12px;
`;

const Upload = ({width, height, img}) => {
    return <Container width={width} height={height} img={img}>
        
    </Container>
};

Upload.defaultProps = {
    width: null,
    height: null,
    img: null,
}

export default Upload;