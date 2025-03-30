import React, { Fragment } from "react";
import { useHostname } from "@/Components/Provider/HostnameProvider";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "@/Components/Layout/Layout";
import SecData from "@/Components/Section/SecData";
import SecValues from "@/Components/Section/SecValues";
import SectionDownload from "@/Components/Section/SectionDownload";

const About = () => {
  const originalUrl = useHostname();

  const dataUser = [
    {
      img: "./../images/im (1).png",
      name: "Dr. John Smith",
      job: "Cardiologist",
      detail:
        "Dr. John Smith is a highly skilled cardiologist with 20+years of experience.",
    },
    {
      img: "./../images/im (2).png",
      name: "Dr. Emily Johnson",
      job: "Pediatrician",
      detail:
        "Dr. Emily Johnson is a compassionate pediatrician dedicated to providing quality care for children.",
    },
    {
      img: "./../images/im (3).png",
      name: "Dr. Michael Davis",
      job: "Surgeon",
      detail:
        "Dr. Michael Davis is a skilled surgeon specializing in minimally invasive procedures.",
    },
    {
      img: "./../images/im (4).png",
      name: "Dr. Sarah Thompson",
      job: "Dermatologist",
      detail:
        "Dr. Sarah Thompson is a renowned dermatologist known for her expertise in skin care.",
    },
    {
      img: "./../images/im (5).png",
      name: "Dr. Jennifer Lee",
      job: "Dermatologist",
      detail:
        "Dr. Jennifer Lee is a renowned dermatologist known for her expertise in skin care.",
    },
    {
      img: "./../images/im (6).png",
      name: "Dr. David Wilson",
      job: "Family Physician",
      detail:
        "Dr. John Smith is a highly skilled cardiologist with 20+years of experience.",
    },
  ];
  return (
    <Fragment>
      <Layout title="About" description="About Desc">
        <section className="relative overflow-hidden bg-MDarkgreen">
          <img
            src={originalUrl + "/images/Group 2.png"}
            className="absolute left-0 top-0 w-full h-full"
            alt=""
          />
          <Container className="relative z-[1]">
            <div className="text-white py-[60px] text-center">
              <dv className="text__14 font-medium inline-block text-MgreenSecond text-center px-6 py-2 rounded-md bg-[rgba(255,255,255,0.08)] border !border-[rgba(255,255,255,0.12)]">
                About Me
              </dv>
              <h2 className="font-medium text__48 mt-3 text-center">
                Get to know{" "}
                <br className="sm:block hidden" /> your travel agent
              </h2>
            </div>
          </Container>
        </section>

        <SecData />

        <SecValues />

        
        { /*<section>
          <Container>
            <div className="text-center mb-[2rem]">
              <h5 className="font-medium text__48 mb-2">
                Meet our expert team
              </h5>
              <p className="text__16 text-Msecondary leading-relaxed">
                Our team consists of dedicated healthcare professionals, medical
                writers, and technology experts <br className="lg:block hidden" /> who work tirelessly to
                create and curate trustworthy and evidence-based content.
              </p>
            </div>

            <Row className="justify-center">
              <Col lg={10}>
                <Row className="gap-y-6">
                  {dataUser.map((obj) => {
                    return (
                      <Col sm={6} md={4} className="text-center">
                        <img
                          src={obj.img}
                          className="w-[100px] lg:w-[145px] h-[100px] lg:h-[145px] rounded-full object-cover mx-auto mb-3"
                          alt=""
                        />
                        <h4 className="text__18 font-semibold">{obj.name}</h4>
                        <p className="text__14 text-Msecondary mb-3">
                          {obj.job}
                        </p>
                        <p className="text__14">{obj.detail}</p>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Container>
        </section> */}

        <section>
          <Container>
            <div className="text-center mb-[2rem]">
              <h5 className="font-medium text__48 ">Our investors</h5>
            </div>
            <div className="overflow-auto w-full no-scrollbar">
              <div className="flex justify-center items-center gap-4 lg:gap-8 w-full">
                <img
                  src="./../images/sa (1).png"
                  className="lg:w-auto w-[150px]"
                  alt=""
                />
                <img
                  src="./../images/sa (2).png"
                  className="lg:w-auto w-[150px]"
                  alt=""
                />
                <img
                  src="./../images/sa (3).png"
                  className="lg:w-auto w-[150px]"
                  alt=""
                />
                <img
                  src="./../images/sa (4).png"
                  className="lg:w-auto w-[150px]"
                  alt=""
                />
                <img
                  src="./../images/sa (5).png"
                  className="lg:w-auto w-[150px]"
                  alt=""
                />
              </div>
            </div>
          </Container>
        </section>

        <SectionDownload title="We're hiring!" desc={`Join our team of healthcare professionals and make a
                <br class="ss:block hidden" /> difference.`} btnTitle=" Join Now" />
      </Layout>
    </Fragment>
  );
};

export default About;
