import React, { useState } from 'react';
import './navbar.css';
import logo2 from '../../assets/logo2.png';
import contactImg from '../../assets/contactmeIcon.png';
import burgerBtn from '../../assets/burgerBtn.png';
import {Link} from 'react-scroll';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src={logo2} alt='Logo' className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Clients</Link>
      </div>
      <button className='desktopMenuButton' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
      }}>
        <img src={contactImg} alt='' className='desktopMenuImg' />
        Contact Me
      </button>

      <img src={burgerBtn} alt='Menu' className='mobMenuBtn' onClick={()=>{setShowMenu(!showMenu)}} />
      <div className='mobileMenu' style={{display: showMenu===true? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='mobileMenuListItem' onClick={()=>{setShowMenu(false)}}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='mobileMenuListItem' onClick={()=>{setShowMenu(false)}}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-70} duration={500} className='mobileMenuListItem' onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className='mobileMenuListItem' onClick={()=>{setShowMenu(false)}}>Clients</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='mobileMenuListItem' onClick={()=>{setShowMenu(false)}}>Contact Me</Link>
      </div>



    </nav>
  )
}

export default Navbar

