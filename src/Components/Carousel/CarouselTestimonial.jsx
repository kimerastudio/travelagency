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
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex items-center gap-3">
              <img
                src="./../images/avatar.png"
                className="w-[48px] h-[48px] rounded-full object-cover"
                alt=""
              />
              <div className="">
                <h5 className="font-semibold text__16">Jane Smith</h5>
                <p className="text__14 text-[#737373]">CTO, Company</p>
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
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex items-center gap-3">
              <img
                src="./../images/avatar.png"
                className="w-[48px] h-[48px] rounded-full object-cover"
                alt=""
              />
              <div className="">
                <h5 className="font-semibold text__16">Jane Smith</h5>
                <p className="text__14 text-[#737373]">CTO, Company</p>
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
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex items-center gap-3">
              <img
                src="./../images/avatar.png"
                className="w-[48px] h-[48px] rounded-full object-cover"
                alt=""
              />
              <div className="">
                <h5 className="font-semibold text__16">Jane Smith</h5>
                <p className="text__14 text-[#737373]">CTO, Company</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};

export default CarouselTestimonial;
