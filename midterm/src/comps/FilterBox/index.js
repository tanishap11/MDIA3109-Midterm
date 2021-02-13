import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterCheck from 'comps/FliterCheck';
import axios from 'axios';
// import ExitButton from '../../image/exit.png';

const FilterBtnBox = styled.div`
    width: 333px;
    height:auto;
    display:flex;
    flex-direction:column;
    background-color:${props=>props.bgcolor ? props.bgcolor : "white"};
    border-radius: 10px;
    color: ${props=>props.color ? props.color : "#141414"};
    font-size: 17px;
    cursor: pointer;
    padding: 12px;
    .button{
        margin:12px;
        right:0 !important;
        bottom:12%;
    }
`;

const InputRow = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    &:div{
        display:inline-flex;
        flex-direction:row !important;
        align-items:flex-start;
    }
    &>span {
        font-size:22px;
    }
    .checks{
        margin-right:6px;
    }
    margin-bottom:12px;
`;

const InputLabel = styled.label`
    font-size: 20px;
    margin:6px 0px;
    margin-bottom:12px;

`
const FilterCheckbox = styled.input.attrs({type:'checkbox'})``;

const ApplyButton = styled.button`
    width: ${props=>props.width ? props.width : "112px"};
    height: ${props=>props.height ? props.height : "48px"};
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#D3D9D9"};
    color:white;
    border-radius:5px;
    font-size:17px;
    :hover{
        background-color: ${props=>props.bgcolor ? "#D3D9D9" : "#60BE68"};
    }
`;
const FilterBox = ({onMenuExpand, width, height, name, bgcolor, text, clickedButton}) => {
    
    const [msgs, setMsgs] = useState([]);
    const [allmsgs, setAll] = useState([]);
    const items_per_page = 15;

    const GetMessages = async () => {
        var resp = await axios.get("http://localhost:8080/api/tasks");
        console.log("get message", resp.data.tasks);
    }
    
    useEffect(() => {
        GetMessages()
    }, []);

    // const setCheck1 = (checked) =>{
    //     if(checked){
    //         setMsgs(
    //             allmsgs.filter((o)=>{
    //                 return o.size =  "S";
    //             })
    //         )
    //     }else {
    //         setMsgs(
    //             allmsgs
    //         )
    //     }
    // }

    // const setCheck2 = (checked) =>{
    //     if(checked){
    //         setMsgs(
    //             allmsgs.filter((o)=>{
    //                 return o.size =  "M";
    //             })
    //         )
    //     }else {
    //         setMsgs(
    //             allmsgs
    //         )
    //     }
    // }

    
    // const setCheck3 = (checked) =>{
    //     if(checked){
    //         setMsgs(
    //             allmsgs.filter((o)=>{
    //                 return o.size =  "L";
    //             })
    //         )
    //     }else {
    //         setMsgs(
    //             allmsgs
    //         )
    //     }
    // }


    // const setCheck4 = (checked) =>{
    //     if(checked){
    //         setMsgs(
    //             allmsgs.filter((o)=>{
    //                 return o.breed =  "Beagle";
    //             })
    //         )
    //     }else {
    //         setMsgs(
    //             allmsgs
    //         )
    //     }
    // }

    
    // const setCheck5 = (checked) =>{
    //     if(checked){
    //         setMsgs(
    //             allmsgs.filter((o)=>{
    //                 return o.breed =  "Pomeranian";
    //             })
    //         )
    //     }else {
    //         setMsgs(
    //             allmsgs
    //         )
    //     }
    // }

    
    // const setCheck6 = (checked) =>{
    //     if(checked){
    //         setMsgs(
    //             allmsgs.filter((o)=>{
    //                 return o.breed =  "Husky";
    //             })
    //         )
    //     }else {
    //         setMsgs(
    //             allmsgs
    //         )
    //     }
    // }
    
    // const setCheck7 = (checked) =>{
    //     if(checked){
    //         setMsgs(
    //             allmsgs.filter((o)=>{
    //                 return o.breed =  "Sihba";
    //             })
    //         )
    //     }else {
    //         setMsgs(
    //             allmsgs
    //         )
    //     }
    // }

    
    // const setCheck8 = (checked) =>{
    //     if(checked){
    //         setMsgs(
    //             allmsgs.filter((o)=>{
    //                 return o.breed =  "Other";
    //             })
    //         )
    //     }else {
    //         setMsgs(
    //             allmsgs
    //         )
    //     }
    // }

    // const setCheck9 = (checked) =>{
    //     if(checked){
    //         setMsgs(
    //             allmsgs.filter((o)=>{
    //                 return o.progress =  "Pending";
    //             })
    //         )
    //     }else {
    //         setMsgs(
    //             allmsgs
    //         )
    //     }
    // }

    // const setCheck10 = (checked) =>{
    //     if(checked){
    //         setMsgs(
    //             allmsgs.filter((o)=>{
    //                 return o.progress =  "In Progress";
    //             })
    //         )
    //     }else {
    //         setMsgs(
    //             allmsgs
    //         )
    //     }
    // }

    // const setCheck11 = (checked) =>{
    //     if(checked){
    //         setMsgs(
    //             allmsgs.filter((o)=>{
    //                 return o.progress =  "Completed";
    //             })
    //         )
    //     }else {
    //         setMsgs(
    //             allmsgs
    //         )
    //     }
    // }


    // const [clickedButton, setClicked] = useState(null);

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [check7, setCheck7] = useState(false);
    const [check8, setCheck8] = useState(false);
    const [check9, setCheck9] = useState(false);
    const [check10, setCheck10] = useState(false);
    const [check11, setCheck11] = useState(false);
    
    
    // useEffect(()=>{
    //     //this is Change
    //     setCheck1(check3);
    //     setCheck2(check3);
    //     setCheck3(check3);
    //     setCheck4(check9);
    //     setCheck5(check11);
    //     setCheck6(check11);
    //     setCheck7(check11);
    //     setCheck8(check11);
    //     setCheck9(check11);
    //     setCheck10(check11);
    //     setCheck11(check11);
    // }, [check11])

    return <FilterBtnBox width={width} height={height}>
        {msgs.map(o => <div>{o.size} + {o.breed} + {o.progress}</div>)}
        {/* <ExitButton /> */}
        <InputRow>
            <span>Filters</span>  
        </InputRow>
        <InputRow>
        </InputRow>
        <InputRow>
            <InputLabel for="size" >Size</InputLabel>
            <div>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck1(e.target.checked);
                    }} /> S
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck2(e.target.checked);
                    }} /> M
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck3(e.target.checked);
                    }} /> L
                </span>
            </div>
        </InputRow>
        <InputRow>
            <InputLabel for="Breed" >Breed</InputLabel>
            <div>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck4(e.target.checked);
                    }} /> Beagle
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck5(e.target.checked);
                    }} /> Pomeranian
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck6(e.target.checked);
                    }} /> Husky
                </span>
                </div>
        </InputRow>

        <InputRow>
            <div>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck7(e.target.checked);
                    }} /> Shiba
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck8(e.target.checked);
                    }} /> Other
                </span>
            </div>
        </InputRow>

        <InputRow>
            <InputLabel for="progress" >Progress</InputLabel>
            <div>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck9(e.target.checked);
                    }} /> Pending
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck10(e.target.checked);
                    }} /> In Progress
                </span>
                <span className="checks">
                    <FilterCheckbox onChange={(e)=>{
                        setCheck11(e.target.checked);
                    }} /> Completed
                </span>
            </div>
        </InputRow>
        <div className="button">
        {/* <ApplyButton onClick={()=>{
                clickedButton();
            }} width={width} height={height} bgcolor={bgcolor}>Apply</ApplyButton> */}
            <ApplyButton onClick={()=>{
                clickedButton(check1, check2, check3, check4, check5, check6, check7, check8, check9, check10, check11);
            }} width={width} height={height} bgcolor={bgcolor}>Apply</ApplyButton>
        </div>
    </FilterBtnBox>
};

FilterBox.defaultProps = {
    width: null,
    height: null,
    text:"label",
    bgcolor:null,
    bdcolor:null,
    ftcolor:"#FFC225",
    clickedButton: ()=>{}
}

export default FilterBox;