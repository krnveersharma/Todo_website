import React,{useState,useEffect} from 'react'
import { IoMdAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineSignalCellularAlt1Bar,MdOutlineSignalCellularAlt2Bar,MdOutlineSignalCellularAlt   } from "react-icons/md";
import { BsExclamationLg } from "react-icons/bs";
import { TbLineDashed } from "react-icons/tb";
import { IoIosMoon } from "react-icons/io";

import Card from '../components/Card';
// Body 2a is used to group element based on priority and order according to priority
export const Body2a = (props) => {
  const [noPriority, setnoPriorityData] = useState([]);
  const [low,setlowData]=useState([]);
  const[medium,setmediumData]=useState([]);
  const[high,sethighData]=useState([]);
  const[urgent,seturgentData]=useState([]);
  const[bl,changebl]=useState(0);
  const[tl,changetl]=useState(0);
  const[il,changeil]=useState(0);
  const[dl,changedl]=useState(0);
  const[cl,changecl]=useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');
        const data = await response.json();

        //Storing the data which has 0 priority into noPriority array
        const noPriority = data.tickets
          .filter(ticket => ticket.priority === 0)
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort((a, b) => b.priority - a.priority);

        setnoPriorityData(noPriority);
        //Storing the data which has 1 priority into low array
        const low = data.tickets
          .filter(ticket => ticket.priority === 1)
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort((a, b) => b.priority - a.priority);

        setlowData(low);
        //Storing the data which has 2 priority into medium array
        const medium = data.tickets
          .filter(ticket => ticket.priority === 2)
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort((a, b) => b.priority - a.priority);

        setmediumData(medium);
        //Storing the data which has 3 priority into high array
        const high= data.tickets
          .filter(ticket => ticket.priority === 3)
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort((a, b) => b.priority - a.priority);

        sethighData(high);
        //Storing the data which has 4 priority into urgent array
        const urgent= data.tickets
          .filter(ticket => ticket.priority === 4)
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort((a, b) => b.priority - a.priority);
          changebl(noPriority.length);
          changetl(low.length);
          changeil(medium.length);
          changedl(high.length);
          changecl(urgent.length);

        seturgentData(urgent);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='h-auto flex ml-6 gap-6 mt-5'>
      <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'>
          <div className='flex gap-1 items-center'><TbLineDashed/><div style={{color:`${props.curcolor}`}}>No Priority</div> {bl}</div>
          <div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div>
        </div>
        <div>
          {noPriority.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={5} status={item.status} usrid={item.usrid} curbgcolor={props.curbgcolor} curcolor={props.curcolor}/>
          ))}
        </div>
      </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'><div className='flex items-center gap-1'><MdOutlineSignalCellularAlt1Bar/> <div style={{color:`${props.curcolor}`}}>Low </div>{tl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {low.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={5} status={item.status} usrid={item.usrid} curbgcolor={props.curbgcolor} curcolor={props.curcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'><div className='flex items-center gap-1'> <MdOutlineSignalCellularAlt2Bar/><div style={{color:`${props.curcolor}`}}>Medium</div> {il}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {medium.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={5} status={item.status} usrid={item.usrid} curbgcolor={props.curbgcolor} curcolor={props.curcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1 justify-between text-gray-400'><div className='flex items-center gap-1'><MdOutlineSignalCellularAlt /><div style={{color:`${props.curcolor}`}}>High</div> {dl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {high.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={5} status={item.status} usrid={item.usrid} curbgcolor={props.curbgcolor} curcolor={props.curcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1 justify-between text-gray-400'><div className='flex items-center gap-1'><BsExclamationLg/><div style={{color:`${props.curcolor}`}}>Urgent</div> {cl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {urgent.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={5} status={item.status} usrid={item.usrid} curbgcolor={props.curbgcolor} curcolor={props.curcolor}/>
          ))}
        </div>
    </div>
    </div>
  );
};
// // Body 2a is used to group element based on priority and order according to title
export const Body2b = (props) => {
  const [noPriority, setnoPriorityData] = useState([]);
  const [low,setlowData]=useState([]);
  const[medium,setmediumData]=useState([]);
  const[high,sethighData]=useState([]);
  const[urgent,seturgentData]=useState([]);
  const[bl,changebl]=useState(0);
  const[tl,changetl]=useState(0);
  const[il,changeil]=useState(0);
  const[dl,changedl]=useState(0);
  const[cl,changecl]=useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');
        const data = await response.json();
        const sortByTitle = (a, b) => a.title.localeCompare(b.title);
        //Storing the data which has 0 priority into noPriority array
        const noPriority = data.tickets
          .filter(ticket => ticket.priority === 0)
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort(sortByTitle);

        setnoPriorityData(noPriority);
        //Storing the data which has 1 priority into low array
        const low = data.tickets
          .filter(ticket => ticket.priority === 1)
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort(sortByTitle);

        setlowData(low);
        //Storing the data which has 2 priority into medium array
        const medium = data.tickets
          .filter(ticket => ticket.priority === 2)
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort(sortByTitle);

        setmediumData(medium);
        //Storing the data which has 3 priority into high array
        const high= data.tickets
          .filter(ticket => ticket.priority === 3)
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort(sortByTitle);

        sethighData(high);
        //Storing the data which has 4 priority into urgent array
        const urgent= data.tickets
          .filter(ticket => ticket.priority === 4)
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort(sortByTitle);
          changebl(noPriority.length);
          changetl(low.length);
          changeil(medium.length);
          changedl(high.length);
          changecl(urgent.length);
        seturgentData(urgent);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='h-auto flex ml-6 gap-6 mt-5'>
      <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'>
          <div className='flex gap-1 items-center'><TbLineDashed/> <div style={{color:`${props.curcolor}`}}>No Priority</div>{bl}</div>
          <div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div>
        </div>
        <div>
          {noPriority.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={5} status={item.status} usrid={item.usrid} curbgcolor={props.curbgcolor} curcolor={props.curcolor}/>
          ))}
        </div>
      </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'><div className='flex items-center gap-1'><MdOutlineSignalCellularAlt1Bar/><div >Low</div> {tl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {low.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={5} status={item.status} usrid={item.usrid} curbgcolor={props.curbgcolor} curcolor={props.curcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'><div className='flex items-center gap-1'> <MdOutlineSignalCellularAlt2Bar/><div style={{color:`${props.curcolor}`}}>Medium</div> {il}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {medium.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={5} status={item.status} usrid={item.usrid} curbgcolor={props.curbgcolor} curcolor={props.curcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1 justify-between text-gray-400'><div className='flex items-center gap-1'><MdOutlineSignalCellularAlt /><div style={{color:`${props.curcolor}`}}>High</div> {dl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {high.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={5} status={item.status} usrid={item.usrid} curbgcolor={props.curbgcolor} curcolor={props.curcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1 justify-between text-gray-400'><div className='flex items-center gap-1'><BsExclamationLg/><div style={{color:`${props.curcolor}`}}>Urgent</div> {cl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {urgent.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={5} status={item.status} usrid={item.usrid} curbgcolor={props.curbgcolor} curcolor={props.curcolor}/>
          ))}
        </div>
    </div>
    </div>
  );
};