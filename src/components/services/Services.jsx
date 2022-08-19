import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Am Offer</h5>
      <h2>Services</h2>
      <div className='container  services_container'>
        <article className='services'>
          <div className='services_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='services_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p> i will provide best UI UX experince</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Highly Professional and Unique Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>100% Unlimited revisions</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Mobile-Friendly websites and landing pages</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>E-commerce with various payment methods</p>
            </li>
            
          </ul>
        </article>
        {/* END OF UI */}
        <article className='services'>
          <div className='services_head'>
            <h3>Front End Development</h3>
          </div>
          <ul className='services_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Full HTML5 and CSS3 code</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Bootstrap 5Framework</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Mobile Responsive design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>W3C validation</p>
            </li>
            
            <li>
              <BiCheck className='service_list-icon' />
              <p>javascript</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>React js front end</p>
            </li>
            
             
          </ul>
        </article>
        {/* END OF WEB develpment */}
        <article className='services'>
          <div className='services_head'>
            <h3>Back End Development</h3>
          </div>
          <ul className='services_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Node JS</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Express</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Mongodb</p>
            </li>
           
          </ul>
        </article>
        {/* END OF UI */}
      </div>
    </section>
  );
};

export default Services;
