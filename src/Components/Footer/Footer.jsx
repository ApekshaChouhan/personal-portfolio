import React from 'react'
import "./Footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
const Footer = () => {
  return (
<footer>
  <ul className='permalinks'>
    <li><a href='# '>Home</a></li>
    <li><a href='#About '>About</a></li>
    <li><a href='#Experience'>Experience</a></li>
    <li><a href='#Portfolio '>Portfolio</a></li>
    <li><a href='#Testimonials'>Testimonials</a></li>
    <li><a href='#Contact'>Contact</a></li>
  </ul>

  <div className='footer_socials'>
    <a href='https://facebook.com'><FaFacebookF/></a>
    <a href='https://instagram.com'><FiInstagram/></a>
    <a href='https://twitter.com'><IoLogoTwitter/></a>
  </div>


  <div className='footer_copyright'>
    <small>&copy; Hey! Welcome to my portfolio</small>
  </div>
</footer>  )
}

export default Footer
