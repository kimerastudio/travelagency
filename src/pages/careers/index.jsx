import React, { Fragment } from "react";
import Layout from "@/Components/Layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { useHostname } from "@/Components/Provider/HostnameProvider";
import SecData from "@/Components/Section/SecData";
import SecValues from "@/Components/Section/SecValues";
import { ArrowRightSvg } from "@/Components/svg/Svg";
import SectionDownload from "@/Components/Section/SectionDownload";
import Link from "next/link";

const Index = () => {
  const originalUrl = useHostname();

  const Jobs = [
    {
      title: "Sr. Software Engineer",
      tag: ["Engineering", "Remote"],
      link: "/careers/detail/software-engineer",
    },
    {
      title: "Senior Security Operations Engineer",
      tag: ["Engineering", "Remote"],
      link: "/careers/detail/software-engineer",
    },
    {
      title: "Product Marketing Director",
      tag: ["Marketing", "Remote"],
      link: "/careers/detail/software-engineer",
    },
    {
      title: "Software Engineer - Data",
      tag: ["Engineering", "Remote"],
      link: "/careers/detail/software-engineer",
    },
    {
      title: "Senior Healthcare Data Scientist",
      tag: ["Data Science", "Remote"],
      link: "/careers/detail/software-engineer",
    },
    {
      title: "Strategy & Operations Manager",
      tag: ["Office of the CEO", "Remote"],
      link: "/careers/detail/software-engineer",
    },
    {
      title: "Sr. UI/UX Web Designer",
      tag: ["Designer", "Remote"],
      link: "/careers/detail/software-engineer",
    },
    {
      title: "Senior Software Engineer (Python)",
      tag: ["Engineering", "Remote"],
      link: "/careers/detail/software-engineer",
    },
  ];
  return (
    <Fragment>
      <Layout title="Careers" description="Careers Desc">
        <section className="relative overflow-hidden bg-MDarkgreen">
          <img
            src={originalUrl + "/images/Group 2.png"}
            className="absolute left-0 top-0 w-full h-full"
            alt=""
          />
          <Container className="relative z-[1]">
            <div className="text-white py-[60px] text-center">
              <dv className="text__14 font-medium inline-block text-MgreenSecond text-center px-6 py-2 rounded-md bg-[rgba(255,255,255,0.08)] border !border-[rgba(255,255,255,0.12)]">
                Careers
              </dv>
              <h2 className="font-medium text__48 mt-3 text-center">
                Let’s transform health care together
              </h2>

              <div className="mt-[2.5rem] text-center">
                <a
                  href="#!"
                  className="inline-block px-4 py-3 rounded-[12px] bg-[rgba(255,255,255,0.08)] text-white border !border-[rgba(255,255,255,0.12)] font-medium text__16"
                >
                  <div className="flex gap-2">
                    View open roles
                    <img src="/images/arrow.svg" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </Container>
        </section>

        <SecData />

        <SecValues />

        <section>
          <Container>
            <h2 className="font-medium text__48 mb-[2.5rem] text-center">
              Work with us
            </h2>

            <Row className="gap-y-4">
              <Col md={6}>
                <div className="flex flex-wrap gap-4">
                  {Jobs.map((obj, id) => {
                    if (id < Jobs.length / 2) {
                      return (
                        <>
                          <div className="w-full">
                            <div className="flex items-center justify-between">
                              <Link
                                href={obj.link}
                                className="font-medium text__20"
                              >
                                {obj.title}
                              </Link>
                              <Link
                                href={obj.link}
                                className="text-Mgreen font-medium text__16 md:inline-block hidden"
                              >
                                <div className="flex gap-2">
                                  See Details
                                  <ArrowRightSvg className="w-[16px]" />
                                </div>
                              </Link>
                            </div>

                            <div className="mt-2 flex items-center gap-2 text__14">
                              {obj.tag.map((itm, idx) => {
                                if (idx == 0) {
                                  return (
                                    <p className="text-Msecondary">{itm}</p>
                                  );
                                } else {
                                  return (
                                    <Fragment>
                                      <div className="w-[3px] h-[3px] bg-Msecondary rounded-full"></div>
                                      <p className="text-Msecondary">{itm}</p>
                                    </Fragment>
                                  );
                                }
                              })}
                            </div>
                          </div>

                          <div className="w-full h-[1px] bg-[#EAECF0]"></div>
                        </>
                      );
                    }
                  })}
                </div>
              </Col>
              <Col md={6}>
              <div className="flex flex-wrap gap-4">
                  {Jobs.map((obj, id) => {
                    if (id >= Jobs.length / 2) {
                      return (
                        <>
                          <div className="w-full">
                            <div className="flex items-center justify-between">
                              <Link
                                href={obj.link}
                                className="font-medium text__20"
                              >
                                {obj.title}
                              </Link>
                              <Link
                                href={obj.link}
                                className="text-Mgreen font-medium text__16 md:inline-block hidden"
                              >
                                <div className="flex gap-2">
                                  See Details
                                  <ArrowRightSvg className="w-[16px]" />
                                </div>
                              </Link>
                            </div>

                            <div className="mt-2 flex items-center gap-2 text__14">
                              {obj.tag.map((itm, idx) => {
                                if (idx == 0) {
                                  return (
                                    <p className="text-Msecondary">{itm}</p>
                                  );
                                } else {
                                  return (
                                    <Fragment>
                                      <div className="w-[3px] h-[3px] bg-Msecondary rounded-full"></div>
                                      <p className="text-Msecondary">{itm}</p>
                                    </Fragment>
                                  );
                                }
                              })}
                            </div>
                          </div>

                          <div className="w-full h-[1px] bg-[#EAECF0]"></div>
                        </>
                      );
                    }
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <h2 className="font-medium text__48 mb-2 text-center">
              Perks & Benefits
            </h2>
            <p className="text__18 text-Msecondary text-center">
              From preventive care to specialized treatments, our team is
              dedicated to providing high
              <br className="md:block hidden" />
              -quality care in a comfortable and compassionate environment.
            </p>

            <Row className="justify-center">
              <Col md={11}>
                <Row className="mt-[2rem] gap-y-6">
                  <Col md={4} className="relative flex-fill">
                    <div className="absolute h-full w-[1px] left-0 top-0">
                      <div className="relative w-full h-full bg-[#EAECF0]">
                        <div className="absolute w-full h-[64px] bg-[#007660] top-4"></div>
                      </div>
                    </div>

                    <div className="pl-4">
                      <div className="mt-3 w-[64px] h-[64px] bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center">
                        <img src="./../images/sas (1).svg" alt="" />
                      </div>

                      <div className="mt-[2rem]">
                        <h5 className="font-medium text__24 mb-2">
                          Flexible work arrangements
                        </h5>
                        <p className="text__18 text-[#737373]">
                          Allowing remote work or compressed workweeks reduces
                          stress and improves work-life balance, leading to
                          better health.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className="relative flex-fill">
                    <div className="absolute h-full w-[1px] left-0 top-0">
                      <div className="relative w-full h-full bg-[#EAECF0]">
                        <div className="absolute w-full h-[64px] bg-[#007660] top-4"></div>
                      </div>
                    </div>

                    <div className="pl-4">
                      <div className="mt-3 w-[64px] h-[64px] bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center">
                        <img src="./../images/sas (3).svg" alt="" />
                      </div>

                      <div className="mt-[2rem]">
                        <h5 className="font-medium text__24 mb-2">
                          Paid time off for preventive care
                        </h5>
                        <p className="text__18 text-[#737373]">
                          Encourage employees to prioritize their health by
                          offering paid time off for checkups and screenings.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className="relative flex-fill">
                    <div className="absolute h-full w-[1px] left-0 top-0">
                      <div className="relative w-full h-full bg-[#EAECF0]">
                        <div className="absolute w-full h-[64px] bg-[#007660] top-4"></div>
                      </div>
                    </div>

                    <div className="pl-4">
                      <div className="mt-3 w-[64px] h-[64px] bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center">
                        <img src="./../images/sas (2).svg" alt="" />
                      </div>

                      <div className="mt-[2rem]">
                        <h5 className="font-medium text__24 mb-2">
                          Healthy on-the-go options
                        </h5>
                        <p className="text__18 text-[#737373]">
                          Stock the breakroom with healthy snacks and beverages,
                          or offer discounts on healthy meal delivery services.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <SectionDownload
          title="Create your free account"
          desc={``}
          btnTitle="Get Started"
        />
      </Layout>
    </Fragment>
  );
};

export default Index;
