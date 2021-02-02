import React, { useState, useEffect } from 'react';
import Upload from 'comps/Upload';
import Avatar from 'comps/Avatar';
import Dot from 'comps/Dot';
import Pro_box from 'comps/Pro_box';
import EditBtn from 'comps/EditButton';
import Banner from 'comps/Banner';
import FliterCheck from 'comps/FliterCheck';
import FilterButton from 'comps/Filter Button';
import ActiveFilterImage from '../../image/filter-active.png';
import Input from 'comps/Input';
import PendingButton from 'comps/ProgressBut/Pending';
import ProgressButton from 'comps/ProgressBut/InProgress';
import CompletedButton from 'comps/ProgressBut/Completed';
import LandingPage from 'comps/ProgressBut/Test';


require('typeface-roboto');

const Main = () => {

  const [clickedButton, setClickedButton] = useState(null);

  const ButtonColorSelect = (name) =>{
    setClickedButton(name);
  }
  
  return <div className="main">
      <Upload />
      <Avatar />
      <Avatar />
      <Dot />
      <Dot bgcolor="#FFC225" />
      <Dot bgcolor="#60BE68"/>
      <Pro_box />
      <EditBtn />
      <Banner />
      <FliterCheck />
      <FilterButton />
      <FilterButton bgcolor="white" border="2px solid #60BE68" color="#60BE68" img={ActiveFilterImage}/><br/>
      <Input /> <br/>
      <PendingButton 
          colorChange={ButtonColorSelect}
          name="Pending" 
          // bgcolor={clickedButton === "Pending" ? "red" : null}
        />
        {/* <br/><br/> */}
        <ProgressButton 
          colorChange={ButtonColorSelect}
          name="Pending" 
          // bgcolor={clickedButton === "Pending" ? "red" : null}
        />
        {/* <br/><br/> */}
       <CompletedButton 
          colorChange={ButtonColorSelect}
          name="Pending" 
          // bgcolor={clickedButton === "Pending" ? "red" : null}
        /> 
        <LandingPage></LandingPage>

  </div>

}

export default Main;