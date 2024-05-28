import React, { useRef, useState } from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'
import underline from '../../assets/nav_underline1.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
function Navbar() {
  const [menu,setMenu]=useState('home')
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right='0';
  }
  const closeMenu=()=>{
    menuRef.current.style.right='-100vw';
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo'/>
      <img src={menu_open} onClick={openMenu} alt="" className='menu-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className='menu-mob-close' />
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'?<img src={underline} className='logo_under'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink>{menu==='about'?<img src={underline} className='logo_under'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu('project')}>Projects</p></AnchorLink>{menu==='project'?<img src={underline} className='logo_under'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'?<img src={underline} className='logo_under'/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar
