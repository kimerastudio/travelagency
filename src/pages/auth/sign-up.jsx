import React, { Fragment, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useHostname } from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import Link from "next/link";
import { LogoSvg } from "@/Components/svg/Svg";

const Signup = () => {
  const originalUrl = useHostname();

  const [tooglePassword, settooglePassword] = useState(true);
  const [toogleChecklist, settoogleChecklist] = useState(false);
  return (
    <Fragment>
      <Layout
        navbar={false}
        footer={false}
        title="Sign up"
        description="Sign up Desc"
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
                  <div className="w-full py-6 md:px-6 lg:px-10">
                    <div className="text-center mb-10">
                      <div className="flex items-center gap-2 mb-3 justify-center">
                        <LogoSvg classData={"w-[48px]"} />
                        <span className="font-medium text__18">Healify</span>
                      </div>
                      <h4 className="font-medium text__32 mb-2">
                        Let’s get started
                      </h4>
                      <p className="text__16 text-Msecondary">
                        Begin by creating an account
                      </p>
                    </div>

                    <Row>
                      <Col md={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="font-normal text__14 text-[#A3A3A3]">
                            First Name
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter first name"
                            className="font-medium text__14 h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#EAECF0] focus:border-[#EAECF0] focus:bg-[#FAFAFA]"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="font-normal text__14 text-[#A3A3A3]">
                            Last Name
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter last name"
                            className="font-medium text__14 h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#EAECF0] focus:border-[#EAECF0] focus:bg-[#FAFAFA]"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="font-normal text__14 text-[#A3A3A3]">
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="e.g sanandreas@gmail.com"
                        className="font-medium text__14 h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#EAECF0] focus:border-[#EAECF0] focus:bg-[#FAFAFA]"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="font-normal text__14 text-[#A3A3A3]">
                        Password
                      </Form.Label>
                      <div className="relative">
                        <Form.Control
                          type={tooglePassword ? "password" : "text"}
                          placeholder="Must be at least 8 character"
                          className="font-medium text__14 h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#EAECF0] focus:border-[#EAECF0] focus:bg-[#FAFAFA]"
                        />
                        <img
                          onClick={() => settooglePassword(!tooglePassword)}
                          src={originalUrl + "/images/eye-slash.svg"}
                          className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-4"
                          alt=""
                        />
                      </div>
                    </Form.Group>

                    <div
                      className="mb-6 flex items-center gap-2 cursor-pointer"
                      onClick={() => settoogleChecklist(!toogleChecklist)}
                    >
                      <div
                        className={
                          "flex items-center justify-center w-[24px] h-[24px] rounded-[4px] border border-solid  " +
                          (toogleChecklist
                            ? "border-Mgreen bg-Mgreen "
                            : "border-[#A3A3A3]")
                        }
                      >
                        <img
                          src={originalUrl + "/images/check (3).svg"}
                          className={
                            toogleChecklist ? "opacity-100" : "opacity-0"
                          }
                          alt=""
                        />
                      </div>
                      <span className="text__16">
                        I agree to{" "}
                        <a href="#!" className="text-Mgreen">
                          privacy policy & term
                        </a>
                      </span>
                    </div>

                    <div className="text-center">
                      <Link
                        href="/auth/verification"
                        className="inline-block cursor-pointer text-center font-medium text__16 text-white !py-[15px]  !border-Mgreen bg-Mgreen btnClass w-full rounded-lg"
                      >
                        Sign Up
                      </Link>

                      <h5 className="font-medium text-center mt-3 text__16 text-Msecondary">
                        New on our platform?{" "}
                        <Link href="#!" className="text-Mgreen">
                          Sign In
                        </Link>
                      </h5>

                      <div className="my-3 relative">
                        <div className="absolute h-[1px] left-0 w-full top-1/2 -translate-y-1/2 bg-[#EAECF0]"></div>
                        <div className="px-4 py-2 bg-white inline-block text__14 text-[#525252] relative z-[2]">
                          Or Log In with
                        </div>
                      </div>

                      <div className="grid grid-cols-2 grid-rows-1 gap-3">
                        <a
                          href="#!"
                          className="relative inline-block px-3 py-[10px] w-full text-center rounded-[50px] border border-solid border-[#EAECF0] "
                        >
                          <img
                            src={originalUrl + "/images/Icon - Google.svg"}
                            className="absolute left-[10px] top-1/2 -translate-y-1/2"
                            alt=""
                          />
                          <div className="relative z-2 font-medium text__14">
                            Google
                          </div>
                        </a>
                        <a
                          href="#!"
                          className="relative inline-block px-3 py-[10px] w-full text-center rounded-[50px] border border-solid border-[#EAECF0] "
                        >
                          <img
                            src={originalUrl + "/images/facebook-3-2 1.svg"}
                            className="absolute left-[10px] top-1/2 -translate-y-1/2"
                            alt=""
                          />
                          <div className="relative z-2 font-medium text__14">
                            Facebook
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Signup;
