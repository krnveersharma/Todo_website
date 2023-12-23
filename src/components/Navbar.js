import React, { useState } from 'react'
import {BiChevronDown} from "react-icons/bi";
import { Link } from 'react-router-dom';
import { IoIosMoon } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
// Navbar is the top of the webpage 
const Navbar = (props) => {
  var grouping="Status";
  const [currstate,newstate]=useState("hidden"); //currstate is used for first subtab that is appearing on clicking the display button. I am using it so that it can be hidden or displayed depends on clicking event
  const [currstate1,newstate1]=useState("hidden");//currstate 1 is used for subtab that is appearing on clicking the button next to Grouping. I am using it so that it can be hidden or displayed depends on clicking event
  const [currstate2,newstate2]=useState("hidden");//currstate 2 is used for subtab that is appearing on clicking the button next to ordering. I am using it so that it can be hidden or displayed depends on clicking event
  // discontnt is being called Display button.It orders to display the frame containing Grouping and ordering.
  const discontnt=()=>{
    if(currstate=="hidden"){
    newstate("");
    }
    else{
      newstate("hidden");
      newstate1("hidden");
      newstate2("hidden");
    }
  }
  // discontnt1 is being called on clicking the button next to grouping button button.It orders to display the frame containing status,users and priority.Simultaneously it hides frame containing,priority and title
  const discontnt1=()=>{
    if(currstate1=="hidden"){
    newstate1("");
    newstate2("hidden");
    }
    else{
      newstate1("hidden");
    }
  }
  // discontnt2 is being called  on clicking the button next to ordering button.It orders to display the frame containing priority and title. Simultaneously it hides frame consisting status,user,priority.
  const discontnt2=()=>{
    if(currstate2=="hidden"){
    newstate2("");
    newstate1("hidden");
    }
    else{
      newstate2("hidden");
    }
  }
  const[groupState1,newGroupstate]=useState("Status");
  // It updates what is inside the the button which is inline with grouping and onclicking the state to be selected it hides the frame consisting status,user and priority
  const groupingChange=(stt)=>{
    newGroupstate(stt);
    newstate1("hidden");
  }
  const[groupState2,newGroupstate2]=useState("Priority");
  // It updates what is inside the the button which is inline with ordering and onclicking the state to be selected it hides the frame consisting priority and title
  const groupingChange2=(stt)=>{
    newGroupstate2(stt);
    newstate2("hidden");
  }

  return (
    // It contains all the buttons and words in our Navbar
    <div style={{ backgroundColor: `${props.curbgcolor}` }} className={`navbar h-10  flex justify-between` }>
      <div className={`ml-6  w-[115px] m-auto items-center bg-${props.curbgcolor} flex gap-2 p-1 rounded cursor-pointer justify-between relative border border-gray-300 shadow-md text-gray-400`} onClick={discontnt}>
      <VscSettings />
            <div style={{color:`${props.curcolor}`}}>Display</div>
            <BiChevronDown/>
      </div>
      <div id='dropdown' style={{ backgroundColor: `${props.curbgcolor}` }} className={`rounded absolute mt-10 ml-6 flex-row  gap-6 border border-gray-300 bg-${props.curbgcolor} ${currstate} text-${props.curcolor}`}>
            <div className='flex gap-20'>
              <div className={`ml-4  mt-1 p-1 text-${props.curcolor}`}>Grouping</div>
              <div className='mr-4 w-[115px] mt-1 ml-auto mb-1 h-[32px] items-center bg-${props.curbgcolor} flex gap-2 p-1  cursor-pointer justify-between border border-gray-300 rounded-md' onClick={discontnt1}>{groupState1}<BiChevronDown/></div>
            </div>
            <div className='flex gap-20'>
              <div className={`ml-4  mt-1 p-1 text-${props.curcolor}`}>Ordering </div>
              <div className='mr-4 w-[115px] mt-1 ml-auto mb-1 h-[32px] items-center bg-${props.curbgcolor} flex gap-2 p-1 rounded cursor-pointer justify-between border border-gray-300 ' onClick={discontnt2}>{groupState2}<BiChevronDown/></div>
            </div>
        </div>
        <div  style={{ backgroundColor: `${props.curbgcolor}` }} className={`absolute ml-[195px] mt-[77px] border border-solid border-black-500 rounded-md bg-${props.curbgcolor} ${currstate1} text-${props.curcolor}`}>
        <Link to={`/status/${groupState2}`}>
          <div className={`w-[115px] hover:bg-blue-700 text-${props.curcolor} cursor-auto`} onClick={()=>groupingChange("Status")}>Status</div>
        </Link>
        <Link to={`/user/${groupState2}`}>
          <div className={`w-[115px] hover:bg-blue-700 text-${props.curcolor} cursor-auto`} onClick={()=>groupingChange("User")}>User</div>
        </Link>
        <Link to={`/priority/${groupState2}`}>
          <div className={`w-[115px] hover:bg-blue-700 text-${props.curcolor} cursor-auto`} onClick={()=>groupingChange("Priority")}>Priority</div>
        </Link>
        </div>
        <div style={{ backgroundColor: `${props.curbgcolor}` }} className={`absolute ml-[195px] mt-[117px] border border-solid border-black-300 rounded-md bg-${props.curbgcolor} ${currstate2}`}>
        <Link to={`/${groupState1}/priority`}>
          <div className={`w-[115px] hover:bg-blue-700 text-${props.curcolor} cursor-auto`} onClick={()=>groupingChange2("Priority")}>Priority</div>
        </Link>
        <Link to={`/${groupState1}/title`}>
          <div className={`w-[115px] hover:bg-blue-700 text-${props.curcolor} cursor-auto`}onClick={()=>groupingChange2("Title")}>Title</div>
        </Link>
        </div>
    </div>
  )
}

export default Navbar;