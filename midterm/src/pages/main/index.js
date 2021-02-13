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
    
    
  const GetMessages = async () => {
        var resp = await axios.get("http://localhost:8080/api/tasks");
        setAll(resp.data.tasks);
    }
    
  useEffect(() => {
      GetMessages()
  }, []);

  return <div className="main">
    <Banner />
    <div className="content">
    <div className="topbut">
      <FilterButton />
      <AddButton />
      {/* <FilterButton name="Add" display="none" img=""/> */}
    </div>
    {allclients.map(o=><Pro_box name={o.name} Iname={o.name} Itime={o.time} Iemail={o.email} Iphone={o.phone} Ibreed={o.breed} Isize={o.size} Igender={o.gender} Imed={o.med}/>)}
    </div>
  </div>

}

export default Main;