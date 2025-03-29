import React, { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useHostname } from "../Provider/HostnameProvider";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = ({ enableAOS = false }) => {
  const originalUrl = useHostname();

  const [Status, setStatus] = useState(true);

  useEffect(() => {
    const calculateOffset = () => {
      setStatus(window.innerWidth > 1600 ? false : true);
    };

    // Hitung offset saat komponen dimuat
    calculateOffset();

    // Tambahkan event listener untuk menangani resize layar
    window.addEventListener("resize", calculateOffset);

    if (enableAOS) {
      // Inisialisasi AOS hanya jika enableAOS bernilai true
      AOS.init({
        once: true,
        duration: 500,
      });
    }
    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("resize", calculateOffset);
    };
  }, [Status, enableAOS]);
  return (
    <Fragment>
      <section className="bg-[#030B0E] pb-[20px]">
        <Container>
          <div className="flex flex-wrap xl:flex-nowrap items-start justify-between gap-y-6 gap-x-3">
            <img
              data-aos={enableAOS && Status ? "fade-right" : ""}
              data-aos-delay={enableAOS && Status ? "100" : ""}
              loading="lazy"
              src={originalUrl + "/images/logox.svg"}
              alt=""
            />

            <div
              className=""
              data-aos={enableAOS && Status ? "fade-right" : ""}
              data-aos-delay={enableAOS && Status ? "200" : ""}
            >
              <div className="relative pl-4 py-2">
                <div className="absolute left-0 top-0 w-[1px] h-full bg-[rgba(255,255,255,0.16)]"></div>
                <h4 className="text__16 text-white">Solution</h4>
              </div>

              <div className="mt-2 pl-4 flex flex-wrap xs:flex-nowrap items-center gap-3">
                <Link
                  href="/preventive-care"
                  className="text__16 normal text-white opacity-60"
                >
                  Preventive care
                </Link>
                <Link
                  href="/specialized-treatments"
                  className="text__16 normal text-white opacity-60"
                >
                  Specialized treatments
                </Link>
                <Link
                  href="/emergency-care"
                  className="text__16 normal text-white opacity-60"
                >
                  Emergency care
                </Link>
              </div>
            </div>

            <div
              className=""
              data-aos={enableAOS && Status ? "fade-right" : ""}
              data-aos-delay={enableAOS && Status ? "300" : ""}
            >
              <div className="relative pl-4 py-2">
                <div className="absolute left-0 top-0 w-[1px] h-full bg-[rgba(255,255,255,0.16)]"></div>
                <h4 className="text__16 text-white">Company</h4>
              </div>

              <div className="mt-2 pl-4 flex items-center gap-3">
                <Link
                  href="/about"
                  className="text__16 normal text-white opacity-60"
                >
                  About Us
                </Link>
                <Link
                  href="/careers"
                  className="text__16 normal text-white opacity-60"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="text__16 normal text-white opacity-60"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div
              className=""
              data-aos={enableAOS && Status ? "fade-right" : ""}
              data-aos-delay={enableAOS && Status ? "400" : ""}
            >
              <div className="relative pl-4 py-2">
                <div className="absolute left-0 top-0 w-[1px] h-full bg-[rgba(255,255,255,0.16)]"></div>
                <h4 className="text__16 text-white">Download Now</h4>
              </div>

              <div className="mt-2 pl-4 flex items-center gap-3">
                <a href="#!">
                  <img
                    loading="lazy"
                    src={originalUrl + "/images/1.png"}
                    alt=""
                  />
                </a>
                <a href="#!">
                  <img
                    loading="lazy"
                    src={originalUrl + "/images/2.png"}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="mb-4 mt-[3rem] w-full h-[1px] bg-[rgba(255,255,255,0.12)]"></div>

          <div className="flex md:flex-nowrap flex-wrap gap-y-6 items-center justify-center md:justify-between relative">
            <p className="text__14 text-white opacity-60 md:w-auto w-full text-center">
              © 2024 Healify. All rights reserved.
            </p>

            <div className="flex items-center gap-3 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
              <a href="#!">
                <img
                  loading="lazy"
                  src={originalUrl + "/images/ss (1).svg"}
                  alt=""
                />
              </a>
              <a href="#!">
                <img
                  loading="lazy"
                  src={originalUrl + "/images/ss (2).svg"}
                  alt=""
                />
              </a>
              <a href="#!">
                <img
                  loading="lazy"
                  src={originalUrl + "/images/ss (3).svg"}
                  alt=""
                />
              </a>
              <a href="#!">
                <img
                  loading="lazy"
                  src={originalUrl + "/images/ss (4).svg"}
                  alt=""
                />
              </a>
            </div>

            <div className="flex items-center gap-3 md:w-auto w-full justify-center">
              <Link href="/terms" className="text__14 text-white opacity-60">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text__14 text-white opacity-60">
                Privacy Policy
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Footer;
