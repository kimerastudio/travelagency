import React, { Fragment, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const SecStep = ({
  title = `Streamlined process for <br class="md:block hidden" /> accessing
            healthcare services`,
  desc = `From preventive care to specialized treatments, our team is
            dedicated to providing high-
            <br class="md:block hidden" />
            quality care in a comfortable and compassionate environment.`,
  enableAOS = false,
}) => {
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
          <h2
            data-aos={enableAOS ? "fade-up" : ""}
            data-aos-delay={enableAOS ? "100" : ""}
            className="font-medium text__48 mb-2 text-center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            data-aos={enableAOS ? "fade-up" : ""}
            data-aos-delay={enableAOS ? "200" : ""}
            className="text__18 text-Msecondary text-center"
            dangerouslySetInnerHTML={{ __html: desc }}
          />

          <Row className="mt-[3rem] gap-y-6">
            <Col
              data-aos={enableAOS ? "fade-right" : ""}
              data-aos-delay={enableAOS ? "1000" : ""}
              md={3}
              className="relative md:text-center"
            >
              <div className="absolute w-[1px] md:w-full h-full md:h-[1px] bg-[#EAECF0] left-[11%] xxs:left-[10.5%] xx:left-[9.5%] ss:left-[10%] xs:left-[8.5%] md:!left-1/2 top-[2rem]"></div>

              <div className="flex gap-3 md:block">
                <div className="w-[48px] ss:w-[64px] h-[48px] ss:h-[64px] flex-shrink-0 bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center mx-auto relative z-[1]">
                  <img
                    src="./../images/ica (1).svg"
                    className="ss:w-auto w-[32px]"
                    alt=""
                  />
                </div>

                <div className="md:mt-[2rem]">
                  <h5 className="font-medium text__20 mb-2">01</h5>
                  <p className="text-[14px] leading-relaxed text-[#737373]">
                    Create an account and provide your medical history and
                    insurance information.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              data-aos={enableAOS ? "fade-right" : ""}
              data-aos-delay={enableAOS ? "800" : ""}
              md={3}
              className="relative md:text-center"
            >
              <div className="absolute w-[1px] md:w-full h-full md:h-[1px] bg-[#EAECF0] left-[11%] xxs:left-[10.5%] xx:left-[9.5%] ss:left-[10%] xs:left-[8.5%] md:!left-1/2 top-[2rem]"></div>

              <div className="flex gap-3 md:block">
                <div className="w-[48px] ss:w-[64px] h-[48px] ss:h-[64px] flex-shrink-0 bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center mx-auto relative z-[1]">
                  <img
                    src="./../images/ica (4).svg"
                    className="ss:w-auto w-[32px]"
                    alt=""
                  />
                </div>

                <div className="md:mt-[2rem]">
                  <h5 className="font-medium text__20 mb-2">02</h5>
                  <p className="text-[14px] leading-relaxed text-[#737373]">
                    Browse through a curated list of healthcare providers and
                    services available to you.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              data-aos={enableAOS ? "fade-right" : ""}
              data-aos-delay={enableAOS ? "600" : ""}
              md={3}
              className="relative md:text-center"
            >
              <div className="absolute w-[1px] md:w-full h-full md:h-[1px] bg-[#EAECF0] left-[11%] xxs:left-[10.5%] xx:left-[9.5%] ss:left-[10%] xs:left-[8.5%] md:!left-1/2 top-[2rem]"></div>

              <div className="flex gap-3 md:block">
                <div className="w-[48px] ss:w-[64px] h-[48px] ss:h-[64px] flex-shrink-0 bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center mx-auto relative z-[1]">
                  <img
                    src="./../images/ica (3).svg"
                    className="ss:w-auto w-[32px]"
                    alt=""
                  />
                </div>

                <div className="md:mt-[2rem]">
                  <h5 className="font-medium text__20 mb-2">03</h5>
                  <p className="text-[14px] leading-relaxed text-[#737373]">
                    Book an appointment or request a telehealth consultation
                    with your chosen provider.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              data-aos={enableAOS ? "fade-right" : ""}
              data-aos-delay={enableAOS ? "400" : ""}
              md={3}
              className="relative md:text-center"
            >
              <div className="flex gap-3 md:block">
                <div className="w-[48px] ss:w-[64px] h-[48px] ss:h-[64px] flex-shrink-0 bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center mx-auto relative z-[1]">
                  <img
                    src="./../images/ica (2).svg"
                    className="ss:w-auto w-[32px]"
                    alt=""
                  />
                </div>

                <div className="md:mt-[2rem]">
                  <h5 className="font-medium text__20 mb-2">04</h5>
                  <p className="text-[14px] leading-relaxed text-[#737373]">
                    Receive treatment, whether in-person or through virtual
                    consultations, from top healthcare professionals.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <div
            data-aos={enableAOS ? "fade-up" : ""}
            data-aos-delay={enableAOS ? "1200" : ""}
            className="flex items-center justify-center mt-[3rem] gap-3"
          >
            <a
              href="#!"
              className="inline-block font-medium text__16 text-Mgreen px-[1.5rem] rounded-[8px] py-3 border !border-[rgba(0,118,96,0.2)]"
            >
              <span>Sign Up</span>
            </a>
            <a
              href="#!"
              className="inline-block font-medium text__16 text-Mgreen px-[1.5rem] rounded-[8px] py-3"
            >
              <div className="flex items-center gap-2">
                <span>Learn More</span>
                <img src="./../images/sdsads.svg" alt="" />
              </div>
            </a>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default SecStep;
