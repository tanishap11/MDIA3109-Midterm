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
import FilterButton from 'comps/Filter Button';
import ActiveFilterImage from '../../image/filter-active.png';

// require('typeface-roboto');

const Main = () => {
  
  return <div className="main">
      <Upload />
      {/* <Avatar img={Spotty}/>
      <Avatar/> */}
      <Dot />
      <Dot bgcolor={Pending}/>
      <Dot bgcolor={Progress}/>
      <Dot bgcolor={Completed}/>
      <Pro_box />
      <EditBtn />
      <Banner />
      <FliterCheck />
      <FilterButton />
      <FilterButton bgcolor="white" border="2px solid #60BE68" color="#60BE68" img={ActiveFilterImage}/>
  </div>

}

export default Main;