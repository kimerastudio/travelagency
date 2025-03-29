import React, { Fragment, useEffect } from "react";
import { Container } from "react-bootstrap";
import CarouselTestimonial from "../Carousel/CarouselTestimonial";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionTestimonial = ({ enableAOS = false }) => {
  useEffect(() => {
    if (enableAOS) {
      // Inisialisasi AOS hanya jika enableAOS bernilai true
      AOS.init({
        once: true,
        duration: 500,
      });
    }
  }, [enableAOS]);
  return (
    <Fragment>
      <section>
        <Container>
          <div className="mb-[3rem]">
            <h2
              data-aos={enableAOS ? "fade-up" : ""}
              data-aos-delay={enableAOS ? "100" : ""}
              className="font-medium text__48 mb-2 text-center"
            >
              What our patients say
            </h2>
            <p
              data-aos={enableAOS ? "fade-up" : ""}
              data-aos-delay={enableAOS ? "200" : ""}
              className="text__18 text-Msecondary text-center"
            >
              Read testimonials from our satisfied patients
            </p>
          </div>

          <CarouselTestimonial enableAOS={true} />
        </Container>
      </section>
    </Fragment>
  );
};

export default SectionTestimonial;
