import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import Button from '@material-ui/core/Button'

// const Button = styled.button`
//     padding: 10px 15px;
//     border-radius:5px;
//     min-height:26px;
//     min-width:90px;
//     color: #60BE68;
//     border: 2px solid #60BE68;
//     background-color: #ffffff;
//     cursor:pointer;
// `;

// function CompletedButton() {
//     const [color, setColor]=useState('#DDD')
//     function customMe()
//     {
//         setColor('#ADD')
//     }
//     return (
//         <Button 
//         color={color}
//         variant="outlined"
//         onClick={()=>customMe()}
//         >Completed
//         </Button>
//     )
// }












const FormButton = styled.button`
padding: 10px 15px;
border-radius:5px;
min-height:26px;
min-width:105px;
max-width:105px;
color: #60BE68;
border: 2px solid #60BE68;
background-color: #ffffff;
cursor: pointer;
margin:1%;
`;

const CompletedButton = ({ name, width, height, bgcolor, colorChange, onContainerSelect }) => {
    
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);


    useEffect(()=>{
        setCheck1(check3);
        setCheck2(check3);
    }, [check3]);

    useEffect(()=>{
        // alert("change bg");
    }, [bgcolor]);


    return<FormButton onClick={()=>{
            colorChange(name);
        }} bgcolor={bgcolor}>
            Completed
    </FormButton>
        
}

CompletedButton.defaultProps = {
    width: null,
    height: null,
    bgcolor: null,
    colorChange: () => {},
}

export default CompletedButton;