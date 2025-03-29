import React, { Fragment } from "react";
import { useHostname } from "@/Components/Provider/HostnameProvider";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "@/Components/Layout/Layout";
import SectionFaq from "@/Components/Section/SectionFaq";
import SectionDownload from "@/Components/Section/SectionDownload";
import SecStep from "@/Components/Section/SecStep";

const SpecializedTreatments = () => {
  const originalUrl = useHostname();

  return (
    <Fragment>
      <Layout
        title="Specialized Treatments"
        description="Specialized Treatments Desc"
      >
        <section className="relative overflow-hidden bg-MDarkgreen">
          <img
            src={originalUrl + "/images/Group 2.png"}
            className="absolute left-0 top-0 w-full h-full"
            alt=""
          />
          <Container className="relative z-[1]">
            <div className="text-white py-[60px] text-center">
              <dv className="text__14 font-medium inline-block text-MgreenSecond text-center px-6 py-2 rounded-md bg-[rgba(255,255,255,0.08)] border !border-[rgba(255,255,255,0.12)]">
                Specialized Treatments
              </dv>
              <h2 className="font-medium text__48 mt-3 text-center">
                Expert Care for Complex <br className="sm:block hidden" />{" "}
                Conditions.
              </h2>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <Row className="justify-between gap-y-6">
              <Col md={6} className="my-auto">
                <img src="./../images/sad.png" alt="" />
              </Col>
              <Col md={5} className="my-auto ">
                <h2 className="font-medium text__48 mb-2">
                  Advanced Medicine, Personalized for You.
                </h2>
                <p className="text__18 text-[#737373] leading-relaxed mb-3">
                  Prevention is Better than Cure – Take Charge of Your Health
                  Today
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#737373] leading-relaxed">
                          State-of-the-Art Technology - Highly trained
                          professionals in specific medical fields.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Personalized Treatment Plans - Care tailored to your
                          condition.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Improved Quality of Life - Care tailored to your
                          condition.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Comprehensive Support - From diagnosis to
                          rehabilitation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <div className="text-center mb-[2.5rem]">
              <h2 className="font-medium text__48 mb-2">
                Precision Medicine for Every <br /> Medical Need.
              </h2>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  icon: "/images/bbHandHeart.svg",
                  title: "Cardiovascular Care",
                  desc: "Heart disease management, minimally invasive procedures & cardiac rehabilitation.",
                },
                {
                  icon: "/images/bbBrain.svg",
                  title: "Cardiovascular Care",
                  desc: "Brain, spine, and nervous system treatments.",
                },
                {
                  icon: "/images/bbBone.svg",
                  title: "Ophthalmology",
                  desc: "Laser eye surgery, cataract removal & vision correction.",
                },
                {
                  icon: "/images/bbEye.svg",
                  title: "Regenerative Medicine",
                  desc: "Stem cell therapy, gene-based treatments & personalized medicine.",
                },
                {
                  icon: "/images/bbDna.svg",
                  title: "Orthopedic Surgery",
                  desc: "Joint replacements, sports injuries & rehabilitation therapy.",
                },
                {
                  icon: "/images/bbTooth.svg",
                  title: "Dental Care",
                  desc: "Maxillofacial surgery, dental implants & aesthetic dentistry.",
                },
              ].map((obj) => {
                return (
                  <div className="p-[24px] border-l !border-[#EAECF0]">
                    <div className="mb-[32px] w-[64px] h-[64px] rounded-md bg-[#F9FAFB] flex items-center justify-center relative">
                      <div className="absolute w-[1px] h-[64px] bg-[#007660] top-0 -left-[25px]"></div>
                      <img src={originalUrl + obj.icon} alt="" />
                    </div>
                    <h5 className="font-medium text__24 mb-1">{obj.title}</h5>
                    <p className="text__18 text-[#737373]">{obj.desc}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <Row className="justify-between gap-y-6">
              <Col md={5} className="my-auto md:!order-1 order-2">
                <h2 className="font-medium text__48 mb-2">
                  Who Can Benefit from Specialized Treatments?
                </h2>
                <p className="text__18 text-[#737373] leading-relaxed mb-3">
                  Whether you need a second opinion, a highly specialized
                  procedure, or ongoing management of a chronic illness, our
                  expert team is here to help.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <h5 className="font-medium text__20 mt-1 mb-2">
                          Patients with Complex Conditions
                        </h5>
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Customized care for unique health challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <h5 className="font-medium text__20 mt-1 mb-2">
                          Those in Need of Surgery
                        </h5>
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Minimally invasive & robotic-assisted procedures.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <h5 className="font-medium text__20 mt-1 mb-2">
                          Patients Seeking Advanced Therapies
                        </h5>
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Cutting-edge treatments for difficult cases.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <h5 className="font-medium text__20 mt-1 mb-2">
                          Elderly Patients
                        </h5>
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Specialized geriatric care & mobility support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} className="my-auto order-1 md:!order-2">
                <img src="./../images/fdgcgdf.png" alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <SectionFaq count={3} btnStatus={true} />

        <SecStep title="How to Get Started?" desc="Start Your Journey to Better Health." />
        
      </Layout>
    </Fragment>
  );
};

export default SpecializedTreatments;
