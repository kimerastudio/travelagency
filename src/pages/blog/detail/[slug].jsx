import Layout from '@/Components/Layout/Layout'
import { useHostname } from '@/Components/Provider/HostnameProvider';
import SectionDownload from '@/Components/Section/SectionDownload';
import { ArrowRightSvg } from '@/Components/svg/Svg';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export async function getServerSideProps({ params }) {
  const { slug } = params;
  console.log(slug)
  return {
    props: {
      slug,
    },
  };
}

const SlugData = ({ slug }) => {
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
  ]

  return (
    <Fragment>
      <Layout title='Blog Detail' description='Blog Detal Desc'>
        <section>
          <Container>
            <Row className='gap-y-6'>
              <Col className='md:!order-1 order-2' md={4}>
                <div className="">

                  <div className=" mb-3">
                    <p className='text__14 text-Msecondary mb-2'>Author</p>
                    <h5 className='text__18'>Dr. John Smith</h5>
                  </div>
                  <div className=" mb-3">
                    <p className='text__14 text-Msecondary mb-2'>Published</p>
                    <h5 className='text__18'>October 13, 2023</h5>
                  </div>
                  <div >
                    <p className='text__14 text-Msecondary mb-2'>Share with:</p>
                    <div className="flex gap-2">
                      <a href="#!">
                        <img src={originalUrl + "/images/sos (1).svg"} alt="" />
                      </a>
                      <a href="#!">
                        <img src={originalUrl + "/images/sos (2).svg"} alt="" />
                      </a>
                      <a href="#!">
                        <img src={originalUrl + "/images/sos (3).svg"} alt="" />
                      </a>
                      <a href="#!">
                        <img src={originalUrl + "/images/sos (4).svg"} alt="" />
                      </a>
                    </div>
                  </div>

                </div>
              </Col>
              <Col className='order-1 md:!order-2' md={8}>
                <h2 className='text__48 font-medium'>The Importance of Doctor Performance</h2>

                <img src={originalUrl + "/images/img.png"} className='w-full object-cover rounded-xl mt-3 mb-4' alt="" />

                <p className='font-medium text__18 mb-3 leading-relaxed'>When it comes to our health, few things are as crucial as the performance of our doctors. The expertise and skills of healthcare professionals directly impact patient outcomes, treatment success rates, and overall healthcare quality. It is vital to recognize and understand the importance of doctor performance in order to ensure the best possible care for individuals and communities.</p>

                <div className="mb-3">
                  <h5 className='font-semibold text__18 mb-1 leading-relaxed'>1. Patient Outcomes and Mortality Rates</h5>
                  <p className='text__18 leading-relaxed'>Extensive research has been conducted to investigate the relationship between doctor performance and patient outcomes. One study published in The Lancet found that higher-performing doctors have lower patient mortality rates across a variety of medical conditions. These findings emphasize the critical role that doctors play in saving lives and enhancing the quality of care.</p>
                </div>
                <div className="mb-3">
                  <h5 className='font-semibold text__18 mb-1 leading-relaxed'>2. Treatment Success and Patient Satisfaction</h5>
                  <p className='text__18 leading-relaxed'>Doctor performance also significantly influences treatment success and patient satisfaction. A well-performing doctor possesses the skills and knowledge to accurately diagnose health conditions, devise effective treatment plans, and monitor patient progress. A study published in JAMA Internal Medicine revealed that patients treated by higher-performing doctors experienced better health outcomes and higher satisfaction levels.</p>
                </div>
                <div className="mb-3">
                  <h5 className='font-semibold text__18 mb-1 leading-relaxed'>3. Efficient Resource Utilization and Healthcare Costs</h5>
                  <p className='text__18 leading-relaxed'>Effective doctor performance can contribute to efficient resource utilization and cost-effective healthcare delivery. Doctors who implement evidence-based practices, minimize unnecessary tests or procedures, and understand healthcare systems can optimize resource allocation and reduce healthcare costs. A study published in the Journal of General Internal Medicine indicated that higher-performing doctors were associated with lower healthcare expenditures. This highlights the potential financial benefits of prioritizing doctor performance.</p>
                </div>
                <div className="mb-3">
                  <h5 className='font-semibold text__18 mb-1 leading-relaxed'>4. Continual Improvement and Advancement in Medical Practices</h5>
                  <p className='text__18 leading-relaxed'>Focusing on doctor performance encourages ongoing learning, professional development, and the adoption of innovative medical practices. Encouraging doctors to undergo regular training and participate in performance-improvement programs helps them stay abreast of the latest advancements and evidence-based treatments. This commitment to continuous improvement ultimately benefits patients and contributes to the advancement of healthcare as a whole.</p>
                </div>

                <p className='font-medium text__18 mb-3 leading-relaxed'>In conclusion, the importance of doctor performance cannot be understated. Medical professionals directly impact patient outcomes, treatment success, healthcare costs, and the overall quality of care. By prioritizing doctor performance, we pave the way for better healthcare for individuals and communities. It is essential to provide doctors with the support and resources they need to continually improve and deliver the best possible care to their patients.</p>

              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <h3 className='font-medium text__48 mb-4'>Related Post</h3>

            <Row className='gap-y-6'>
              {
                DataBlog.map((obj) => {
                  return <Col md={4}>
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

              <a href="#!" className='mt-[2rem] inline-block px-4 py-3 rounded-[12px] text-Mgreen border !border-[rgba(0,118,96,0.2)] font-medium text__16'>
                Load more post
              </a>
            </div>
          </Container>
        </section>

        <SectionDownload />
      </Layout>
    </Fragment>
  )
}

export default SlugData