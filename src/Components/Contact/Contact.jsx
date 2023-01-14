import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
// import React from 'react'
import "./Contact.css"
import  { useRef } from 'react';
import emailjs from "emailjs-com"
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_51pqsgl', 'template_4fizvi7', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  
  return (
<section id='Contact'>
  
<center className="headings5">
<h5>Get In Touch</h5>
<h2>Contact Me</h2>
</center>

<div className='container contact_container'>
  <div className="contact_options">
    <article className="contact_option">
      <MdOutlineEmail className="contact_option-icon"/>
      <h4>Email</h4>
      <h5>dummyemail@gmail.com</h5>
      <a href='mailto:dummyemail@gmail.' target="blank">Send a Message</a>
    </article>
    <article className="contact_option">
      <RiMessengerLine className="contact_option-icon"/>
      <h4>Messenger</h4>
      <h5>dummyemail@gmail.com</h5>
      <a href='https://n.me/ernest.achiever' target="blank">Send a Message</a>
    </article>
    <article className="contact_option">
      <BsWhatsapp className="contact_option-icon"/>
      <h4>Email</h4>
      <h5>dummyemail@gmail.com</h5>
      <a href='https://api.whatsapp.com/send?phone+919425433964' target="blank">Send a Message</a>
    </article>

  </div>
  {/* End of Contact Options */}
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your good name here!" required></input>
      <input type="email" name="email" placeholder=" Enter your email here!" required></input>
      <textarea name="message" rows="7" placeholder="Leave Message Here!" required></textarea>
      <button type="submit" className=" btn btn-primary">Send message!</button>
    </form>

</div>
</section>  )
}

export default Contact
