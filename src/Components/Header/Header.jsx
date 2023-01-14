import React from 'react'
import "./Header.css"
import CTA from "./CTA"
import ME from "../../images/me2.png"
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
  
     <header>
      <div className="container header_container">
      <center>
      <h5 className='headings1'>Hello I'am</h5> 
       <h1 className='headings1'>Apeksha Chouhan</h1> 
       <h5 className='text-light headings1'>FullStack Developer</h5> 
      </center>
       <CTA/>
       <HeaderSocial/>
       <div className='me'>
        <img src={ME} className="me1" alt='me2'/>

       </div>

       <a href='#Contact' className='scroll_down'>Scroll Down</a>
      </div>

     </header> 
    
    )
}

export default Header
