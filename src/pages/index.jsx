import React, { Fragment, useEffect } from "react";
import Layout from "@/Components/Layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import SectionFaq from "@/Components/Section/SectionFaq";
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
      <Layout enableAOS={true}>
        <section>
          <Container>
            <Row className="gap-y-6">
              <Col className="my-auto" xl={9}>
                <h1
                  data-aos="fade-right"
                  data-aos-delay="200"
                  className="font-medium text__64 mb-2"
                >
                  Transforming healthcare with cutting-edge solutions
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="text__18 text-Msecondary"
                >
                  At [Company Name], we are committed to revolutionizing the
                  healthcare industry by <br className="lg:block hidden" />{" "}
                  providing cutting-edge technology and exceptional patient
                  care.
                </p>
              </Col>
              <Col className="my-auto xl:text-right" xl={3}>
                <a
                  data-aos="fade-left"
                  data-aos-delay="400"
                  href="#!"
                  className="inline-block px-4 py-3 rounded-[12px] bg-Mgreen text-white font-medium text__16"
                >
                  <div className="flex gap-2">
                    Download the App
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
              Comprehensive healthcare services{" "}
              <br className="md:block hidden" /> for your well-being
            </h2>
            <p
              data-aos="fade-down"
              data-aos-delay="200"
              className="text__18 text-Msecondary text-center"
            >
              From preventive care to specialized treatments, our team is
              dedicated to providing high-
              <br className="md:block hidden" />
              quality care in a comfortable and compassionate environment.
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
                        <img src="./../images/FirstAidKit.svg" alt="" />
                      </div>

                      <div className="mt-[2rem]">
                        <h5 className="font-medium text__24 mb-2">
                          Preventive care
                        </h5>
                        <p className="text__18 text-[#737373]">
                          Stay proactive and maintain your health with our
                          preventive care services.
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
                        <img src="./../images/Heartbeat.svg" alt="" />
                      </div>

                      <div className="mt-[2rem]">
                        <h5 className="font-medium text__24 mb-2">
                          Specialized treatments
                        </h5>
                        <p className="text__18 text-[#737373]">
                          Receive personalized care and treatment for your
                          specific health concerns.
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
                        <img src="./../images/FirstAid.svg" alt="" />
                      </div>

                      <div className="mt-[2rem]">
                        <h5 className="font-medium text__24 mb-2">
                          Emergency care
                        </h5>
                        <p className="text__18 text-[#737373]">
                          Receive personalized care and treatment for your
                          specific health concerns.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row className="justify-between gap-y-6">
              <Col
                data-aos="fade-right"
                data-aos-delay="200"
                md={5}
                className="my-auto md:!order-1 order-2"
              >
                <h2 className="font-medium text__48 mb-2">
                  Personalized care for your health needs
                </h2>
                <p className="text__18 text-[#737373] leading-relaxed mb-3">
                  At our healthcare provider, we offer personalized care,
                  utilizing advanced technology and a team of experienced staff
                  to ensure your health needs are met.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <h5 className="font-medium text__20 mt-1 mb-2">
                          Preventive care
                        </h5>
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Stay proactive and maintain your health with our
                          preventive care services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <h5 className="font-medium text__20 mt-1 mb-2">
                          Technology
                        </h5>
                        <p className="text__18 text-[#737373] leading-relaxed">
                          We utilize advanced technology to enhance the accuracy
                          and efficiency of our treatments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[2rem]">
                  <a
                    href="#!"
                    className="inline-block font-medium text__16 text-Mgreen px-[1.5rem] rounded-[8px] py-3 border !border-[rgba(0,118,96,0.2)]"
                  >
                    <div className="flex items-center gap-2">
                      <span>Learn More</span>
                      <img src="./../images/sdsads.svg" alt="" />
                    </div>
                  </a>
                </div>
              </Col>
              <Col
                data-aos="fade-left"
                data-aos-delay="200"
                md={6}
                className="my-auto order-1 md:!order-2"
              >
                <img src="./../images/Vector.png" alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row className="justify-between gap-y-6">
              <Col
                data-aos="fade-right"
                data-aos-delay="200"
                md={6}
                className="my-auto"
              >
                <img src="./../images/sadasda.png" alt="" />
              </Col>
              <Col
                data-aos="fade-left"
                data-aos-delay="200"
                md={5}
                className="my-auto"
              >
                <h2 className="font-medium text__48 mb-2">
                  Revolutionizing healthcare with state-of-the-art solutions
                </h2>
                <p className="text__18 text-[#737373] leading-relaxed">
                  At our company, we take a unique approach to healthcare
                  services, focusing on innovation and patient-centered care.
                  Our team of experts is dedicated to revolutionizing the way
                  healthcare is delivered, ensuring that every patient receives
                  the best possible care.
                </p>

                <div className="mt-[2rem]">
                  <a
                    href="#!"
                    className="inline-block font-medium text__16 text-Mgreen px-[1.5rem] rounded-[8px] py-3 border !border-[rgba(0,118,96,0.2)]"
                  >
                    <div className="flex items-center gap-2">
                      <span>Learn More</span>
                      <img src="./../images/sdsads.svg" alt="" />
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <SecStep enableAOS={true} />

        <SectionTestimonial enableAOS={true} />

        <SectionFaq enableAOS={true} />

        <SectionDownload enableAOS={true} />
      </Layout>
    </Fragment>
  );
};

export default Index;
