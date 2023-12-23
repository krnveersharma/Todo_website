import React, { useState,useEffect } from 'react'
import { GoDotFill } from "react-icons/go";
import { MdOutlineSignalCellularAlt1Bar,MdOutlineSignalCellularAlt2Bar,MdOutlineSignalCellularAlt   } from "react-icons/md";
import { BsExclamationLg } from "react-icons/bs";
import { TbLineDashed } from "react-icons/tb";
import { LuCircle } from "react-icons/lu";
import { LuCircleDashed } from "react-icons/lu";
import { TbProgress } from "react-icons/tb";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
// Cards are used in status users and priorities tab to display the work to be done 
const Card = (props) => {
  let icn=[TbLineDashed,MdOutlineSignalCellularAlt1Bar,MdOutlineSignalCellularAlt2Bar,MdOutlineSignalCellularAlt,BsExclamationLg,TbLineDashed];
  let icn2=[LuCircle,LuCircleDashed,TbProgress];
  var hide="";
  var hide1="";
  var hide2="";
  var IconComponent2=LuCircleDashed;
  var IconComponent3=IoPersonAddOutline;
  // It tells if priority from Body1,Body2 or Body3 is 5 then hide the icon of priority in main page
  if(props.priority===5){
    hide="hidden";
  }
  // It tells to hide icon  or which icon to use on base of status which is being passed from Body,Body1 and Body2
  if(props.status===""){
    hide1="hidden";
  }
  else if(props.status==="Todo"){
    IconComponent2=icn2[1];
  }
  else if(props.status==="Backlog"){
    IconComponent2=icn2[0];
  }
  else if(props.status==="In progress"){
    IconComponent2=icn2[2];
  }
  // It tells to hide icon  or which icon to use on base of user id which is being passed from Body,Body1 and Body2
  if(props.usrid===""){
    hide2="hidden";
  }
  if(props.usrid==="usr-1"){
    IconComponent3=IoPersonAddOutline;
  }
  else if(props.usrid==="usr-2"){
    IconComponent3=IoPersonAddSharp;
  }
  else if(props.usrid==="usr-3"){
    IconComponent3=IoPersonCircle;
  }
  else if(props.usrid==="usr-4"){
    IconComponent3=IoPersonCircleOutline;
  }
  else{
    IconComponent3=IoPersonOutline;
  }
  // Changing the shadow on dark and light mode
  const [bgc,changebgc]=useState("rgba(17, 17, 26, 0.2) 0px 0px 16px");
  useEffect(()=>{
    console.log(props.curcolor);
  if (props.curcolor === "white") {
    changebgc("rgba(255, 253, 253, 0.2) 0px 0px 16px");
  } else {
    changebgc("rgba(17, 17, 26, 0.2) 0px 0px 16px");

  }
}, [props.curcolor]);
  var IconComponent = icn[props.priority];
  return (
    <div style={{color:`${props.curcolor}`, backgroundColor:`${props.curbgcolor}`,boxShadow:`${bgc}`}} className={`w-[280px] flex-col h-auto space-y-3 p-3 border border-gray-200 rounded-xl mt-5 `} >
        <div className='text-gray-400 flex justify-between'><div>{props.id}</div><div className={`${hide2}`}><IconComponent3/></div></div>
        <div className='flex gap-1'>
        <div className={`${hide1} mt-1`}><IconComponent2/></div>
            <div style={{color:`${props.curcolor}`}}>{props.title}</div>
        </div>
        <div className='flex items-center gap-5'>
            <div className={`${hide} text-gray-400`}><IconComponent/></div>
            <div className='flex border border-gray-200 items-center rounded-sm'>
                <div className='text-gray-400'><GoDotFill/></div>
                <div className='text-gray-400 mr-1'>Feature request</div>
            </div>
        </div>
    </div>
  )
}

export default Card