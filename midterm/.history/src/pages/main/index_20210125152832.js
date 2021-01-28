import React, { useState, useEffect } from 'react';
import Upload from 'comps/Upload';
import Avatar from 'comps/Avatar';
import Dot from 'comps/Dot';
import Pro_box from 'comps/Pro_box';

const Main = () => {
  
  return <div className="main">
      <Upload />
      <Avatar />
      <Avatar />
      <Dot />
      <Dot bgcolor="progress" />
      <Dot bgcolor="#60BE68"/>
      <Pro_box />
  </div>

}

export default Main;