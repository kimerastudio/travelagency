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
      title: "How do I schedule an appointment?",
      desc: `To schedule an appointment, please contact our office during business hours. Our friendly staff will assist you in finding a convenient time.`,
    },
    {
      title: "What insurance plans do you accept?",
      desc: `To schedule an appointment, please contact our office during business hours. Our friendly staff will assist you in finding a convenient time.`,
    },
    {
      title: "What procedures do you offer?",
      desc: `To schedule an appointment, please contact our office during business hours. Our friendly staff will assist you in finding a convenient time.`,
    },
    {
      title: "How can I prepare for a procedure?",
      desc: `To schedule an appointment, please contact our office during business hours. Our friendly staff will assist you in finding a convenient time.`,
    },
    {
      title: "What are the risks involved?",
      desc: `To schedule an appointment, please contact our office during business hours. Our friendly staff will assist you in finding a convenient time.`,
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
              FAQs
            </h2>
            <p
              data-aos={enableAOS ? "fade-up" : ""}
              data-aos-delay={enableAOS ? "200" : ""}
              className="text__18 text-Msecondary text-center"
            >
              Find answers to common questions about our services,{" "}
              <br className="xs:block hidden" /> insurance, and procedures.
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
