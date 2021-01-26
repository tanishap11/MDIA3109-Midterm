import React from 'react';
import styled from 'styled-components';
import Check from '../../image/check.png';

const Container = styled.div`
min-width: ${props=>props.width ? props.width : "50%"};
min-height: ${props=>props.height ? props.height : "96px"};
max-width: ${props=>props.width ? props.width : "100vw"};
max-height: ${props=>props.height ? props.height : "auto"};
display: flex;
justify-content:space-between;
align-items: center;
color:${props=>props.bgcolor ? props.bgcolor : "#141414"};
background-color: ${props=>props.bgcolor ? props.bgcolor : "#141414"};
font-size: 0.95em;
padding:24px 20px 0px 20px;
position:relative;

`;

const RoundCont = styled.div`
display: flex;
justify-content:center;
align-items: center;
min-width: ${props=>props.width ? props.width : "24px"};
min-height: ${props=>props.height ? props.height : "24px"};
max-width: ${props=>props.width ? props.width : "24px"};
max-height: ${props=>props.height ? props.height : "24px"};
border: 2px solid #60BE68;
border-radius:100%;
position: absolute;
`;

// const RoundBox = styled.div`
// min-width: ${props=>props.width ? props.width : "21px"};
// min-height: ${props=>props.height ? props.height : "15px"};
// max-width: ${props=>props.width ? props.width : "21px"};
// max-height: ${props=>props.height ? props.height : "15px"};
// background-image: url(${Check});
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center;
// position: absolute;
// `;
const RoundBox = styled.input.attrs({type:'checkbox'})`
min-width: ${props=>props.width ? props.width : "21px"};
min-height: ${props=>props.height ? props.height : "15px"};
max-width: ${props=>props.width ? props.width : "21px"};
max-height: ${props=>props.height ? props.height : "15px"};
// background-image: url(${Check});
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center;
// position: absolute;
border: 0;
clip: rect(0 0 0 0);
clippath: inset(50%);
height: 1px;
margin: -1px;
overflow: hidden;
padding: 0;
position: absolute;
white-space: nowrap;
width: 1px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? 'salmon' : 'papayawhip')}
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`;
const FilterCheck = ({width, height,color, bgcolor, text}) => {
    return <Container color={color} bgcolor={bgcolor} width={width} height={height}>
        
        <RoundCont>
            <RoundBox />
        </RoundCont>

        {/* {text} */}
    </Container>
};

FilterCheck.defaultProps = {
    width: null,
    height: null,
    color:null,
    bgcolor: null,
    text: "S"
}

export default FilterCheck;