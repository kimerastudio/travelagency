import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SecData = () => {
    return (
        <Fragment>
            <section>
                <Container>
                    <Row>
                        <Col md={9}>
                            <h2 className='font-medium text__46 mb-3'>I have a relentless  <br />passion for travel</h2>
                            <p className='text__18 leading-relaxed text-Msecondary mb-3'> I have been able to explore the world and its wonders; now I want to help you get to know it too.</p>
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
                                <p className='text__16 text-Msecondary leading-relaxed'>Countries visited</p>
                            </div>
                        </Col>
                        <Col md={4} className='relative flex-fill'>

                            <div className="absolute h-full w-[1px] left-0 top-0">
                                <div className="relative w-full h-full bg-[#EAECF0]">
                                    <div className="absolute w-full h-[64px] bg-[#007660] top-1/2 -translate-y-1/2"></div>
                                </div>
                            </div>

                            <div className="pl-4 py-3">
                                <h5 className='font-medium text__48 mb-2'>5000+</h5>
                                <p className='text__16 text-Msecondary leading-relaxed'>Satisfied customers</p>
                            </div>
                        </Col>
                        <Col md={4} className='relative flex-fill'>

                            <div className="absolute h-full w-[1px] left-0 top-0">
                                <div className="relative w-full h-full bg-[#EAECF0]">
                                    <div className="absolute w-full h-[64px] bg-[#007660] top-1/2 -translate-y-1/2"></div>
                                </div>
                            </div>

                            <div className="pl-4 py-3">
                                <h5 className='font-medium text__48 mb-2'>7</h5>
                                <p className='text__16 text-Msecondary leading-relaxed'>Times I could have gone to the moon and back with the distance I have traveled</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Fragment>
    )
}

export default SecData