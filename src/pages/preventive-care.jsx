import React, { Fragment } from "react";
import { useHostname } from "@/Components/Provider/HostnameProvider";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "@/Components/Layout/Layout";
import SectionFaq from "@/Components/Section/SectionFaq";
import SectionDownload from "@/Components/Section/SectionDownload";

const PreventiveCare = () => {
  const originalUrl = useHostname();

  return (
    <Fragment>
      <Layout title="Preventive Care" description="Preventive Care Desc">
        <section className="relative overflow-hidden bg-MDarkgreen">
          <img
            src={originalUrl + "/images/Group 2.png"}
            className="absolute left-0 top-0 w-full h-full"
            alt=""
          />
          <Container className="relative z-[1]">
            <div className="text-white py-[60px] text-center">
              <dv className="text__14 font-medium inline-block text-MgreenSecond text-center px-6 py-2 rounded-md bg-[rgba(255,255,255,0.08)] border !border-[rgba(255,255,255,0.12)]">
                Preventive care
              </dv>
              <h2 className="font-medium text__48 mt-3 text-center">
                Stay Healthy, Stay Ahead – <br className="sm:block hidden" />{" "}
                Preventive Care for a <br className="sm:block hidden" /> Better
                Life.
              </h2>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <Row className="justify-between gap-y-6">
              <Col md={5} className="my-auto md:!order-1 order-2">
                <h2 className="font-medium text__48 mb-2">
                  Why Preventive Care Matters?
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
                          Early Detection - Catch diseases before they progress.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Lower Medical Costs - Prevent expensive treatments.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Improved Quality of Life - Stay active and healthy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Personalized Health Plans - Tailored recommendations
                          for your needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} className="my-auto order-1 md:!order-2">
                <img src="./../images/dsaads.png" alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <div className="text-center mb-[2.5rem]">
              <h2 className="font-medium text__48 mb-2">
                Our Preventive Care Services
              </h2>
              <p className="text__18 text-[#737373] leading-relaxed mb-3">
                Prevention is Better than Cure – Take Charge of Your Health
                Today
              </p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  icon: "/images/aaStethoscope.svg",
                  title: "Annual Health Screenings",
                  desc: "Blood tests, cholesterol check",
                },
                {
                  icon: "/images/aaSyringe.svg",
                  title: "Vaccinations & Immunizations",
                  desc: "Flu shots, HPV vaccine, and boosters",
                },
                {
                  icon: "/images/aaBarbell.svg",
                  title: "Genetic & Risk Assessments",
                  desc: "Expert guidance for a healthier life",
                },
                {
                  icon: "/images/aaDna.svg",
                  title: "Heart Health Monitoring",
                  desc: "Blood pressure & risk evaluation",
                },
                {
                  icon: "/images/aaHeartbeat.svg",
                  title: "Lifestyle & Nutrition Counseling",
                  desc: "Identify hereditary health risks",
                },
                {
                  icon: "/images/aaBrain.svg",
                  title: "Mental Health Screening",
                  desc: "Early intervention for stress & anxiety",
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
              <Col md={6} className="my-auto order-1">
                <img src="./../images/sadas.png" alt="" />
              </Col>
              <Col md={5} className="my-auto order-2">
                <h2 className="font-medium text__48 mb-2">
                  Who Should Get Preventive Care?
                </h2>
                <p className="text__18 text-[#737373] leading-relaxed mb-3">
                  Preventive care is for everyone – regardless of age or current
                  health status. Regular check-ups help you stay ahead of
                  potential health issues.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <h5 className="font-medium text__20 mt-1 mb-2">
                          Children & Teens
                        </h5>
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Vaccinations, growth monitoring, and early screenings.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <h5 className="font-medium text__20 mt-1 mb-2">
                          Adults
                        </h5>
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Annual check-ups, heart health monitoring, and
                          lifestyle guidance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start gap-3 ">
                      <img src="./../images/icon.svg" alt="" />

                      <div className="">
                        <h5 className="font-medium text__20 mt-1 mb-2">
                          Seniors
                        </h5>
                        <p className="text__18 text-[#737373] leading-relaxed">
                          Bone density tests, cognitive health checks, and
                          chronic disease prevention.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[2rem]">
                  <a
                    href="#!"
                    className="inline-block font-medium text__16 text-white bg-Mgreen px-[1.5rem] rounded-[8px] py-3 border !border-[rgba(0,118,96,0.2)]"
                  >
                    <div className="flex items-center gap-2">
                      <span>Get Started</span>
                      <img src={originalUrl + "/images/sads.svg"} alt="" />
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <SectionFaq count={3} btnStatus={true} />

        <SectionDownload
          title={`Take the First Step Towards  <br class="xs:block hidden" /> a Healthier Future.`}
          desc={`Booking your preventive check-up is easy. Choose your preferred doctor, select a <br class="xs:block hidden" /> date, and confirm your appointment – all in just a few clicks`}
          btnTitle="Download the App"
        />
      </Layout>
    </Fragment>
  );
};

export default PreventiveCare;
