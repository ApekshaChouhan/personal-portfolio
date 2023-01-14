import React from 'react';
import "./Services.css";
import { BiCheck } from 'react-icons/bi';
const Services = () => {
  return (
<section id='Services'>
  <h5>what I Offer</h5>
  <h2>Services</h2>

  <div className='container services_container'>
    <article className="Service">
      <div className="service_head">
        <h3>UI/UX Design</h3>
      </div>

      <ul className='service_list'>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
      </ul>
    </article>
  {/* End of UX/UI */}


    <article className="Service">
      <div className="service_head">
        <h3>Web Development</h3>
      </div>

      <ul className='service_list'>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
      </ul>
    </article>
  {/* End of UX/UI */}

    <article className="Service">
      <div className="service_head">
        <h3>Content Creation</h3>
      </div>

      <ul className='service_list'>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
      </ul>
    </article>
  {/* End of UX/UI */}
  </div>
</section>  )
}

export default Services