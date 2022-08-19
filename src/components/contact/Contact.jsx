import React from "react";
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine}  from 'react-icons/ri'
import {BsWhatsapp}  from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0rxx17m', 'template_gs490we', form.current, 'Ien90YI9zwUUqMEDQ')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <MdOutlineEmail className="contact_option-icon"/>
          <h4>Email</h4>
          <h5>bilalmandani4@gmail.com</h5>
          <a href="mailto:bilalmandani4@gmail.com" target="_blank">Send a massage</a>

        </article>
        <article className="contact_option">
   <RiMessengerLine className="contact_option-icon"/>
          <h4>Messenger</h4>
          <h5>bilalmandani4@gmail.com</h5>
          <a href="http://facebook.com" target="_blank">Send a massage</a>

        </article>
        <article className="contact_option">
         <BsWhatsapp className="contact_option-icon"/>
          <h4>WhatAspp</h4>
          <h5>+923188365840</h5>
          <a href="https://api.whatsapp.com/send?phone+923188365840" target="_blank">Send a massage</a>

        </article>
        </div>
{/* end of contact */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Entre your full name" required/>
          <input type="text" name="email" placeholder="Entre your email" required/>
          <textarea text="submit"  rows="7" placeholder="Enter your massage"/>
          <button text="submit" className="btn btn-primary">Send massage</button>
        </form>
     
    </div>

  </section>;
};

export default Contact;
