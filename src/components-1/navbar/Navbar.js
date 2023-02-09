import React, { useState }from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import carlogo from './icons/carlogo.svg';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false)
  const [user, setUser] = useState()

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }


  return (
    <div className='navbar'>
        <div className='leftSide' id = {openLinks? "open": "close"}>
        <img src= {carlogo} alt ="pizza logo" style={{height:'40px', width:'50px', backgroundColor:'orange'}}/>
            <h1 className='logo'>
                  CA.R.ENTAL
            </h1>
            <div className = 'hiddenLinks'>
              <NavLink to= '/'>HOME</NavLink>
              <NavLink to = '/about'>ABOUT</NavLink>
              <NavLink to = '/blogs'>BlOG</NavLink>
              <NavLink to='/services' className="disabled-link">SERVICES</NavLink>
                <div className='submenu'>
                                <NavLink to='/services/hire'>Hire</NavLink>
                                <NavLink to='/services/appointment'>Appointment</NavLink>
                </div>
              <NavLink to ='/contacts'>CONTACT</NavLink> 
              <NavLink to ='/login'>
                <button variant="outline" onClick={handleLogoutClick}>
                  Logout
                </button>
              </NavLink> 
            </div>
        </div>
        <div className='rightSide'>
          <NavLink to= '/'>HOME</NavLink>
          <NavLink to = '/about'>ABOUT</NavLink>
          <NavLink to = '/blogs'>BLOG</NavLink>
          
          <NavLink to='/services' className="disabled-link">SERVICES</NavLink>
            <div className='submenu'>
              <NavLink to='/services/hire'>Hire</NavLink>
              <NavLink to='/services/appointment'>Appointment</NavLink>
            </div>
          <NavLink to ='/contacts'>CONTACT</NavLink>
          {/* <button className='logout'>Log out</button> */}
          <button onClick={() => setOpenLinks(!openLinks)}>
            <ReorderIcon />
          </button>
          
        </div>

    </div>
  )
}

export default Navbar;