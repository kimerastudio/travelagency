"use client";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionFaq = ({
  count = "all",
  btnStatus = false,
  btnTitle = "Contact Us for More Info",
  link = "/contact",
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

  const dataFaq = [
    {
      title: "Cruises",
      desc: `Experience the magic of cruising with expertly arranged itineraries and exclusive deals. I help you choose the right cruise that fits your preferences, ensuring a luxurious, entertaining, and worry-free journey at sea.`,
    },
    {
      title: "Vacation Packages",
      desc: `Let me create a seamless travel experience by bundling flights, hotels, tours, and more into one comprehensive vacation package. Enjoy the best value and a hassle-free trip with every detail carefully curated to suit your dream getaway.`,
    },
    {
      title: "Travel Insurance",
      desc: `Your safety and peace of mind are my priorities. I assist in selecting the most appropriate travel insurance coverage to protect you from unforeseen events, so you can travel confidently knowing you’re covered.`,
    },
    {
      title: "Tours and Excursions",
      desc: `Enhance your travel experience with curated tours and excursions that delve deep into the heart of your destination. I design personalized local experiences—from guided cultural tours to adventurous outings—that cater to your interests and passions.`,
    },
    {
      title: "Visa and Passport Assistance",
      desc: `Navigating international travel requirements can be daunting. I provide expert support with processing travel documents and visa applications, ensuring you have all the necessary paperwork in order for a smooth journey abroad.`,
    },
    {
      title: "Airport Transfers",
      desc: `Enjoy a stress-free start and finish to your trip with coordinated airport transfer services. Whether you need a shuttle, taxi, or private car, I arrange reliable transportation to seamlessly connect you between the airport and your destination.`,
    },
    {
      title: "Travel Itineraries and Concierge Services",
      desc: `From crafting bespoke itineraries to offering dedicated concierge services, I handle every detail of your journey. This means more time for you to relax and savor your travel experience, knowing that every aspect of your trip is expertly managed.`,
    },
    {
      title: "Corporate Travel Management",
      desc: `I specialize in organizing business travel that minimizes stress and maximizes productivity. From booking flights and accommodations to arranging meetings, conferences, and events, I ensure every detail is managed with professionalism and precision, so you can focus on what matters most.`,
    },
  ];

  const [ToogleFaq, setToogleFaq] = useState(0);

  const setToogleFaqWrap = (e) => {
    if (e === ToogleFaq) {
      setToogleFaq(-1);
    } else {
      setToogleFaq(e);
    }
  };
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
              Additional Services
            </h2>
            <p
              data-aos={enableAOS ? "fade-up" : ""}
              data-aos-delay={enableAOS ? "200" : ""}
              className="text__18 text-Msecondary text-center"
            >
              Here are some additional ways{" "}
              <br className="xs:block hidden" /> I can help with your traveling needs.
            </p>
          </div>

          <Row className="justify-center">
            <Col md={10}>
              <div className="flex flex-wrap gap-3">
                {dataFaq.map((obj, i) => {
                  if (count == "all") {
                    return (
                      <Fragment>
                        <div
                          data-aos={enableAOS ? "fade-up" : ""}
                          data-aos-delay={enableAOS ? 300 + (50 * i) : ""}
                          className="bg-white rounded-[20px] overflow-hidden w-full"
                        >
                          <div
                            className="py-4 flex gap-4 justify-between items-center cursor-pointer  "
                            onClick={() => setToogleFaqWrap(i)}
                          >
                            <h5 className="font-medium text__24">
                              {obj.title}
                            </h5>
                            <div
                              className={
                                "arrowPlus relative w-[24px] h-[24px] " +
                                (ToogleFaq === i ? "active" : "")
                              }
                            >
                              <span></span>
                              <span></span>
                            </div>
                          </div>

                          <div
                            className={
                              "transition-all duration-300 " +
                              (ToogleFaq === i
                                ? "block pb-4 max-h-screen"
                                : "overflow-hidden max-h-0")
                            }
                          >
                            <div
                              className="text__18"
                              dangerouslySetInnerHTML={{ __html: obj.desc }}
                            />
                          </div>
                        </div>
                      </Fragment>
                    );
                  } else if (i < count) {
                    return (
                      <Fragment>
                        <div className="bg-white rounded-[20px] overflow-hidden w-full">
                          <div
                            className="py-4 flex gap-4 justify-between items-center cursor-pointer  "
                            onClick={() => setToogleFaqWrap(i)}
                          >
                            <h5 className="font-medium text__24">
                              {obj.title}
                            </h5>
                            <div
                              className={
                                "arrowPlus relative w-[24px] h-[24px] " +
                                (ToogleFaq === i ? "active" : "")
                              }
                            >
                              <span></span>
                              <span></span>
                            </div>
                          </div>

                          <div
                            className={
                              "transition-all duration-300 " +
                              (ToogleFaq === i
                                ? "block pb-4 max-h-screen"
                                : "overflow-hidden max-h-0")
                            }
                          >
                            <div
                              className="text__18"
                              dangerouslySetInnerHTML={{ __html: obj.desc }}
                            />
                          </div>
                        </div>
                      </Fragment>
                    );
                  }
                })}
              </div>
            </Col>
          </Row>

          {btnStatus ? (
            <>
              <div className="text-center mt-[2.5rem]">
                <Link
                  href={link}
                  className="inline-block font-medium text__16 text-Mgreen px-[1.5rem] rounded-[8px] py-3 border !border-[rgba(0,118,96,0.2)]"
                >
                  <span>{btnTitle}</span>
                </Link>
              </div>
            </>
          ) : (
            ""
          )}
        </Container>
      </section>
    </Fragment>
  );
};

export default SectionFaq;
