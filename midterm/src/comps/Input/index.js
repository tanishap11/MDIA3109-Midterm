import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
text-align:left;
flex-direction:column;
max-width:
`;

const InputBox = styled.input`
min-height:25px;
border-radius: 10px;
border: 2px solid #D3D9D9;
padding:5px;
`;



const Input = ({ title, name, width, height, bgcolor, onInputComplete, onContainerSelect }) => {
    
    const [username, setUsername] = useState("");




    return <Container OnClick={()=>{
        onContainerSelect(name);
    }} >
        <div className="title">{title}</div>
            <InputBox type='text' placeholder='name' onChange={(e)=>{
                setUsername(e.target.value);
            }}>{}</InputBox>
      
    </Container>
}

Input.defaultProps = {
    width: null,
    height: null,
    bgcolor: null,
    onInputComplete: () => {},
    onContainerSelect: () => {},
    title:'Label',
}

export default Input;








// const Container = styled.div`
// min-width:${props=>props.width ? props.width : "300px"};
// min-height:${props=>props.height ? props.height : "100px"};
// max-width:${props=>props.width ? props.width : "50%}"};
// max-height:${props=>props.height ? props.height : "300px"};
// padding:10px;
// display: flex;
// flex-direction:column;
// ${props => props.bgcolor && "background-color:"+props.bgcolor+";"}
// & > span {
//     margin:5px;
// }

// `;

// const InputBox = styled.input`
// min-height:25px;
// padding:5px;
// `;

// const Input = ({name}) =>{
//     return <Container>
//         <InputBox>
//             <div>{name}</div>
//         </InputBox>
    
//     </Container>
// }

// Input.defaultProps = {
//     name:'Comments',
// }

// export default Input;


