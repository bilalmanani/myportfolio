import React from "react";
import './footer.css'
import {GrFacebookOption} from 'react-icons/gr'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return <footer>
    <a href="#" className="footer_logo">Bilal Ahmad</a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experinace">Experinace</a></li>
      <li><a href="#Servics">Servics</a></li>
      <li><a href="#Portfolio">portfolio</a></li>
      <li><a href="#Testimonals">Testimonals</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer_socials">
      <a href="https://facebook.com"><GrFacebookOption/></a>
      <a href="https://instagram.com"><FiInstagram/></a>
      <a href="https://twitter.com"><IoLogoTwitter/></a>
    </div>
    <div className="footer_copyreight">
      <small>&copy; Bilal Ahmad  All reight recived</small>
    </div>
  </footer>;
};

export default Footer;
