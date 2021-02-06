import React, { useState, useEffect } from 'react';
import Upload from 'comps/Upload';
import Avatar from 'comps/Avatar';
import Dot from 'comps/Dot';
import Pro_box from 'comps/Pro_box';
import Oliver from '../../image/oliver.jpeg';
import Spotty from '../../image/spotty.png';
import {Pending, Progress, Completed} from 'comps/Dot';
import EditBtn from 'comps/EditButton';
import Banner from 'comps/Banner';
import FliterCheck from 'comps/FliterCheck';
import FilterButton from 'comps/FilterButton';
import ActiveFilterImage from '../../image/filter-active.png';

import Input from 'comps/Input';
import PendingButton from 'comps/ProgressBut/Pending';
import ProgressButton from 'comps/ProgressBut/InProgress';
import CompletedButton from 'comps/ProgressBut/Completed';
import LandingPage from 'comps/ProgressBut/Test/Pen';
import YellowBut from 'comps/ProgressBut/Test/Prog';
import GreenBut from 'comps/ProgressBut/Test/Com';
import BlueBut from 'comps/ProgressBut/Test/Pend';
import Input_box from 'comps/inputBox';

import StatusButton from 'comps/StatusButton';

require('typeface-roboto');


const Main = () => {

  const [clickedButton, setClickedButton] = useState(null);

  const ButtonColorSelect = (name) =>{
    setClickedButton(name);
  }
  
  return <div className="main">
    <Banner />
    <FilterButton />
      <Upload />
      <Pro_box />
      <EditBtn />
      <FliterCheck />
      <Input /> <br/>
      <Input_box />
      <StatusButton 
        name = "pending" 
        text = "Pending"
        bgcolor = {clickedButton === "pending" ? "#0D71E7" : "white"}
        color = {clickedButton === "pending" ? "white" : "#0D71E7"}
        onButtonSelect={ButtonColorSelect}
      />
      <StatusButton 
        name = "completed" 
        text = "Completed"
        bgcolor = {clickedButton === "completed" ? "#60BE68" : "white"}
        color = {clickedButton === "completed" ? "white" : "#60BE68"}
        onButtonSelect={ButtonColorSelect}
      />
      <StatusButton 
        name = "inprogress" 
        text = "In-Progress"
        bgcolor = {clickedButton === "inprogress" ? "#FFC225" : "white"}
        color = {clickedButton === "inprogress" ? "white" : "#FFC225"}
        onButtonSelect={ButtonColorSelect}
      />

  </div>

}

export default Main;