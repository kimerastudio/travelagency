import React, { Fragment, useEffect } from "react";
import Layout from "@/Components/Layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import SectionDownload from "@/Components/Section/SectionDownload";
import SectionTestimonial from "@/Components/Section/SectionTestimonial";
import SecStep from "@/Components/Section/SecStep";
import useHostname from "@/Components/Provider/HostnameProvider";

import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  const originalUrl = useHostname();

  useEffect(() => {
    // Inisialisasi AOS hanya jika enableAOS bernilai true
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);
  return (
    <Fragment>
      <Layout enableAOS={true} hideFooter={true}>
        <section>
          <Container>
            <Row className="gap-y-6">
              <Col className="my-auto" xl={9}>
                <h1
                  data-aos="fade-right"
                  data-aos-delay="200"
                  className="font-medium text__64 mb-2"
                >
                  Your personal travel agent
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="text__18 text-Msecondary"
                >
                  Hello! I'm Carlos. I can help you transform your travel dreams 
                  into reality by providing personalized service and expert 
                  guidance—all conveniently through WhatsApp and with the help 
                  of my colleague Ignacio, who has worked with me for the past 28 years.
                </p>
              </Col>
              <Col className="my-auto xl:text-right" xl={3}>
                <a
                  data-aos="fade-left"
                  data-aos-delay="400"
                  href="https://wa.me/+13054489987"
                  className="inline-block px-4 py-3 rounded-[12px] bg-Mgreen text-white font-medium text__16"
                >
                  <div className="flex gap-2">
                    Chat on WhatsApp
                    <img src="/images/arrow.svg" alt="" />
                  </div>
                </a>
              </Col>
            </Row>

            <div className="mt-[3rem]" data-aos="fade-up" data-aos-delay="600">
              <div className="relative w-full rounded-[8px] overflow-hidden h-[300px] ss:h-[400px] lg:h-[627px]">
                <video
                  src={
                    originalUrl +
                    "/images/f32dedbf879434b6b03089703b6fed23e7ff84d3.mp4"
                  }
                  loop
                  autoPlay
                  playsInline
                  muted
                  className="absolute left-0 top-0 w-full h-full object-cover"
                ></video>

                <img
                  src={originalUrl + "/images/mockup.png"}
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[180px] ss:w-[250px] lg:w-auto"
                  alt=""
                />
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <h2
              data-aos="fade-down"
              data-aos-delay="100"
              className="font-medium text__48 mb-2 text-center"
            >
              Unlock the best travel deals{" "}
              <br className="md:block hidden" /> with me
            </h2>
            <p
              data-aos="fade-down"
              data-aos-delay="200"
              className="text__18 text-Msecondary text-center"
            >
              With years of experience, I specialize in uncovering unbeatable flight deals.
              <br className="md:block hidden" />
               I will navigate the complexities of travel for you.
            </p>

            <Row className="justify-center gap-y-6">
              <Col md={11}>
                <Row className="mt-[2rem] gap-y-4">
                  <Col
                    data-aos="fade-right"
                    data-aos-delay="800"
                    lg={4}
                    className="relative flex-fill"
                  >
                    <div className="absolute h-full w-[1px] left-0 top-0">
                      <div className="relative w-full h-full bg-[#EAECF0]">
                        <div className="absolute w-full h-[64px] bg-[#007660] top-4"></div>
                      </div>
                    </div>

                    <div className="pl-4">
                      <div className="mt-3 w-[64px] h-[64px] bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center">
                        <img src="./../images/island.svg" alt="" />
                      </div>

                      <div className="mt-[2rem]">
                        <h5 className="font-medium text__24 mb-2">
                          A true vacation
                        </h5>
                        <p className="text__18 text-[#737373]">
                        Sit back and relax. I will handle the annoying part of traveling so you can enjoy your adventure.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    data-aos="fade-right"
                    data-aos-delay="600"
                    lg={4}
                    className="relative flex-fill"
                  >
                    <div className="absolute h-full w-[1px] left-0 top-0">
                      <div className="relative w-full h-full bg-[#EAECF0]">
                        <div className="absolute w-full h-[64px] bg-[#007660] top-4"></div>
                      </div>
                    </div>
                    <div className="pl-4">
                      <div className="mt-3 w-[64px] h-[64px] bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center">
                        <img src="./../images/piggy-bank.svg" alt="" />
                      </div>

                      <div className="mt-[2rem]">
                        <h5 className="font-medium text__24 mb-2">
                          Huge savings
                        </h5>
                        <p className="text__18 text-[#737373]">
                        As a licensed travel agent I have access to exclusive discounts that I pass on to you.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    data-aos="fade-right"
                    data-aos-delay="400"
                    lg={4}
                    className="relative flex-fill"
                  >
                    <div className="absolute h-full w-[1px] left-0 top-0">
                      <div className="relative w-full h-full bg-[#EAECF0]">
                        <div className="absolute w-full h-[64px] bg-[#007660] top-4"></div>
                      </div>
                    </div>
                    <div className="pl-4">
                      <div className="mt-3 w-[64px] h-[64px] bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center">
                        <img src="./../images/user-circle-gear.svg" alt="" />
                      </div>

                      <div className="mt-[2rem]">
                        <h5 className="font-medium text__24 mb-2">
                        Personalized Service
                        </h5>
                        <p className="text__18 text-[#737373]">
                        I work with you in a way no travel app or platform can. I care about your travel experience.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <SecStep enableAOS={true} />

        <SectionTestimonial enableAOS={true} />

        <SectionDownload enableAOS={true} />
        
        <div className="w-full h-[40px] bg-[#091C1E]"></div>
      </Layout>
    </Fragment>
  );
};

export default Index;