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
import AddButton from 'comps/AddButton';

require('typeface-roboto');


const Main = () => {

  const [clickedButton, setClickedButton] = useState(null);

  const ButtonColorSelect = (name, check1, check2, check3, check4, check5, check6, check7, check8, check9, check10) =>{
    setClickedButton(name, check1, check2, check3, check4, check5, check6, check7, check8, check9, check10);
    console.log(check1, check2, check3, check4, check5, check6, check7, check8, check9, check10)
  }
  
  // const HandleApply = (check1, check2, check3, check4, check5, check6, check7, check8, check9, check10) => {
  //   console.log(check1, check2, check3, check4, check5, check6, check7, check8, check9, check10)
  // }
  return <div className="main">
    <Banner />
    <div className="content">
    <div className="topbut">
      <FilterButton clickedButton={ButtonColorSelect}/>
      <AddButton />
      {/* <FilterButton name="Add" display="none" img=""/> */}
    </div>
    <Pro_box />
    <Pro_box />
    </div>
  </div>

}

export default Main;