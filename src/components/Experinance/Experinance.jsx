import React from "react";
import "./experinance.css";

import { BsPatchCheckFill } from "react-icons/bs";

const Experinance = () => {
  return (
    <section id='experinace'>
      <h5>What Skill I Have</h5>
      <h2>My Experaince</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />

              <div>
                <h4>HTML</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Bootrape</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Tailwent</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* backend  */}
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Nodejs</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Mongodb</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MySql</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experinance;
