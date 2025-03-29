import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useHostname } from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import Link from "next/link";
import { LogoSvg } from "@/Components/svg/Svg";
import axios from "axios";

const Verification = () => {
  const originalUrl = useHostname();

  const [countryData, setCountryData] = useState([]);
  const [ToogleSelectRegion, setToogleSelectRegion] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const data = response.data.map((country) => ({
          value: country.cca2,
          label: country.name.common,
          codePhone: `+${country.ccn3}`,
          flag: country.flags.png,
        }));

        setSelectedCountry({
          value: response.data[0].cca2,
          label: response.data[0].name.common,
          codePhone: `+${response.data[0].ccn3}`,
          flag: response.data[0].flags.png,
        });
        setCountryData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, []);

  useEffect(() => {
    console.log(countryData);
  }, [countryData]);

  return (
    <Fragment>
      <Layout
        navbar={false}
        footer={false}
        title="Verification"
        description="Verification Desc"
        auth={true}
      >
        <div className="w-full min-h-dvh">
          <Row className="min-h-dvh">
            <Col md={6} className="relative">
              <img
                src={originalUrl + "/images/sadasd.png"}
                className="absolute w-full h-full left-0 top-0 object-cover"
                alt=""
              />
            </Col>
            <Col md={6}>
              <div className="relative min-h-dvh">
                <Container className="min-h-dvh w-full flex items-center justify-center">
                  <Row className="justify-center">
                    <Col md={11}>
                      <div className="w-full py-6 md:px-6 lg:px-10">
                        <div className="text-center mb-10">
                          <div className="flex items-center gap-2 mb-3 justify-center">
                            <LogoSvg classData={"w-[48px]"} />
                            <span className="font-medium text__18">
                              Healify
                            </span>
                          </div>
                          <h4 className="font-medium text__32 mb-2">
                            Verification
                          </h4>
                          <p className="text__16 text-Msecondary">
                            Enter your mobile number to receive an SMS
                            verification code
                          </p>
                        </div>

                        <Form.Group
                          className="mb-[1.5rem]"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="font-normal text__14 text-[#A3A3A3]">
                            Phone Number
                          </Form.Label>

                          <div className="px-3 border !border-[#EAECF0] rounded-[8px] flex items-center gap-2">
                            <div className="relative">
                              <div
                                className="flex items-center px-3 py-1 rounded-full bg-[#F9FAFB] cursor-pointer"
                                onClick={() =>
                                  setToogleSelectRegion(!ToogleSelectRegion)
                                }
                              >
                                <img
                                  src={selectedCountry?.flag}
                                  className="w-[20px] h-[20px] rounded-full object-cover"
                                  alt=""
                                />
                                <img src="./../images/dfgdfg.svg" alt="" />
                              </div>

                              <div
                                className={
                                  "absolute left-0 rounded-md w-[200px] p-3 bg-white shadow-[0px_30px_50px_#0000002e] flex items-start flex-wrap gap-3 max-h-[200px] overflow-auto transition-all duration-300 " +
                                  (ToogleSelectRegion
                                    ? "top-[2.3rem] opacity-100 pointer-events-auto"
                                    : "top-[4rem] opacity-0 pointer-events-none")
                                }
                              >
                                {countryData?.map((obj) => {
                                  return (
                                    <Fragment>
                                      <div
                                        className="w-full flex items-center gap-2 cursor-pointer"
                                        onClick={() => {
                                          setSelectedCountry({
                                            value: obj.value,
                                            label: obj.label,
                                            codePhone: obj.codePhone,
                                            flag: obj.flag,
                                          });
                                        }}
                                      >
                                        <img
                                          src={obj?.flag}
                                          className="w-[20px] h-[20px] rounded-full object-cover"
                                          alt=""
                                        />

                                        <span className="text__14">
                                          {obj?.label}{" "}
                                          <span className="font-medium">
                                            {obj?.codePhone}
                                          </span>
                                        </span>
                                      </div>
                                    </Fragment>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="font-medium text__14 text-Msecondary">
                                {selectedCountry?.codePhone}
                              </span>
                              <Form.Control
                                type="email"
                                placeholder="2345 678 4321"
                                className="font-medium text__14 h-[54px] rounded-[8px] px-0 outline-none shadow-none focus:outline-none focus:shadow-none border-none focus:border-none focus:bg-transparent bg-transparent placeholder:text-[#A3A3A3]"
                              />
                            </div>
                          </div>
                        </Form.Group>

                        <div className="cursor-pointer inline-block cursor-pointer text-center font-medium text__16 text-white !py-[15px] bg-Mgreen !border-Mgreen bg-Mgreen btnClass w-full rounded-lg">
                          Send Code
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Verification;
