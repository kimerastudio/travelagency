import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SecData = () => {
    return (
        <Fragment>
            <section>
                <Container>
                    <Row>
                        <Col md={9}>
                            <h2 className='font-medium text__46 mb-3'>We understand that <br /> navigating the healthcare</h2>
                            <p className='text__18 leading-relaxed text-Msecondary mb-3'>our mission is to connect individuals with the resources and services they need to make informed decisions about their health. We understand that navigating the healthcare landscape can be challenging, and that's why we are dedicated to providing reliable, trustworthy, and up-to-date information to empower you to take control of your well-being.</p>
                        </Col>
                    </Row>

                    <Row className='mt-[2rem]'>
                        <Col md={4} className='relative flex-fill'>

                            <div className="absolute h-full w-[1px] left-0 top-0">
                                <div className="relative w-full h-full bg-[#EAECF0]">
                                    <div className="absolute w-full h-[64px] bg-[#007660] top-1/2 -translate-y-1/2"></div>
                                </div>
                            </div>

                            <div className="pl-4 py-3">
                                <h5 className='font-medium text__48 mb-2'>35+</h5>
                                <p className='text__16 text-Msecondary leading-relaxed'>Rears of experience in the health care industry</p>
                            </div>
                        </Col>
                        <Col md={4} className='relative flex-fill'>

                            <div className="absolute h-full w-[1px] left-0 top-0">
                                <div className="relative w-full h-full bg-[#EAECF0]">
                                    <div className="absolute w-full h-[64px] bg-[#007660] top-1/2 -translate-y-1/2"></div>
                                </div>
                            </div>

                            <div className="pl-4 py-3">
                                <h5 className='font-medium text__48 mb-2'>320+</h5>
                                <p className='text__16 text-Msecondary leading-relaxed'>Articles and resources on a wide range of health topics</p>
                            </div>
                        </Col>
                        <Col md={4} className='relative flex-fill'>

                            <div className="absolute h-full w-[1px] left-0 top-0">
                                <div className="relative w-full h-full bg-[#EAECF0]">
                                    <div className="absolute w-full h-[64px] bg-[#007660] top-1/2 -translate-y-1/2"></div>
                                </div>
                            </div>

                            <div className="pl-4 py-3">
                                <h5 className='font-medium text__48 mb-2'>98%</h5>
                                <p className='text__16 text-Msecondary leading-relaxed'>Satisfied users who have benefited from our content and services</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Fragment>
    )
}

export default SecData