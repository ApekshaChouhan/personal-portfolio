import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
const Experience = () => {
  return (
    <section id='Experience'>
    <div style={{height:"30rem"}}></div>

<center className='headings3'>
<h5>What Skills I Have</h5>
      <h2>My Experience</h2>
</center>

      <div className='container experience_container'>
        <div className='experience_frontend'>
      <h3>Frontend Development</h3>
      <div className="experience_content">
        <article className='experience_details'>
          <BsPatchCheckFill/>
        <h4>HTML</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill/>
        <h4>CSS</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill/>
        <h4>JAVASCRIPT</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill/>
        <h4>BOOTSTRAP</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill/>
        <h4>REACT</h4>
        <small className='text-light'>Experienced</small>
        </article>
        
      </div>
        </div>


        <div className='experience_backend'>
      <h3>Backend Development</h3>
      <div className="experience_content">
       
        <article className='experience_details'>
          <BsPatchCheckFill/>
        <h4>JAVA </h4>
        <small className='text-light'>INTERMEDIATE</small>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill/>
        <h4>C</h4>
        <small className='text-light'>INTERMEDIATE</small>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill/>
        <h4>C++</h4>
        <small className='text-light'>INTERMEDIATE</small>
        </article>
      </div>
       

        </div>
      </div>
    </section>
  )
}

export default Experience
