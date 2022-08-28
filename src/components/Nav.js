import React, { useState } from 'react'
import logo from '../assets/neckflix-logo.png';
import { FaUserCircle } from "react-icons/fa";

function Nav() {

  const [isSrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true)
      return () => (window.onscroll = null);
  }

  return (
    <div className={isSrolled ? "scrolled" : "nav-container"}>
        <img src={logo} alt='neckflix logo'/>
        <FaUserCircle  className='icon'/>
    </div>
  )
}

export default Nav;