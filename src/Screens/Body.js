import React,{useState,useEffect} from 'react'
import { LuCircle } from "react-icons/lu";
import { LuCircleDashed } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TbProgress } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import Card from '../components/Card';
import { IoIosMoon } from "react-icons/io";
// Body a is grouping element according to status and ordering according to priority
export const Bodya = (props) => {
  const [backlog, setBacklog] = useState([]);
  const [Todo,setTodo]=useState([]);
  const[Inprogress,setInprogress]=useState([]);
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
        // backlogdata is an array containg all the data which has status backlog
        const backlogData = data.tickets
          .filter(ticket => ticket.status === 'Backlog')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort(sortByTitle);

        setBacklog(backlogData);
        // Todo is an array containg all the data which has status Todo
        const Todo = data.tickets
          .filter(ticket => ticket.status === 'Todo')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort(sortByTitle);

        setTodo(Todo);
        //Inprogess is an array containg all the data which has status Inprogress
        const Inprogress = data.tickets
          .filter(ticket => ticket.status === 'In progress')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort(sortByTitle);
          changebl(backlogData.length);
          changetl(Todo.length);
          changeil(Inprogress.length);
        setInprogress(Inprogress);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='h-auto flex ml-6 gap-5 mt-5'>
      <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1  justify-between'>
          <div className='flex items-center gap-1 text-gray-400'><LuCircle/> <div style={{color:`${props.curcolor}`}}>Backlog</div> {bl}</div>
          <div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div>
        </div>
        <div>
        {/* We are sending all the necessary information which is on our individual cards to the card component and along with them sending the text and background color to be used which we recieved from App.js */}
          {backlog.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status="" usrid={item.usrid} curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
      </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'><div className='flex items-center gap-1'><LuCircleDashed/> <div style={{color:`${props.curcolor}`}}>Todo</div> {tl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
        {/* We are sending all the necessary information which is on our individual cards to the card component and along with them sending the text and background color to be used which we recieved from App.js */}
          {Todo.map((item)=>(
                  <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status="" usrid={item.usrid} curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'><div className='flex items-center gap-1'> <TbProgress/><div style={{color:`${props.curcolor}`}}>In progress</div> {il}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
        {/* We are sending all the necessary information which is on our individual cards to the card component and along with them sending the text and background color to be used which we recieved from App.js */}
          {Inprogress.map((item)=>(
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status="" usrid={item.usrid} curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1 justify-between text-gray-400'><div className='flex items-center gap-1'><IoIosCheckmarkCircle /><div style={{color:`${props.curcolor}`}}>Done</div> {dl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
    </div>
    <div className='w-[280px] flex-col gap-1'>
        <div className='w-[280px] flex gap-1 justify-between text-gray-400'><div className='flex items-center gap-1'><RxCross1/><div style={{color:`${props.curcolor}`}}>Cancelled</div> {cl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
    </div>
    </div>
  );
};
// Body a is grouping element according to status and ordering according to title
export const Bodyb = (props) => {
  const [backlog, setBacklog] = useState([]);
  const [Todo,setTodo]=useState([]);
  const[Inprogress,setInprogress]=useState([]);
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

        // backlogdata is an array containg all the data which has status backlog
        const backlogData = data.tickets
          .filter(ticket => ticket.status === 'Backlog')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort((a, b) => b.priority - a.priority);

        setBacklog(backlogData);
        // Todo is an array containg all the data which has status Todo
        const Todo = data.tickets
          .filter(ticket => ticket.status === 'Todo')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort((a, b) => b.priority - a.priority);

        setTodo(Todo);
        //Inprogess is an array containg all the data which has status Inprogress
        const Inprogress = data.tickets
          .filter(ticket => ticket.status === 'In progress')
          .map(ticket => ({
            id: ticket.id,
            title: ticket.title,
            priority: ticket.priority,
            status:ticket.status,
            usrid:ticket.userId
          }))
          .sort((a, b) => b.priority - a.priority);
          changebl(backlogData.length);
          changetl(Todo.length);
          changeil(Inprogress.length);
        setInprogress(Inprogress);
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
          <div className='flex items-center gap-1 '><LuCircle/><div style={{color:`${props.curcolor}`}}> Backlog</div> {bl}</div>
          <div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div>
        </div>
        <div>
        {/* We are sending all the necessary information which is on our individual cards to the card component and along with them sending the text and background color to be used which we recieved from App.js */}
          {backlog.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status="" usrid={item.usrid} curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
      </div>
    <div className='w-[280px] flex-col gap-1 '>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'><div className='flex items-center gap-1'><LuCircleDashed/> <div style={{color:`${props.curcolor}`}}> Todo</div> {tl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
        {/* We are sending all the necessary information which is on our individual cards to the card component and along with them sending the text and background color to be used which we recieved from App.js */}
          {Todo.map((item)=>(
                  <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status="" usrid={item.usrid} curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1 '>
        <div className='w-[280px] flex gap-1  justify-between text-gray-400'><div className='flex items-center gap-1'> <TbProgress/><div style={{color:`${props.curcolor}`}}> Inprogress</div> {il}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
        <div>
        {/* We are sending all the necessary information which is on our individual cards to the card component and along with them sending the text and background color to be used which we recieved from App.js */}
          {Inprogress.map((item)=>(
            <Card key={item.id} id={item.id} title={item.title} priority={item.priority} status="" usrid={item.usrid} curcolor={props.curcolor} curbgcolor={props.curbgcolor}/>
          ))}
        </div>
    </div>
    <div className='w-[280px] flex-col gap-1 '>
        <div className='w-[280px] flex gap-1 justify-between text-gray-400'><div className='flex items-center gap-1'><IoIosCheckmarkCircle /><div style={{color:`${props.curcolor}`}}> Done</div>{dl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
    </div>
    <div className='w-[280px] flex-col gap-1 '>
        <div className='w-[280px] flex gap-1 justify-between text-gray-400'><div className='flex items-center gap-1'><RxCross1/><div style={{color:`${props.curcolor}`}}> Cancelled</div> {cl}</div><div className='flex items-center gap-1'><IoMdAdd /><BsThreeDots /></div></div>
    </div>
    </div>
  );
};
export default Bodyb;