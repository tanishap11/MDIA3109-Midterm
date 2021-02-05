import React, { useState, useEffect }from 'react';
import styled from 'styled-components';

const Container = styled.button`
min-width: 90px;
min-height: 28px;
max-width: 90px;
max-height: 28px;
border: "";
display: flex;
justify-content: center;
align-items: center;
${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}
border-radius: 5px;
${props=>props.color && "color:"+props.color+";"}
cursor: pointer;
`;



const StatusButton = ({name, color, bgcolor, text, onButtonSelect}) => {

    useEffect(()=>{
        //alert("changed bg color");
    }, [bgcolor]);

    useEffect(()=>{
        //alert("changed bg color");
    }, [color]);

    return <Container onClick={()=>{
        onButtonSelect(name);
    }}bgcolor={bgcolor} color={color}>
        <h4>{text}</h4>
    </Container>
};

StatusButton.defaultProps = {
    bgcolor: null,
    text: null,
    color: null,
    onButtonSelect:()=>{}
}

export default StatusButton;