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
      <Layout title="About" description="About Desc" hideFooter={true}>
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

        <section className="py-16 bg-gray-50">
  <Container>
    <div className="text-center mb-10">
      <h5 className="font-medium text__48 text-MDarkgreen">Featured Destinations</h5>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Explore these breathtaking locations for your next adventure</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Image 1 */}
      <div className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="relative pb-[70%] overflow-hidden">
          <img
            src="./../images/travel-1.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            alt="Santorini, Greece - White buildings with blue domes overlooking the sea"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-medium text-lg text-MDarkgreen">Santorini, Greece</h3>
          <p className="text-gray-600 text-sm mt-1">Iconic white buildings with blue domes</p>
        </div>
      </div>
      
      {/* Image 2 */}
      <div className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="relative pb-[70%] overflow-hidden">
          <img
            src="./../images/travel-2.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            alt="Bali, Indonesia - Tropical paradise with lush jungle and beaches"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-medium text-lg text-MDarkgreen">Bali, Indonesia</h3>
          <p className="text-gray-600 text-sm mt-1">Tropical paradise with rich culture</p>
        </div>
      </div>
      
      {/* Image 3 */}
      <div className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="relative pb-[70%] overflow-hidden">
          <img
            src="./../images/travel-3.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            alt="Kyoto, Japan - Traditional architecture and cherry blossoms"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-medium text-lg text-MDarkgreen">Kyoto, Japan</h3>
          <p className="text-gray-600 text-sm mt-1">Ancient temples and cherry blossoms</p>
        </div>
      </div>
      
      {/* Image 4 */}
      <div className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="relative pb-[70%] overflow-hidden">
          <img
            src="./../images/travel-4.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            alt="Machu Picchu, Peru - Ancient Incan citadel set against mountains"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-medium text-lg text-MDarkgreen">Machu Picchu, Peru</h3>
          <p className="text-gray-600 text-sm mt-1">Ancient wonder in the Andes</p>
        </div>
      </div>
      
      {/* Image 5 */}
      <div className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="relative pb-[70%] overflow-hidden">
          <img
            src="./../images/travel-5.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            alt="Amalfi Coast, Italy - Colorful towns along dramatic coastline"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-medium text-lg text-MDarkgreen">Amalfi Coast, Italy</h3>
          <p className="text-gray-600 text-sm mt-1">Dramatic coastline with charming villages</p>
        </div>
      </div>
      
      {/* Image 6 */}
      <div className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="relative pb-[70%] overflow-hidden">
          <img
            src="./../images/travel-6.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            alt="Cape Town, South Africa - Coastal city with mountains and beaches"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-medium text-lg text-MDarkgreen">Cape Town, South Africa</h3>
          <p className="text-gray-600 text-sm mt-1">Where mountains meet the ocean</p>
        </div>
      </div>
    </div>
    
    {/* View All Button */}
    <div className="text-center mt-10">
      <button className="bg-MDarkgreen text-white font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-all">
        Explore All Destinations
      </button>
    </div>
  </Container>
</section>

        <SectionDownload enableAOS={true} />
      </Layout>
    </Fragment>
  );
};

export default About;
