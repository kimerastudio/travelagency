import React, { Fragment } from 'react'
import Layout from '@/Components/Layout/Layout'
import { Col, Container, Row } from 'react-bootstrap'
import { useHostname } from '@/Components/Provider/HostnameProvider';
import { ArrowRightSvg } from '@/Components/svg/Svg';
import SectionFaq from '@/Components/Section/SectionFaq';
import SectionDownload from '@/Components/Section/SectionDownload';

const Services = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title="Services" description="Services Desc" hideFooter={true}>
                <section className='relative overflow-hidden bg-MDarkgreen'>
                    <img src={originalUrl + "/images/Group 2.png"} className='absolute left-0 top-0 w-full h-full' alt="" />
                    <Container className='relative z-[1]'>

                        <div className="text-white py-[60px] text-center">
                            <dv className='text__14 font-medium inline-block text-MgreenSecond text-center px-6 py-2 rounded-md bg-[rgba(255,255,255,0.08)] border !border-[rgba(255,255,255,0.12)]'>Services</dv>
                            <h2 className='font-medium text__48 mt-3 text-center'>How I can help you have <br className='ss:block hidden' /> an unforgetable traveling experience</h2>
                        </div>

                    </Container>
                </section>

                <section>
                    <Container>
                        <Row className='gap-y-6'>
                            <Col md={6} className='my-auto'>
                                <img src="./../images/Vector.png" alt="" />
                            </Col>
                            <Col md={6} className='my-auto'>
                                <div className="mb-4 w-[64px] h-[64px] bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center">
                                    <img src="./../images/airplane-in-flight.svg" alt="" />
                                </div>

                                <h2 className='font-medium text__46 mb-3'>Flight Booking </h2>
                                <p className='text__18 leading-relaxed text-Msecondary mb-3'> Using specialized tools exclusive to licensed travel professionals, I unlock prices you wouldn't normally find on your own. I work closely with you to secure the best flight options tailored to your schedule and budget, and I’m always here to support you in case of any travel hiccups.</p>

                                <a href="https://wa.me/+13054489987" className='mt-[2rem] inline-block px-4 py-3 rounded-[12px] text-Mgreen border !border-[rgba(0,118,96,0.2)] font-medium text__16'>
                                    <div className="flex gap-2">
                                        Get Started
                                        <ArrowRightSvg />
                                    </div>
                                </a>
                            </Col>
                        </Row>
                        <Row className='gap-y-6 my-[3rem]'>
                            <Col md={6} className='my-auto md:!order-1 order-2'>
                                <div className="mb-4 w-[64px] h-[64px] bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center">
                                    <img src="./../images/car-profile.svg" alt="" />
                                </div>

                                <h2 className='font-medium text__46 mb-3'>Transportation</h2>
                                <p className='text__18 leading-relaxed text-Msecondary mb-3'>Whether you need a reliable car rental, a comfortable train reservation, or timely bus tickets, I ensure your ground transportation is coordinated perfectly. I partner with trusted providers to offer you convenience and peace of mind from the moment you land until you reach your destination. </p>

                                <a href="https://wa.me/+13054489987" className='mt-[2rem] inline-block px-4 py-3 rounded-[12px] text-Mgreen border !border-[rgba(0,118,96,0.2)] font-medium text__16'>
                                    <div className="flex gap-2">
                                        Get Started
                                        <ArrowRightSvg />
                                    </div>
                                </a>
                            </Col>
                            <Col md={6} className='my-auto order-1 md:!order-2'>
                                <img src="./../images/transportation.png" alt="" />
                            </Col>
                        </Row>
                        <Row className='gap-y-6'>
                            <Col md={6} className='my-auto'>
                                <img src="./../images/hotel.png" alt="" />
                            </Col>
                            <Col md={6} className='my-auto'>
                                <div className="mb-4 w-[64px] h-[64px] bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center">
                                    <img src="./../images/building.svg" alt="" />
                                </div>

                                <h2 className='font-medium text__46 mb-3'>Hotels & Rentals</h2>
                                <p className='text__18 leading-relaxed text-Msecondary mb-3'>I leverage my industry connections to scout a wide range of accommodations—from luxury hotels to cozy boutique stays. With competitive rates and personalized recommendations, I secure the ideal lodging that meets your comfort and convenience requirements. </p>

                                {/* Responsive button container */}
                                <div className="mt-[2rem] flex flex-wrap gap-4">
                                    {/* Original button */}
                                    <a href="https://wa.me/+13054489987" className='inline-block px-4 py-3 rounded-[12px] text-Mgreen border !border-[rgba(0,118,96,0.2)] font-medium text__16'>
                                        <div className="flex gap-2">
                                            Get Started
                                            <ArrowRightSvg />
                                        </div>
                                    </a>
                                    
                                    {/* New vacation rentals button */}
                                    <a href="https://allways.rentalz.com/" target="_blank" rel="noopener noreferrer" className='inline-block px-4 py-3 rounded-[12px] bg-Mgreen text-white border !border-Mgreen font-medium text__16'>
                                        <div className="flex gap-2">
                                            Explore Our Vacation Rentals
                                            <ArrowRightSvg color="white" />
                                        </div>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <SectionFaq />

                <SectionDownload enableAOS={true} />

                <div className="w-full h-[40px] bg-[#091C1E]"></div>
            </Layout>
        </Fragment>
    )
}

export default Services
