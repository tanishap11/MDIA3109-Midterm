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

import Input from 'comps/Input';
import PendingButton from 'comps/ProgressBut/Pending';
import ProgressButton from 'comps/ProgressBut/InProgress';
import CompletedButton from 'comps/ProgressBut/Completed';
import LandingPage from 'comps/ProgressBut/Test/Pen';
import YellowBut from 'comps/ProgressBut/Test/Prog';
import GreenBut from 'comps/ProgressBut/Test/Com';
import BlueBut from 'comps/ProgressBut/Test/Pend';
import Input_box from 'comps/inputBox';

require('typeface-roboto');

const Home = () => {        
        return <div className="main">
            {/* <Pro_box/> */}
            <Banner/>
            <FilterButton bgcolor="white" border="2px solid #60BE68" color="#60BE68" img={ActiveFilterImage}/><br/>
            <FilterButton display="none" img="" name="Add"/><br/>
            
        </div>
    }

export default Home;