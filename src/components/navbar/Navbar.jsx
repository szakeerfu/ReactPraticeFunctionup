import React from 'react'

import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';



const Navbar = () => {
  const [isMobile,setIsMobile] = useState(false)

 return (
    <>
     



      <div className='navbar'>
        <h3 className='logo'>ShopVibe</h3>
 
        <div className= {isMobile? "nav-links-mobile" : "nav-links" }
        onClick={()=> setIsMobile(false)}


        >

        
        <Link to='/' className='home'> Home</Link>
        <Link to={'/about'} className='about'>About</Link>
        <Link to={'/login'} className='login'>Login</Link>
        </div>

        <button className='mobile-menu-icon'
        onClick={()=>setIsMobile(!isMobile)}
        
        >
           {  isMobile ?    <CloseOutlinedIcon/>:  <MenuOutlinedIcon />}
            
        
           
           
        </button>

      </div>
       
    </>
 )
}

export default Navbar