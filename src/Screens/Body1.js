import React,{useState,useEffect} from 'react'
import { IoMdAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import Card from '../components/Card';
// Body 1a is used to display element based on priority and sort according to priority
export const Body1a = (props) => {
  const [Anoop, setAnoopData] = useState([]);
  const [Yogesh,setYogeshData]=useState([]);
  const[Suresh,setSureshData]=useState([]);
  const[Shankar,setShankarData]=useState([]);
  const[Ramesh,setRameshData]=useState([]);
  const[bl,changebl]=useState(0);
  const[tl,changetl]=useState(0);
  const[il,changeil]=useState(0);
  const[dl,changedl]=useState(0);
  const[cl,changecl]=useState(0);
  // I am using the useffect here because upon calling the api i am storing the data of the users into the arrays named according to theire username and then passing to the cardsso that we can see updated cards from api everytime
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching the Api
        const response = await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');
        const data = await response.json();
        // Tasks from annop are stored in array anoop
        const Anoop = data.tickets
          .filter(ticket => ticket.userId === 'usr-1')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort((a, b) => b.priority - a.priority);

        setAnoopData(Anoop);
        // Tasks from Yogesh are stored in array Yogesh
        const Yogesh = data.tickets
          .filter(ticket => ticket.userId === 'usr-2')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort((a, b) => b.priority - a.priority);

        setYogeshData(Yogesh);
        // Tasks from Suresh are stored in array Suresh
        const Suresh = data.tickets
          .filter(ticket => ticket.userId === 'usr-5')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort((a, b) => b.priority - a.priority);

        setSureshData(Suresh);
        // Tasks from Shankar are stored in array Shankar
        const Shankar= data.tickets
          .filter(ticket => ticket.userId === 'usr-3')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort((a, b) => b.priority - a.priority);

        setShankarData(Shankar);
        // Tasks from Ramesh are stored in array Ramesh
        const Ramesh= data.tickets
          .filter(ticket => ticket.userId === 'usr-4')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort((a, b) => b.priority - a.priority);
          changebl(Anoop.length);
          changetl(Yogesh.length);
          changeil(Suresh.length);
          changedl(Shankar.length);
          changecl(Ramesh.length);
        setRameshData(Ramesh);
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
          <div className='flex items-center gap-1'><IoPersonAddOutline/> <div style={{color:`${props.curcolor}`}}> Anoop sharma</div> {bl}</div>
          <div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div>
        </div>
        <div>
          {Anoop.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status={item.status} usrid="" curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
      </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'><div className='flex items-center gap-1'><IoPersonAddSharp/> <div style={{color:`${props.curcolor}`}}> Yogesh</div> {tl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {Yogesh.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status={item.status} usrid="" curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'><div className='flex items-center gap-1'> <IoPersonCircle/><div style={{color:`${props.curcolor}`}}>Suresh</div> {il}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {Suresh.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status={item.status} usrid="" curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1 justify-between text-gray-400'><div className='flex items-center gap-1'><IoPersonCircleOutline /><div cstyle={{color:`${props.curcolor}`}}> Shankar Kumar</div>{dl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {Shankar.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status={item.status} usrid="" curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1 justify-between text-gray-400'><div className='flex items-center gap-1'><IoPersonOutline/><div style={{color:`${props.curcolor}`}}>Ramesh</div> {cl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {Ramesh.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status={item.status} usrid="" curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
    </div>
    </div>
  );
};
// Body 1b is used to display element based on priority and sort according to title
export const Body1b = (props) => {
  const [Anoop, setAnoopData] = useState([]);
  const [Yogesh,setYogeshData]=useState([]);
  const[Suresh,setSureshData]=useState([]);
  const[Shankar,setShankarData]=useState([]);
  const[Ramesh,setRameshData]=useState([]);
  const[bl,changebl]=useState(0);
  const[tl,changetl]=useState(0);
  const[il,changeil]=useState(0);
  const[dl,changedl]=useState(0);
  const[cl,changecl]=useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching Api
        const response = await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');
        const data = await response.json();
        const sortByTitle = (a, b) => a.title.localeCompare(b.title);
        // Tasks from anoop are stored in array anoop
        const Anoop = data.tickets
          .filter(ticket => ticket.userId === 'usr-1')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort(sortByTitle);

        setAnoopData(Anoop);
        // Tasks from Yogesh are stored in array Yogesh
        const Yogesh = data.tickets
          .filter(ticket => ticket.userId === 'usr-2')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort(sortByTitle);

        setYogeshData(Yogesh);
        // Tasks from Suresh are stored in array Suresh
        const Suresh = data.tickets
          .filter(ticket => ticket.userId === 'usr-5')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort(sortByTitle);

        setSureshData(Suresh);
        // Tasks from Shankar are stored in array Shankar
        const Shankar= data.tickets
          .filter(ticket => ticket.userId === 'usr-3')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort(sortByTitle);

        setShankarData(Shankar);
        // Tasks from Ramesh are stored in array Ramesh
        const Ramesh= data.tickets
          .filter(ticket => ticket.userId === 'usr-4')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort(sortByTitle);
          changebl(Anoop.length);
          changetl(Yogesh.length);
          changeil(Suresh.length);
          changedl(Shankar.length);
          changecl(Ramesh.length);
        setRameshData(Ramesh);
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
          <div className='flex items-center gap-1'><IoPersonAddOutline/> <div style={{color:`${props.curcolor}`}}> Anoop sharma</div> {bl}</div>
          <div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div>
        </div>
        <div>
          {Anoop.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status={item.status} usrid="" curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
      </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'><div className='flex items-center gap-1'><IoPersonAddSharp/> <div style={{color:`${props.curcolor}`}}> Yogesh</div> {tl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {Yogesh.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status={item.status} usrid="" curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'><div className='flex items-center gap-1'> <IoPersonCircle/><div style={{color:`${props.curcolor}`}}>Suresh</div> {il}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {Suresh.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status={item.status} usrid="" curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1 justify-between text-gray-400'><div className='flex items-center gap-1 '><IoPersonCircleOutline /><div style={{color:`${props.curcolor}`}}> Shankar Kumar</div>{dl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {Shankar.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status={item.status} usrid="" curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1 justify-between text-gray-400'><div className='flex items-center gap-1'><IoPersonOutline/><div style={{color:`${props.curcolor}`}}>Ramesh</div> {cl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
          {Ramesh.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status={item.status} usrid="" curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
    </div>
    </div>
  );
};