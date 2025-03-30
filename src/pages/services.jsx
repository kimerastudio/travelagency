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
            <Layout title='Services' description='Service Desc'>
                <section className='relative overflow-hidden bg-MDarkgreen'>
                    <img src={originalUrl + "/images/Group 2.png"} className='absolute left-0 top-0 w-full h-full' alt="" />
                    <Container className='relative z-[1]'>

                        <div className="text-white py-[60px] text-center">
                            <dv className='text__14 font-medium inline-block text-MgreenSecond text-center px-6 py-2 rounded-md bg-[rgba(255,255,255,0.08)] border !border-[rgba(255,255,255,0.12)]'>Services</dv>
                            <h2 className='font-medium text__48 mt-3 text-center'>How I can help you have an unforgetable traveling experience <br className='ss:block hidden' /> Services</h2>
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
                                    <img src="./../images/FirstAidKit.svg" alt="" />
                                </div>

                                <h2 className='font-medium text__46 mb-3'>Finding the Best Flight for You </h2>
                                <p className='text__18 leading-relaxed text-Msecondary mb-3'> Using specialized tools exclusive to licensed travel professionals, I unlock prices you wouldn't normally find on your own. I work closely with you to secure the best flight options tailored to your schedule and budget, and I’m always here to support you in case of any travel hiccups.</p>

                                <a href="#!" className='mt-[2rem] inline-block px-4 py-3 rounded-[12px] text-Mgreen border !border-[rgba(0,118,96,0.2)] font-medium text__16'>
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
                                    <img src="./../images/Heartbeat.svg" alt="" />
                                </div>

                                <h2 className='font-medium text__46 mb-3'>Specialized treatments</h2>
                                <p className='text__18 leading-relaxed text-Msecondary mb-3'>Our network of specialists consists of highly trained medical professionals who are experienced in their respective fields. Whether you require specialized treatments for chronic conditions, complex surgeries, or advanced procedures, we ensure that you receive the best possible care tailored to your unique needs. </p>
                                <p className='text__18 leading-relaxed text-Msecondary'>Rest assured that our team is dedicated to delivering exceptional healthcare services with compassion and expertise.</p>

                                <a href="#!" className='mt-[2rem] inline-block px-4 py-3 rounded-[12px] text-Mgreen border !border-[rgba(0,118,96,0.2)] font-medium text__16'>
                                    <div className="flex gap-2">
                                        Get Started
                                        <ArrowRightSvg />
                                    </div>
                                </a>
                            </Col>
                            <Col md={6} className='my-auto order-1 md:!order-2'>
                                <img src="./../images/sadasda.png" alt="" />
                            </Col>
                        </Row>
                        <Row className='gap-y-6'>
                            <Col md={6} className='my-auto'>
                                <img src="./../images/asdsad.png" alt="" />
                            </Col>
                            <Col md={6} className='my-auto'>
                                <div className="mb-4 w-[64px] h-[64px] bg-[#F9FAFB] border !border-[#EAECF0] rounded-[6px] flex items-center justify-center">
                                    <img src="./../images/FirstAid.svg" alt="" />
                                </div>

                                <h2 className='font-medium text__46 mb-3'>Emergency care</h2>
                                <p className='text__18 leading-relaxed text-Msecondary mb-3'>Our network includes emergency healthcare facilities equipped with advanced technology and staffed by experienced medical professionals. </p>
                                <p className='text__18 leading-relaxed text-Msecondary'>From acute injuries and sudden illnesses to life-threatening emergencies, our goal is to ensure that you receive timely and efficient care to improve outcomes and save lives.</p>

                                <a href="#!" className='mt-[2rem] inline-block px-4 py-3 rounded-[12px] text-Mgreen border !border-[rgba(0,118,96,0.2)] font-medium text__16'>
                                    <div className="flex gap-2">
                                        Get Started
                                        <ArrowRightSvg />
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <SectionFaq />

                <SectionDownload />
            </Layout>
        </Fragment>
    )
}

export default Services
