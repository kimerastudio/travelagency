import React, { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useHostname } from "../Provider/HostnameProvider";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionDownload = ({
  title = "Improve your health today",
  desc = ` Experience top-quality healthcare services designed to meet
              <br class="xs:block hidden" /> your unique needs.`,
  btnTitle = "Download the App",
  enableAOS = false,
}) => {
  const originalUrl = useHostname();
  const [offset, setOffset] = useState(120);

  useEffect(() => {
    const calculateOffset = () => {
      setOffset(window.innerWidth > 1920 ? 300 : 120);
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
  }, [offset, enableAOS]);
  return (
    <Fragment>
      <section className="relative overflow-hidden bg-[#041719]">
        <img
          src={originalUrl + "/images/Group 1.png"}
          className="absolute left-0 top-0 w-full h-full"
          alt=""
        />
        <Container className="relative z-[1]">
          <div className="text-white lg:py-[40px]">
            <h2
              data-aos-offset={offset}
              data-aos={enableAOS ? "fade-down" : ""}
              data-aos-delay={enableAOS ? "100" : ""}
              className="font-medium text__48 mb-3 text-center"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p
              data-aos-offset={offset}
              data-aos={enableAOS ? "fade-down" : ""}
              data-aos-delay={enableAOS ? "200" : ""}
              className="text__18 text-white opacity-60 text-center"
              dangerouslySetInnerHTML={{ __html: desc }}
            />

            <div className="mt-[2.5rem] text-center">
              <a
                data-aos-offset={offset}
                data-aos={enableAOS ? "zoom-in" : ""}
                data-aos-delay={enableAOS ? "300" : ""}
                href="#!"
                className="inline-block px-4 py-3 rounded-[12px] bg-[rgba(255,255,255,0.08)] text-white border !border-[rgba(255,255,255,0.12)] font-medium text__16"
              >
                <div className="flex gap-2">
                  {btnTitle}
                  <img src="/images/arrow.svg" alt="" />
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default SectionDownload;
