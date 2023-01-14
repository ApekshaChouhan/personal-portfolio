import React from 'react'
import "./Header.css"
import CV from "../../images/CVApeksha.pdf"
const CTA = () => {
  return (
    <>
       <div className='cta'>
        <a href={CV} download={CV} className="btn">Download CV</a>
        <a href='#Contact' className='btn btn-primary'>Let's Talk</a>
        
        </div> 
    </>
  )
}

export default CTA