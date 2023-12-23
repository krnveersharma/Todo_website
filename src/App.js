import React,{useState} from 'react'
import Navbar from './components/Navbar'
import {Bodya,Bodyb} from './Screens/Body'
import {Body1a,Body1b} from './Screens/Body1'
import {Body2a,Body2b} from './Screens/Body2'
import { BrowserRouter,Routes, Route } from "react-router-dom"
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
//Main page of our tab which has all the screens and navbar
const App = () => {
  const [curcolor,changecolor]=useState("black");
  const[curbodycolor,changebodycolor]=useState("#F5F4F8")
  const [curbgcolor,changebgcolor]=useState('#F5F5F9');
  const[Navcurcolor,changeNavcurcolor]=useState("#FEFFFE");
  const[DmIcon,changedmicon]=useState(<IoIosMoon/>);
  // Dark mode changes the background olor and text color adnd changes moon icon to sun icon
  const darkmode=()=>{
    if(curbgcolor==="#F5F5F9"){
      changedmicon(<div className='text-white'><MdSunny/></div>)
      changecolor("white");
      changebgcolor('#010508');
      changeNavcurcolor('#161B22');
      console.log(curcolor);
    }
    else{
      changedmicon(<IoIosMoon/>)
      changecolor("black");
      changebgcolor('#F5F5F9');
      changeNavcurcolor('#FEFFFE')
      console.log(curcolor);
  }
  }
  return (
    <div style={{backgroundColor: `${curbgcolor}`}} className={`min-h-screen` }>
    <div className='absolute right-0 mr-9 mt-[11.5px] cursor-pointer' onClick={darkmode}>{DmIcon}</div>
      <BrowserRouter>
      {/* We are here sending the color information to navbar.It defines which color to use for background and text */}
      <Navbar
        curcolor={curcolor}
        curbgcolor={Navcurcolor}
      />
      <Routes>
      {/* Routing is creating the paths to which page we will be redirecting on click the options from our navbar */}
          <Route exact path="/" element={<Bodya curcolor={curcolor} curbgcolor={Navcurcolor}/>}/>
          <Route exact path="/status/priority" element={<Bodya curcolor={curcolor} curbgcolor={Navcurcolor} />}/>
          <Route exact path="/status/title" element={<Bodyb curcolor={curcolor} curbgcolor={Navcurcolor}/>}/>
          <Route exact path="/user/priority" element={<Body1a curcolor={curcolor} curbgcolor={Navcurcolor}/>}/>
          <Route exact path="/user/title" element={<Body1b curcolor={curcolor} curbgcolor={Navcurcolor}/>}/>
          <Route exact path="/priority/priority" element={<Body2a curcolor={curcolor} curbgcolor={Navcurcolor}/>}/>
          <Route exact path="/priority/title" element={<Body2b curcolor={curcolor} curbgcolor={Navcurcolor}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App