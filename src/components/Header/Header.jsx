import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/my1.jpg";
import HeaderSocails from "./HeaderSocails";
const Header = () => {
  return (
    <header>
      <div className='container  header_container'>
        <h5>hello i am</h5>
        <h1>Bilal Ahmad</h1>
        <h5 className='text-light'>Full stack developer</h5>
        <CTA />
        <HeaderSocails />
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
        <a href='#contact ' className='scroll_down'>
          scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
