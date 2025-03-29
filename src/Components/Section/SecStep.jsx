import React, { Fragment, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const SecStep = ({
  title = `I am with you  <br class="md:block hidden" /> every step of the way`,
  desc = `My service goes far beyond booking your flights and hotels.
            <br class="md:block hidden" />
             I’m always just a click away—ready to ensure your journey is seamless and stress-free, from start to finish.`,
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
                  <h5 className="font-medium text__20 mb-2">Discover Your Perfect Deal
                  </h5>
                  <p className="text-[14px] leading-relaxed text-[#737373]">
                  I leverage industry expertise and exclusive partnerships to secure the best deals tailored to your travel needs.
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
                  <h5 className="font-medium text__20 mb-2">Craft a Tailored Itinerary</h5>
                  <p className="text-[14px] leading-relaxed text-[#737373]">
                  Together, we design a personalized travel plan that captures your interests and highlights must-see attractions and unique experiences.
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
                  <h5 className="font-medium text__20 mb-2">Seamless Booking</h5>
                  <p className="text-[14px] leading-relaxed text-[#737373]">
                  I handle all reservations and logistics, ensuring every detail is organized and your trip is hassle-free from the moment you book.
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
                  <h5 className="font-medium text__20 mb-2">Continuous Support</h5>
                  <p className="text-[14px] leading-relaxed text-[#737373]">
                  My services don't end once your trip begins.
                   I remain available to assist with any questions 
                   or unexpected situations that may arise during your travels, providing peace of mind throughout your journey.
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
