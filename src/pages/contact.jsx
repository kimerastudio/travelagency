import React, { Fragment } from 'react'
import Layout from '@/Components/Layout/Layout'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <Fragment>
            <Layout title='Contact' description='Contact Desc'>
                <section>
                    <Container>
                        <Row className='gap-y-6'>
                            <Col md={6}>
                                <h2 className='font-medium text__48 mb-3'>Get in touch</h2>
                                <p className='text__18 text-Msecondary leading-relaxed'>This form is for business inquiries. If you are a Garner member looking for assistance, please sign in to your Garner account.</p>
                            </Col>
                            <Col md={6}>
                                <Row className='gap-y-4'>
                                    <Col md={6}>
                                        <label htmlFor="" className='text__14 text-Msecondary mb-2'>First Name</label>
                                        <input type="text" placeholder='Enter first name...' className='text__14 px-3 h-[46px] rounded-lg border !border-[#EAECF0] w-full focus:hover:active outline-none' />
                                    </Col>
                                    <Col md={6}>
                                        <label htmlFor="" className='text__14 text-Msecondary mb-2'>Last Name</label>
                                        <input type="text" placeholder='Enter last name...' className='text__14 px-3 h-[46px] rounded-lg border !border-[#EAECF0] w-full focus:hover:active outline-none' />
                                    </Col>
                                    <Col md={12}>
                                        <label htmlFor="" className='text__14 text-Msecondary mb-2'>Company Name</label>
                                        <input type="text" placeholder='Enter company name...' className='text__14 px-3 h-[46px] rounded-lg border !border-[#EAECF0] w-full focus:hover:active outline-none' />
                                    </Col>
                                    <Col md={12}>
                                        <label htmlFor="" className='text__14 text-Msecondary mb-2'>Email</label>
                                        <input type="text" placeholder='Enter email...' className='text__14 px-3 h-[46px] rounded-lg border !border-[#EAECF0] w-full focus:hover:active outline-none' />
                                    </Col>
                                    <Col md={12}>
                                        <label htmlFor="" className='text__14 text-Msecondary mb-2'>Message</label>
                                        <textarea type="text" cols="30" rows="6" placeholder='Type here...' className='text__14 p-3 rounded-lg border !border-[#EAECF0] w-full focus:hover:active outline-none' />
                                    </Col>
                                </Row>

                                <div className="text-right mt-[2rem]">
                                    <div className='inline-block px-6 py-2 bg-Mgreen text-white cursor-pointer font-medium text__16 rounded-lg'>Submit</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </Fragment>
    )
}

export default Contact