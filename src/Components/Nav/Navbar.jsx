import React, { Fragment, useEffect, useState } from "react";
import { Container, NavDropdown } from "react-bootstrap";
import { ArrowDownSvg, LogoSvg } from "../svg/Svg";
import { useRouter } from "next/router";
import Link from "next/link";
import useHostname from "../Provider/HostnameProvider";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = ({ enableAOS }) => {
  const router = useRouter();

  const originalUrl = useHostname();

  const careers = [
    "/about",
    "/services",
    "/careers",
    "/preventive-care",
    "/specialized-treatments",
    "/emergency-care",
  ];

  const [ToogleMenuResponsive, setToogleMenuResponsive] = useState(false);
  const [ToogleMenuCompany, setToogleMenuCompany] = useState(false);

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
      <div
        className={
          "lg:hidden fixed w-full  z-[90] pt-[80px] pb-4 transition-all duration-300 shadow-[0px_20px_50px_#00000024] " +
          (ToogleMenuResponsive ? "top-0 " : "-top-[100vh] ") +
          (careers.includes(router.pathname) ? "bg-Mblack" : "bg-white")
        }
      >
        <Container className="h-full">
          <ul className="list-none p-0 m-0 flex items-center flex-wrap gap-3 text__16 w-full">
            <li className="w-full">
              <Link
                href="/about"
                onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)}
                className={
                  "font-medium " +
                  (careers.includes(router.pathname)
                    ? "text-white"
                    : "text-Mblack")
                }
              >
                About Me
              </Link>
            </li>
            <div
              className={
                "w-full h-[1px] " +
                (careers.includes(router.pathname)
                  ? "bg-[#EAECF0] opacity-30"
                  : "bg-[#EAECF0]")
              }
            ></div>
            <li className="w-full">
              <Link
                href="/services"
                onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)}
                className={
                  "font-medium " +
                  (careers.includes(router.pathname)
                    ? "text-white"
                    : "text-Mblack")
                }
              >
                Services
              </Link>
            </li>
            <div
              className={
                "w-full h-[1px] " +
                (careers.includes(router.pathname)
                  ? "bg-[#EAECF0] opacity-30"
                  : "bg-[#EAECF0]")
              }
            ></div>
            <li className="w-full">
              <div className="grid grid-cols-2 text-center items-center gap-2 xl:gap-3">
                <Link
                  href="/auth/sign-in"
                  className={
                    " font-medium text__14 px-2 xl:px-4 py-2 rounded-[6px] " +
                    (careers.includes(router.pathname)
                      ? "text-white border !border-[rgba(255,255,255,0.2)]"
                      : "text-Mblack border !border-[rgba(0,0,0,0.2)]")
                  }
                >
                  305 448 9987
                </Link>
                <Link
                  href="https://wa.me/+13054489987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "text-Mgreen font-medium text__14 px-4 py-2 border rounded-[6px] " +
                    (careers.includes(router.pathname)
                      ? "text-white bg-Mgreen !border-Mgreen "
                      : "bg-Mgreen text-white")
                  }
                >
                  Start a Chat
                </Link>
              </div>
            </li>
          </ul>
        </Container>
      </div>

      <div
        data-aos={enableAOS ? "fade-down" : ""}
        className={
          "w-full inline-block  fixed z-[99] left-0 top-0 " +
          (careers.includes(router.pathname) ? "bg-[#041719]" : "bg-white")
        }
      >
        <div className="relative w-full">
          <Container className="py-4">
            <div className="flex items-center justify-between relative">
              <Link href="/" className="flex items-center gap-2">
                <img 
                  src={originalUrl + "/images/profile-picture.jpg"}
                  alt="Profile"
                  className="w-[40px] h-[40px] rounded-full"
                />
                <h5
                  className={
                    "font-medium text-[16px] " +
                    (careers.includes(router.pathname) ? "text-white" : "")
                  }
                >
                  Carlito's Way to Travel
                </h5>
              </Link>

              <div className="hidden lg:flex items-center gap-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link
                  href="/about"
                  className={
                    "text__16 " +
                    (careers.includes(router.pathname)
                      ? "text-white"
                      : "text-Mblack")
                  }
                >
                  About Me
                </Link>
                <Link
                  href="/services"
                  className={
                    "text__16 " +
                    (careers.includes(router.pathname)
                      ? "text-white"
                      : "text-Mblack")
                  }
                >
                  Services
                </Link>
              </div>

              <div className="hidden lg:flex items-center gap-2 xl:gap-3">
                <Link
                  href="/auth/sign-in"
                  className={
                    " font-medium text__14 px-2 xl:px-4 py-2 rounded-[6px] " +
                    (careers.includes(router.pathname)
                      ? "text-white border !border-[rgba(255,255,255,0.2)]"
                      : "text-Mgreen")
                  }
                >
                  305 448 9987
                </Link>
                <Link
                  href="https://wa.me/+13054489987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "text-Mgreen font-medium text__14 px-4 py-2 border rounded-[6px] " +
                    (careers.includes(router.pathname)
                      ? "text-white bg-Mgreen !border-Mgreen "
                      : "!border-[rgba(0,118,96,0.2)] hover:bg-Mgreen hover:text-white hover:!border-Mgreen")
                  }
                >
                  Start a Chat
                </Link>
              </div>

              <div
                onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)}
                className={
                  "relative px-1 py-1 barIcon w-[30px] h-[30px] cursor-pointer lg:hidden ml-auto " +
                  (ToogleMenuResponsive ? "active" : "")
                }
              >
                <div
                  className={
                    careers.includes(router.pathname) ? "bg-white" : "bg-Mblack"
                  }
                ></div>
                <div
                  className={
                    careers.includes(router.pathname) ? "bg-white" : "bg-Mblack"
                  }
                ></div>
                <div
                  className={
                    careers.includes(router.pathname) ? "bg-white" : "bg-Mblack"
                  }
                ></div>
              </div>
            </div>
          </Container>

          {/* Company dropdown menu - commented out
          <div
            className={
              "lg:block hidden border-t  py-3 transition-all duration-300 absolute left-1/2 -translate-x-1/2 w-full shadow-[12px_12px_12px_0px_#00000014] " +
              (ToogleMenuCompany
                ? "top-full "
                : "top-[150%] opacity-0 pointer-events-none ") +
              (careers.includes(router.pathname)
                ? "bg-[#041719] !border-[#ffffff1e]"
                : "bg-white !border-[#EAECF0]")
            }
          >
            <Container>
              <div className="grid grid-cols-3 gap-6">
                <Link href="/about" className="flex items-start gap-3">
                  <img
                    src={
                      originalUrl +
                      (careers.includes(router.pathname)
                        ? "/images/DiamondsFour1.svg"
                        : "/images/DiamondsFour.svg")
                    }
                    alt=""
                  />
                  <div className="">
                    <h5
                      className={
                        "font-mono text__20 mb-1 " +
                        (careers.includes(router.pathname)
                          ? "text-white"
                          : "text-Mblack")
                      }
                    >
                      Our About Me
                    </h5>
                    <p
                      className={
                        "text__18 " +
                        (careers.includes(router.pathname)
                          ? "text-white opacity-70"
                          : "text-[#737373]")
                      }
                    >
                      Join Our Life-Saving Team.
                    </p>
                  </div>
                </Link>
                <Link href="/careers" className="flex items-start gap-3">
                  <img
                    src={
                      originalUrl +
                      (careers.includes(router.pathname)
                        ? "/images/Toolbox1.svg"
                        : "/images/Toolbox.svg")
                    }
                    alt=""
                  />
                  <div className="">
                    <h5
                      className={
                        "font-mono text__20 mb-1 " +
                        (careers.includes(router.pathname)
                          ? "text-white"
                          : "text-Mblack")
                      }
                    >
                      Careers
                    </h5>
                    <p
                      className={
                        "text__18 " +
                        (careers.includes(router.pathname)
                          ? "text-white opacity-70"
                          : "text-[#737373]")
                      }
                    >
                      Join Our Life-Saving Team.
                    </p>
                  </div>
                </Link>
                <Link href="/contact" className="flex items-start gap-3">
                  <img
                    src={
                      originalUrl +
                      (careers.includes(router.pathname)
                        ? "/images/AddressBook1.svg"
                        : "/images/AddressBook.svg")
                    }
                    alt=""
                  />
                  <div className="">
                    <h5
                      className={
                        "font-mono text__20 mb-1 " +
                        (careers.includes(router.pathname)
                          ? "text-white"
                          : "text-Mblack")
                      }
                    >
                      Contact
                    </h5>
                    <p
                      className={
                        "text__18 " +
                        (careers.includes(router.pathname)
                          ? "text-white opacity-70"
                          : "text-[#737373]")
                      }
                    >
                      Need Help? We're Here 24/7.
                    </p>
                  </div>
                </Link>
              </div>
            </Container>
          </div>
          */}
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
