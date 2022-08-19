import React from "react";
import "./about.css";
import ME from "../../assets/bil.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to khow</h5>
      <h2>About me</h2>
      <div className='container  about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='me' />
          </div>
        </div>
        <div className='about_contant'>
          <div className='about_cards'>
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h5>Experinace</h5>
              <small>3+ Year working</small>
            </article>
            <article className='about-card'>
              <FiUsers className='about-icon' />
              <h5>Client</h5>
              <small>200+ worldwide</small>
            </article>
            <article className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h5>project</h5>
              <small>80+ complete</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            placeat alias, quisquam minima at aliquam? Fuga saepe tempore ipsa,
            quaerat ipsam fugiat deserunt, natus est provident ipsum, vitae ex
            consequatur.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's us talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
