import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import AddButton from 'comps/AddButton';

require('typeface-roboto');




const Main = () => {

  const [allclients, setAll] = useState([]);

  
  /*const GetMessages = async () => {
    var resp = await axios.get("https://localhost:3306/api/");
    setAll(resp.data);
    console.log("get message", resp);
    }
  
    useEffect(() => {
      GetMessages()
  }, []);
  */

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
    </div>
  </div>

}

export default Main;