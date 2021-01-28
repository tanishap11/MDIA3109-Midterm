import React, { useState, useEffect } from 'react';
import Upload from 'comps/Upload';
import Avatar from 'comps/Avatar';
import Dot from 'comps/Dot';
import Pro_box from 'comps/Pro_box';
import Oliver from '../../image/oliver.jpeg';
import Spotty from '../../image/spotty.png';
import {Pending, Progress, Completed} from 'comps/Dot';


const Main = () => {
  
  return <div className="main">
      <Upload />
      <Avatar img={Spotty}/>
      <Avatar/>
      <Dot />
      <Dot bgcolor={Pending}/>
      <Dot bgcolor={Progress}/>
      <Dot bgcolor={Completed}/>
      <Pro_box />
  </div>

}

export default Main;