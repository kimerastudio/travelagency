import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SecValues = () => {

    const dataFaq = [
        {
            title: "Integrity & Transparency",
            desc: `I believe in building trust through honesty and clear communication. Every decision, every deal is made with your best interests at heart. You can count on me to provide straightforward, reliable advice and ethical service at every step of your journey.`
        },
        {
            title: "Personalized Service & Passion",
            desc: `Travel is a personal adventure, and I treat every client as unique. Drawing from my extensive global experiences and genuine passion for exploration, I craft tailor-made travel experiences that resonate with your dreams and preferences. Your journey is my journey—let's make it unforgettable.`
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
                            <h5 className='font-medium text__48 mb-2'>My Values</h5>
                            <p className='text__16 text-Msecondary leading-relaxed'>Travel with integrity, explore with passion. </p>
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