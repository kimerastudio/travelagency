"use client";
import React, { Fragment, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const CarouselTestimonial = ({ enableAOS = false }) => {
  useEffect(() => {
    if (enableAOS) {
      // Inisialisasi AOS hanya jika enableAOS bernilai true
      AOS.init({
        once: true,
        duration: 500,
      });
    }
  }, [enableAOS]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Fragment>
      <div
        data-aos={enableAOS ? "fade-right" : ""}
        data-aos-delay={enableAOS ? "400" : ""}
        className="w-full"
      >
        <Slider {...settings}>
          <div className="w-full p-4 ">
            <div className="flex items-center gap-2 mb-4">
              <img src="./../images/Star.svg" alt="" />
              <img src="./../images/Star.svg" alt="" />
              <img src="./../images/Star.svg" alt="" />
              <img src="./../images/Star.svg" alt="" />
              <img src="./../images/Star.svg" alt="" />
            </div>

            <p className="text__18 mb-3">
            Since I had Carlos' contact on my phone, every time I travel it's a walk in the park; I delegate most of the work to him at no cost.
            </p>

            <div className="flex items-center gap-3">
              <img
                src="./../images/avatar.png"
                className="w-[48px] h-[48px] rounded-full object-cover"
                alt=""
              />
              <div className="">
                <h5 className="font-semibold text__16">Sonia Medrano</h5>
                <p className="text__14 text-[#737373]">Miami, Florida</p>
              </div>
            </div>
          </div>
          <div className="w-full p-4 ">
            <div className="flex items-center gap-2 mb-4">
              <img src="./../images/Star.svg" alt="" />
              <img src="./../images/Star.svg" alt="" />
              <img src="./../images/Star.svg" alt="" />
              <img src="./../images/Star.svg" alt="" />
              <img src="./../images/Star.svg" alt="" />
            </div>

            <p className="text__18 mb-3">
            Carlos is a kind and attentive individual; 
            he turned my chaotic travel plans into a seamless, stress-free adventure. 
            His proactive approach and attention to detail mean I can relax and truly enjoy my journey.
            </p>

            <div className="flex items-center gap-3">
              <img
                src="./../images/avatar.png"
                className="w-[48px] h-[48px] rounded-full object-cover"
                alt=""
              />
              <div className="">
                <h5 className="font-semibold text__16">Daniel Reyes</h5>
                <p className="text__14 text-[#737373]">Bogotá, Colombia</p>
              </div>
            </div>
          </div>
          <div className="w-full p-4 ">
            <div className="flex items-center gap-2 mb-4">
              <img src="./../images/Star.svg" alt="" />
              <img src="./../images/Star.svg" alt="" />
              <img src="./../images/Star.svg" alt="" />
              <img src="./../images/Star.svg" alt="" />
              <img src="./../images/Star.svg" alt="" />
            </div>

            <p className="text__18 mb-3">
            Every time I travel, Carlos is my go-to expert. 
            From crafting a perfect itinerary to offering round-the-clock support, he makes every trip unforgettable.
            </p>

            <div className="flex items-center gap-3">
              <img
                src="./../images/avatar.png"
                className="w-[48px] h-[48px] rounded-full object-cover"
                alt=""
              />
              <div className="">
                <h5 className="font-semibold text__16">Isabela Moreno</h5>
                <p className="text__14 text-[#737373]">Madrid, Spain</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};

export default CarouselTestimonial;
