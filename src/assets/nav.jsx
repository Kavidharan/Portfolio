import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './home';
import './nav.css'; 

function nav() {
  const [activ,setActiv] = useState(false);
  function click(){
   activ == true ? setActiv(false) : setActiv(true);
  }
  return (
    <div className='nav'>
      <div className='menu'>
        <h1>KAVIDHARAN</h1>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/skill">SKILLS</Link></li>
          <li><Link to="/project">PROJECT</Link></li>
          <li><Link to="/contacts">CONTACTS</Link></li>
        </ul>
      </div>
      <div className='burgermenu'>
        <h2>KAVIDHARAN</h2>
        <button onClick={() => click()}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className='blur'style={{"backdropFilter": activ ? "blur(10px)" : "blur(0px)"}}>
        <ul  className='burgermenucontent' style={{"display": activ ? "block" : "none"}}>
          <li><Link to='/' onClick= {()=>click()}>HOME</Link></li>
          <li><Link to='skill' onClick= {()=>click()}>SKILL</Link></li>
          <li><Link to='/project' onClick= {()=>click()}>PROJECT</Link></li>
          <li><Link to='/contacts' onClick= {()=>click()}>CONTACTS</Link></li>
        </ul>
      </div>
    </div>  
  )
}

export default nav;