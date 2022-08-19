import React from "react";

import "./testimonals.css";
import AVTR1 from '../../assets/my1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';




const data=[
  {
    avatar:AVTR1,
    name:'Tina Snow',
    review:'My name is Bilal Ahmad and i am full stack developer '
  },
  // {
  //   avatar:AVTR2,
  //   name:'Shatta Wale',
  //   review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum porro itaque quam magni incidunt a molestiae voluptatibus dolores fuga, consequuntur maiores iure praesentium in. Iste perferendis praesentium itaque laudantium.'

  // },
  // {
  //   avatar:AVTR3,
  //   name:'Kwame Despite',
  //   review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum porro itaque quam magni incidunt a molestiae voluptatibus dolores fuga, consequuntur maiores iure praesentium in. Iste perferendis praesentium itaque laudantium.'
  // },
  // {
  //   avatar:AVTR4,
  //   name:'Nana Ama McBrown',
  //   review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum porro itaque quam magni incidunt a molestiae voluptatibus dolores fuga, consequuntur maiores iure praesentium in. Iste perferendis praesentium itaque laudantium.'
  // },

]

const Testimonals = () => {
  return <section id='testimonal'>
    <h5>Reveiw for Client</h5>
    <h2>Testimonals</h2>
    <Swiper className="container testimonal_container"
     modules={ [Pagination]}
     spaceBetween={40}
     slidesPerView={1}
    
      pagination={{ clickable: true }}
    >
      {
        data.map(({avatar,name,review},index)=>{
        return(
          <SwiperSlide key={index} className="testimonal">
        <div className="client_avatar">
          <img src={avatar} alt="none" />
          <h5 className="client_name">{name}</h5>
         
        </div>
        <small className="client_review">
           {review}
          </small>
      </SwiperSlide>
        )
        })
      }
     
     
     </Swiper>

  </section>;
};

export default Testimonals;
