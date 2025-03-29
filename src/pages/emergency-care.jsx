import React, { Fragment } from "react";
import { useHostname } from "@/Components/Provider/HostnameProvider";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "@/Components/Layout/Layout";
import SectionDownload from "@/Components/Section/SectionDownload";

const EmergencyCare = () => {
  const originalUrl = useHostname();

  return (
    <Fragment>
      <Layout title="Emergency Care" description="Emergency Care Desc">
        <section className="relative overflow-hidden bg-MDarkgreen">
          <img
            src={originalUrl + "/images/Group 2.png"}
            className="absolute left-0 top-0 w-full h-full"
            alt=""
          />
          <Container className="relative z-[1]">
            <div className="text-white py-[60px] text-center">
              <dv className="text__14 font-medium inline-block text-MgreenSecond text-center px-6 py-2 rounded-md bg-[rgba(255,255,255,0.08)] border !border-[rgba(255,255,255,0.12)]">
                Emergency Care
              </dv>
              <h2 className="font-medium text__48 mt-3 text-center">
                Emergency Care You Can Trust <br className="sm:block hidden" />{" "}
                – 24/7 Fast & Reliable Help.
              </h2>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <Row className="justify-between gap-y-6">
              <Col md={6} className="my-auto">
                <img src="./../images/asdas.png" alt="" />
              </Col>
              <Col md={5} className="my-auto ">
                <h2 className="font-medium text__48 mb-2">
                  Why Choose Our Emergency Care?
                </h2>
                <p className="text__18 text-[#737373] leading-relaxed mb-3">
                  Our emergency care unit is equipped with cutting-edge
                  technology and staffed by experienced specialists, ensuring
                  that you receive immediate, life-saving treatment.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Advanced Trauma Care – Equipped for critical injuries
                          & conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Board-Certified Specialists – Expert doctors, nurses &
                          paramedics.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#737373] leading-relaxed">
                          State-of-the-Art Facilities – Modern ER rooms &
                          life-saving equipment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Fast Triage & Treatment – Minimizing wait times for
                          critical patients.
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
                Precision Medicine for Every <br className="xs:block hidden" /> Medical Need.
              </h2>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  icon: "/images/ccAmbulance.svg",
                  title: "Trauma & Accident Care",
                  desc: "Immediate treatment for fractures, burns & wounds.",
                },
                {
                  icon: "/images/ccHeartbeat.svg",
                  title: "Heart Attack & Stroke",
                  desc: "Fast response to life-threatening conditions.",
                },
                {
                  icon: "/images/ccAsclepius.svg",
                  title: "Respiratory Emergencies",
                  desc: "Asthma attacks, severe pneumonia & breathing difficulties.",
                },
                {
                  icon: "/images/ccCricket.svg",
                  title: "Severe Allergic Reactions",
                  desc: "Anaphylaxis & other critical allergic responses.",
                },
                {
                  icon: "/images/ccSmileySad.svg",
                  title: "Head Injuries & Concussions",
                  desc: "Rapid intervention for critical cases.",
                },
                {
                  icon: "/images/ccThermometerHot.svg",
                  title: "High Fever & Seizures",
                  desc: "Urgent care for adults & children.",
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
            <div className="text-center mb-[2.5rem]">
              <h2 className="font-medium text__48 mb-2">
                When to Visit the ER vs. <br /> Urgent Care?
              </h2>
              <p className="text__18 text-[#737373] leading-relaxed mb-3">
                Emergency Room or Urgent Care? Know the Difference.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-[24px] bg-[#F9FAFB]  border-l !border-[#EAECF0]">
                <div className="mb-[32px] w-[64px] h-[64px] rounded-md bg-white border !border-[#EAECF0] flex items-center justify-center relative">
                  <div className="absolute w-[1px] h-[64px] bg-[#007660] top-0 -left-[25px]"></div>
                  <img src={originalUrl + "/images/ddHospital.svg"} alt="" />
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#171717] leading-relaxed">
                          Chest pain or difficulty breathing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#171717] leading-relaxed">
                          Sudden weakness, numbness, or confusion.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#171717] leading-relaxed">
                          Severe bleeding or head trauma.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#171717] leading-relaxed">
                          Major fractures or broken bones.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-[24px] bg-[#F9FAFB]  border-l !border-[#EAECF0]">
                <div className="mb-[32px] w-[64px] h-[64px] rounded-md bg-white border !border-[#EAECF0] flex items-center justify-center relative">
                  <div className="absolute w-[1px] h-[64px] bg-[#007660] top-0 -left-[25px]"></div>
                  <img src={originalUrl + "/images/ddStethoscope.svg"} alt="" />
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#171717] leading-relaxed">
                          Minor cuts or burns.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#171717] leading-relaxed">
                          Mild to moderate flu symptoms.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#171717] leading-relaxed">
                          Ear infections or sore throat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#171717] leading-relaxed">
                          Sprains or minor fractures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <SectionDownload
          title={`Emergency Care Without  <br class="xs:block hidden" /> Financial Stress.`}
          desc={`We accept most insurance plans and offer transparent pricing for all <br class="xs:block hidden" /> emergency services. Our financial counselors are available to assist <br class="xs:block hidden" /> you with any billing concerns.`}
          btnTitle="Download the App"
        />
      </Layout>
    </Fragment>
  );
};

export default EmergencyCare;
