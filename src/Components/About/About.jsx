import React from 'react'
import "./About.css"
import ME from "../../images/me1.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='About'>
      <center className='headings2'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      </center>
      <br/>
      <br/>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME}  class="me2" alt='Image' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
          

        
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Clients</h5>
              <small>Welcome</small>
            </article>
          

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, sapiente. Quae quasi fuga assumenda! Optio atque architecto quas, a reiciendis voluptates sapiente nihil laboriosam, praesentium minima, quos saepe error iure!

          </p>
          <a href="#Contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>)
}

export default About
