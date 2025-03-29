import React, { Fragment } from 'react'
import Layout from '@/Components/Layout/Layout'
import { Col, Container, Row } from 'react-bootstrap'
import { useHostname } from '@/Components/Provider/HostnameProvider';
import { ArrowRightSvg } from '@/Components/svg/Svg';
import SectionDownload from '@/Components/Section/SectionDownload';
import Link from 'next/link';

const Index = () => {
    const originalUrl = useHostname();

    const DataBlog = [
        {
            img: originalUrl + "/images/blg (1).png",
            date: "MARCH 14, 2024",
            title: "How to Solve the Engagement Problem",
            link: "/blog/detail/the-importance-of-doctor-performance"
        },
        {
            img: originalUrl + "/images/blg (2).png",
            date: "MARCH 14, 2024",
            title: "How to Solve the Engagement Problem",
            link: "/blog/detail/the-importance-of-doctor-performance"
        },
        {
            img: originalUrl + "/images/blg (3).png",
            date: "MARCH 14, 2024",
            title: "How to Solve the Engagement Problem",
            link: "/blog/detail/the-importance-of-doctor-performance"
        },
        {
            img: originalUrl + "/images/blg (4).png",
            date: "MARCH 14, 2024",
            title: "How to Solve the Engagement Problem",
            link: "/blog/detail/the-importance-of-doctor-performance"
        },
        {
            img: originalUrl + "/images/blg (5).png",
            date: "MARCH 14, 2024",
            title: "How to Solve the Engagement Problem",
            link: "/blog/detail/the-importance-of-doctor-performance"
        },
        {
            img: originalUrl + "/images/blg (6).png",
            date: "MARCH 14, 2024",
            title: "How to Solve the Engagement Problem",
            link: "/blog/detail/the-importance-of-doctor-performance"
        },
        {
            img: originalUrl + "/images/blg (7).png",
            date: "MARCH 14, 2024",
            title: "How to Solve the Engagement Problem",
            link: "/blog/detail/the-importance-of-doctor-performance"
        },
        {
            img: originalUrl + "/images/blg (8).png",
            date: "MARCH 14, 2024",
            title: "How to Solve the Engagement Problem",
            link: "/blog/detail/the-importance-of-doctor-performance"
        },
        {
            img: originalUrl + "/images/blg (9).png",
            date: "MARCH 14, 2024",
            title: "How to Solve the Engagement Problem",
            link: "/blog/detail/the-importance-of-doctor-performance"
        },
    ]
    return (
        <Fragment>
            <Layout title='Blog' description='Blog Desc'>
                <section>
                    <Container>
                        <Row className='justify-between gap-y-6'>
                            <Col md={7}>
                                <img src={originalUrl + "/images/img.png"} className='w-full object-cover rounded-xl' alt="" />

                                <div className="mt-3">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className='text__16 text-Msecondary'>by Dr. John Smith</p>
                                        <p className='text__16 text-Msecondary'>OCTOBER 13, 2023</p>
                                    </div>
                                    <h3 className='font-medium text__32 mb-3'>The Importance of Doctor Performance</h3>

                                    <Link href="/blog/detail/the-importance-of-doctor-performance" className='inline-block  text-Mgreen font-medium text__16'>
                                        <div className="flex gap-2">
                                            Read More
                                            <ArrowRightSvg />
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                            <Col md={5}>
                                <div className="lg:pl-[2.5rem]">
                                    <h3 className='font-medium text__32 mb-4'>Latest Article</h3>

                                    <div className="flex flex-wrap gap-3">

                                        <div className="w-full">
                                            <p className='text__14 text-Msecondary mb-2'>OCTOBER 13, 2023</p>
                                            <h4 className='font-medium text__24 mb-3'>How to Solve the Engagement Problem</h4>
                                            <Link href="/blog/detail/the-importance-of-doctor-performance" className='inline-block  text-Mgreen font-medium text__16'>
                                                <div className="flex gap-2">
                                                    Read More
                                                    <ArrowRightSvg />
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="w-full h-[1px] bg-[#EAECF0]"></div>

                                        <div className="w-full">
                                            <p className='text__14 text-Msecondary mb-2'>OCTOBER 13, 2023</p>
                                            <h4 className='font-medium text__24 mb-3'>How to Use the New Healthcare Transparency Data</h4>
                                            <Link href="/blog/detail/the-importance-of-doctor-performance" className='inline-block  text-Mgreen font-medium text__16'>
                                                <div className="flex gap-2">
                                                    Read More
                                                    <ArrowRightSvg />
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="w-full h-[1px] bg-[#EAECF0]"></div>

                                        <div className="w-full">
                                            <p className='text__14 text-Msecondary mb-2'>OCTOBER 13, 2023</p>
                                            <h4 className='font-medium text__24 mb-3'>How to Use the New Healthcare Transparency Data</h4>
                                            <Link href="/blog/detail/the-importance-of-doctor-performance" className='inline-block  text-Mgreen font-medium text__16'>
                                                <div className="flex gap-2">
                                                    Read More
                                                    <ArrowRightSvg />
                                                </div>
                                            </Link>
                                        </div>

                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className='pt-0'>
                    <Container>

                        <h2 className='font-medium text__48 mb-[2rem]'>All Post</h2>

                        <Row className='gap-y-6'>
                            {
                                DataBlog.map((obj) => {
                                    return <Col className='col-12' xs={6} lg={4}>
                                        <img src={obj.img} className='w-full object-cover mb-3 rounded-xl' alt="" />

                                        <p className='text__14 text-Msecondary uppercase mb-2'>{obj.date}</p>
                                        <h4 className='text__18 font-medium mb-3'>{obj.title}</h4>
                                        <Link href={obj.link} className='inline-block  text-Mgreen font-medium text__16'>
                                            <div className="flex gap-2">
                                                Read More
                                                <ArrowRightSvg />
                                            </div>
                                        </Link>
                                    </Col>
                                })
                            }

                        </Row>

                        <div className="text-center mt-8">

                            <Link href="#!" className='mt-[2rem] inline-block px-4 py-3 rounded-[12px] text-Mgreen border !border-[rgba(0,118,96,0.2)] font-medium text__16'>
                                Load more post
                            </Link>
                        </div>

                    </Container>
                </section>

                <SectionDownload />
            </Layout>
        </Fragment>
    )
}

export default Index