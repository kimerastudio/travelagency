import React, { Fragment, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Layout from '@/Components/Layout/Layout'
import { LogoSvg } from '@/Components/svg/Svg'
import { useHostname } from '@/Components/Provider/HostnameProvider'

const ResetPassword = () => {
    const originalUrl = useHostname();

    const [tooglePassword, settooglePassword] = useState(true)
    const [tooglePasswordConfirm, settooglePasswordConfirm] = useState(true)

    const [ToogleInfo, setToogleInfo] = useState(false)
    return (
        <Fragment>
            <Layout navbar={false} footer={false} title='Reset Password' description='Reset Password Desc' >
                <section className='py-0 bg-[#F9FAFB]'>
                    <Container className='min-h-dvh flex items-center justify-center'>
                        <Row className="justify-center w-full">
                            <Col md={8} xl={5}>

                                {
                                    ToogleInfo ? <Fragment>
                                        <div className="p-[2rem] bg-white rounded-xl w-full">
                                            <div className="text-center">
                                                <div className="flex items-center gap-2 mb-3 justify-center">
                                                    <LogoSvg classData={"w-[48px]"} />
                                                    <span className='font-medium text__18'>Healify</span>
                                                </div>
                                                <h4 className='font-medium text__32 mb-2'>Check your inbox</h4>
                                                <p className='text__16 text-Msecondary'>We just a reset link to <span className='font-medium text-Mblack'>gavin@gmail.com</span>. Click the link, and you’ll be prompted to choose a new password</p>
                                            </div>
                                        </div>
                                    </Fragment> : <Fragment>
                                        <div className="p-[2rem] bg-white rounded-xl w-full">
                                            <div className="text-center mb-6">
                                                <div className="flex items-center gap-2 mb-3 justify-center">
                                                    <LogoSvg classData={"w-[48px]"} />
                                                    <span className='font-medium text__18'>Healify</span>
                                                </div>
                                                <h4 className='font-medium text__32 mb-2'>Reset your password</h4>
                                                <p className='text__16 text-Msecondary'>Choose a new and secure password to protect your account.</p>
                                            </div>


                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className='font-normal text__14 text-[#A3A3A3]'>New Password</Form.Label>
                                                <div className="relative">
                                                    <Form.Control type={tooglePassword ? "password" : "text"} placeholder="Must be at least 8 character" className='font-medium text__14 h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#EAECF0] focus:border-[#EAECF0] focus:bg-[#FAFAFA]' />
                                                    <img onClick={() => settooglePassword(!tooglePassword)} src={originalUrl + "/images/eye-slash.svg"} className='cursor-pointer absolute top-1/2 -translate-y-1/2 right-4' alt="" />
                                                </div>

                                            </Form.Group>

                                            <Form.Group className="mb-[1.5rem]" controlId="exampleForm.ControlInput1">
                                                <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Confirm Password</Form.Label>
                                                <div className="relative">
                                                    <Form.Control type={tooglePasswordConfirm ? "password" : "text"} placeholder="Must be at least 8 character" className='font-medium text__14 h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#EAECF0] focus:border-[#EAECF0] focus:bg-[#FAFAFA]' />
                                                    <img onClick={() => settooglePasswordConfirm(!tooglePasswordConfirm)} src={originalUrl + "/images/eye-slash.svg"} className='cursor-pointer absolute top-1/2 -translate-y-1/2 right-4' alt="" />
                                                </div>

                                            </Form.Group>

                                            <div onClick={() => setToogleInfo(true)} className='cursor-pointer inline-block cursor-pointer text-center font-medium text__16 text-white !py-[15px] bg-Mgreen !border-Mgreen bg-Mgreen btnClass w-full rounded-lg'>Update Password</div>
                                        </div>
                                    </Fragment>
                                }


                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>

        </Fragment>
    )
}

export default ResetPassword