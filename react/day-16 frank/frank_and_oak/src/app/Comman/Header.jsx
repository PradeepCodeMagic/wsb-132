"use client"

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import  "./Header.css"

export default function Header() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <header className=' ' >
      <div className='blackDiv bg-black text-white  flex justify-evenly p-[10px] '>

        <div className='w-[80%]'>
          <Slider {...settings}>

            <div className='bg-[red]' >
              <h3>Enjoy free shipping on orders $99+ and extended returns until January 12th</h3>
            </div>
            <div className='bg-[#1d38bc]' >
              <h3>Enjoy free shipping on orders $99+ and extended returns until January 12th</h3>
            </div>
            <div className='bg-[#9ed21c]' >
              <h3>Enjoy free shipping on orders $99+ and extended returns until January 12th</h3>
            </div>

          </Slider>
        </div>

        <div className='w-[10%]'>
              Flags
        </div>

      </div>
      <div className='whiteDiv'> Mega Menu </div>
    </header>
  )
}
