import Layout from '@/Components/Layout/Layout';
import { useHostname } from '@/Components/Provider/HostnameProvider';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Slug = () => {
    const originalUrl = useHostname();
    return (
        <Fragment>
            <Layout title='Career' description='Career Detail'>
                <section>
                    <Container>
                        <Row>
                            <Col className='mb-4 md:mb-0' md={7} lg={8}>
                                <div className="mb-4">
                                    <h4 className='font-bold text__18 mb-2'>About the company</h4>
                                    <p className='text__18'>Consequat tempus lorem eget in eget nunc cursus. Sed tempor semper et tortor est. Consectetur risus consectetur congue quis at arcu malesuada aenean a. Ut sit a cursus quisque felis aliquet arcu mi. Interdum nulla dolor sit et eget. Faucibus vitae amet nisi gravida. Habitant amet sit ultrices ultricies augue. Morbi eget fermentum vitae ac duis pellentesque eu quis.</p>
                                </div>

                                <div className="mb-4">
                                    <h4 className='font-bold text__18 mb-2'>About the job</h4>
                                    <p className='text__18'>Consectetur donec leo dignissim commodo. Nunc erat pharetra vitae gravida aenean. Gravida sed tempus id mi sed pulvinar. Nullam vitae elit neque feugiat est dolor blandit. Molestie diam molestie neque massa a neque. Sit amet quis ipsum non lorem volutpat purus. Posuere in orci duis molestie turpis ac risus. Pellentesque donec sapien tortor at et ut placerat.</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className='font-bold text__18 mb-2'>Responsibilities Include:</h4>
                                    <ul className='list-disc pl-4 text__18'>
                                        <li>Consequat tempus lorem eget in eget nunc cursus. </li>
                                        <li>Sed tempor semper et tortor est. </li>
                                        <li>Consectetur risus consectetur congue quis at arcu malesuada aenean a. </li>
                                        <li>Ut sit a cursus quisque felis aliquet arcu mi. </li>
                                        <li>Interdum nulla dolor sit et eget. </li>
                                        <li>Faucibus vitae amet nisi gravida. </li>
                                        <li>Habitant amet sit ultrices ultricies augue. </li>
                                        <li>Morbi eget fermentum vitae ac duis pellentesque eu quis.</li>
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <h4 className='font-bold text__18 mb-2'>Role Requirements</h4>
                                    <ul className='list-disc pl-4 text__18'>
                                        <li>Sed tempor semper et tortor est. </li>
                                        <li>Consectetur risus consectetur congue quis at arcu malesuada aenean a. </li>
                                        <li>Ut sit a cursus quisque felis aliquet arcu mi. </li>
                                        <li>Interdum nulla dolor sit et eget. </li>
                                        <li>Faucibus vitae amet nisi gravida. </li>
                                        <li>Habitant amet sit ultrices ultricies augue. </li>
                                        <li>Morbi eget fermentum vitae ac duis pellentesque eu quis.</li>
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <h4 className='font-bold text__18 mb-2'>Perks</h4>
                                    <ul className='list-disc pl-4 text__18'>
                                        <li>Sed tempor semper et tortor est. </li>
                                        <li>Consectetur risus consectetur congue quis at arcu malesuada aenean a. </li>
                                        <li>Ut sit a cursus quisque felis aliquet arcu mi.</li>
                                    </ul>
                                </div>

                                <p className='text__18'>Join our dynamic start-up and be part of a team that is reshaping the mobility landscape</p>

                            </Col>
                            <Col md={5} lg={4}>
                                <div className="p-6 w-full border-l border-solid border-[#E5E5E5]">
                                    <h3 className='font-bold text__32 mb-1'>Sr. Software Engineer</h3>
                                    <div className="mb-3 flex items-center gap-2 text__14">
                                        <p className='text-Msecondary'>Engineering</p>
                                        <div className="w-[3px] h-[3px] bg-Msecondary rounded-full"></div>
                                        <p className='text-Msecondary'>Remote</p>
                                    </div>
                                    <div className="flex items-start gap-2 mb-2">
                                        <img src={originalUrl + "/images/Work.svg"} alt="" />
                                        <span className='text__16'>$90,000/yr - $189,000/yr · Full-time · Mid-Senior level</span>
                                    </div>
                                    <div className="flex items-start gap-2 mb-6">
                                        <img src={originalUrl + "/images/Document.svg"} alt="" />
                                        <span className='text__16'>1-10 employees · Software Development</span>
                                    </div>

                                    <a href="#!" className="inline-block cursor-pointer font-medium text__16 text-white !rounded-[8px] !border-Mgreen bg-Mgreen btnClass w-full text-center !py-[16px]">Apply</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </Fragment>
    )
}

export default Slug