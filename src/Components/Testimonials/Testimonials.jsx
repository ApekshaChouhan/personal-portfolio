import React from 'react'
import "./Testimonials.css"

import AVTR1 from "../../images/port1.png"
import AVTR2 from "../../images/port4.png"
import AVTR3 from "../../images/port2.png"
import AVTR4 from "../../images/port3.png"


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination , Navigation} from "swiper";


const data=[
  {
    avatar:AVTR1,
    name:"PORTFOLIO",
    review:"That's my personal portfolio ,contain all personal as well as professional information, made up using advanced react JS Technologies and methods ",
  },
  {
    avatar:AVTR3,
    name:" BOOKSHALA",
    review:"bookshala is built for maintaining user favourites books records like as liberary, having curd operation and using localstorage for users" },
  {
    avatar:AVTR4,
    name:"DALIY-NEWS-STATION",
    review:"daily-news-station is built for  providing various latest news to user, through API  ",
  },
  {
    avatar:AVTR2,
    name:"SNAPX REPLICA",
    review:"It's replica of Snapx website , made up for building ideas and basic knowldege to me ",
  },
]

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5 className='heading'>Reviews of Projects </h5>
      <h2 className='heading'> Testimonials</h2>



      <Swiper className=" container testimonials_container"  pagination={true} Navigation={true} modules={[Pagination,Navigation]}>
        {
          data.map(({avatar,name,review},index)=>{
            return(
            <SwiperSlide key={index} className='testimonials'>
            <div className='client_avatar'>
              <img src={avatar} alt='Avatar one' />
  
            </div>
            
            <h5 className='client_name'>{name}</h5>
              <small className='client-review'>{review}</small>
              
          </SwiperSlide>)
          })
        }
      </Swiper>
    </section>)
}

export default Testimonials
