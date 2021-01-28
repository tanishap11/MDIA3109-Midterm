import React, { useState, useEffect } from 'react';
import Upload from 'comps/Upload';
import Avatar from 'comps/Avatar';
import Dot from 'comps/Dot';
import Pro_box from 'comps/Pro_box';
import EditBtn from 'comps/EditButton';
import Banner from 'comps/Banner';
import FliterCheck from 'comps/FliterCheck';


const Main = () => {
  
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
  </div>

}

export default Main;