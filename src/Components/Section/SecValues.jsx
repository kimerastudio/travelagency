import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SecValues = () => {

    const dataFaq = [
        {
            title: "Our mission",
            desc: `Our mission is to bridge the gap between individuals and healthcare by delivering accessible and accurate health information, connecting users with qualified healthcare professionals, and promoting proactive.`
        },
        {
            title: "Our goal",
            desc: `To schedule an appointment, please contact our office during business hours. Our friendly staff will assist you in finding a convenient time.`
        },
    ]

    const [ToogleFaq, setToogleFaq] = useState(0)

    const setToogleFaqWrap = (e) => {
        if (e === ToogleFaq) {
            setToogleFaq(-1)
        } else {
            setToogleFaq(e)
        }
    }
    return (
        <Fragment>
            <section>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h5 className='font-medium text__48 mb-2'>Our Values</h5>
                            <p className='text__16 text-Msecondary leading-relaxed'>Our core value lies in promoting inclusivity, accessibility, and patient empowerment. </p>
                        </Col>
                        <Col md={6}>
                            <div className="flex flex-wrap">
                                {
                                    dataFaq.map((obj, i) => {
                                        return <Fragment>
                                            <div className='bg-white md:px-4 rounded-[20px] overflow-hidden w-full border-b !border-[#EAECF0]'>
                                                <div className="py-4 flex justify-between items-center cursor-pointer  " onClick={() => setToogleFaqWrap(i)}>
                                                    <h5 className='font-medium text__24'>{obj.title}</h5>
                                                    <div className={"arrowPlus relative w-[24px] h-[24px] " + (ToogleFaq === i ? "active" : "")}>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>

                                                <div className={"transition-all duration-300 " + (ToogleFaq === i ? "block pb-4 max-h-screen" : "overflow-hidden max-h-0")}>
                                                    <div className='text__18 text-Msecondary' dangerouslySetInnerHTML={{ __html: obj.desc }} />
                                                </div>
                                            </div>
                                        </Fragment>
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Fragment>
    )
}

export default SecValues