import React from "react"
import Layout from "../components/Layout"
import Image from '../components/Image';
import { Container, Row, Col } from 'react-grid-system';
import SEO from "../components/SEO"
import Line from "../components/Line";


const IndexPage = () => (
    <Layout>
        <SEO title="Hacktoberfest Open Hack Day - WebMob Technologies" />
        <Container>
            <Row style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",

            }}>
                <Col sm={6}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <h1 className="title" >
                            Hacktoberfest 2019 <span style={{ 'color': '#fff922' }}>@webmobtech</span>!
                    </h1>
                        <a className="register-btn" href="#">Register</a>
                    </div>
                </Col>
                <Col sm={6}>
                    <Image />
                </Col>
            </Row>

            <Row className="mt-5">
                <Col sm={12}>
                    <div className="section2 space">
                        <Line />
                        <h2 className="title is-2 is-spaced"> Event details</h2>
                        <p className="p">
                            Hacktoberfest<span className="reg">®</span> is open to everyone in our global community. Whether you’re a developer, student learning to code, event host, or company of any size, you can help drive growth of open source and make positive contributions to an ever-growing community. All backgrounds and skill levels are encouraged to complete the challenge.
                        </p>
                        <ul>
                            <li className="bullet">
                                <span className="p">Hacktoberfest is open to everyone in our global community!</span>
                            </li>
                            <li className="bullet">
                                <span className="p">Pull requests can be made in any GitHub-hosted repositories/projects.</span>
                            </li>
                            <li className="bullet">
                                <span className="p">Sign up anytime between October 1 and October 31.</span>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>


            <Row className="mt-5">
                <Col sm={12}>
                    <Line />
                    <h2 className="title is-2 is-spaced">Rules</h2>
                    <p className="p">
                        To qualify for the official limited edition Hacktoberfest shirt, you must register and make four pull requests (PRs) between October 1-31 (in any time zone). PRs can be made to any public repo on GitHub, not only the ones with issues labeled Hacktoberfest. If a maintainer reports your pull request as spam or behavior not in line with the project’s code of conduct, you will be ineligible to participate. This year, the first 50,000 participants who successfully complete the challenge will earn a T-shirt.
                        </p>
                </Col>
            </Row>
        </Container>


        <div className="mt-5 spread" >
            <div style={{ paddingTop: '10rem' }}>
                <Container >
                    <Row style={{ alignItems: 'center' }}>
                        <Col sm={6}>
                            <Line />
                            <h2 className="title is-2 is-spaced"> Spread the word!</h2>

                            <div className="social-link">
                                <a class="grow-shadow social" href="https://www.facebook.com/sharer/sharer.php?u=https://hacktoberfest.webmobtech.com">
                                    <svg width="36" height="31" viewBox="0 0 19 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.41406 36.5H12.0234V20.3984H17.1562L18 14H12.0234V9.57031C12.0234 8.58594 12.1641 7.8125 12.5859 7.32031C13.0078 6.75781 13.9219 6.47656 15.1875 6.47656H18.5625V0.78125C17.2969 0.640625 15.6094 0.5 13.6406 0.5C11.1094 0.5 9.14062 1.27344 7.66406 2.75C6.11719 4.22656 5.41406 6.26562 5.41406 8.9375V14H0V20.3984H5.41406V36.5Z" fill="white"></path>
                                    </svg>

                                    <span>Facebook</span>
                                </a>

                                <a class="grow-shadow social" href="https://ctt.ac/4xLO9">
                                    <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.2734 8.1875C33.6797 7.13281 34.9453 5.86719 36 4.32031C34.5938 4.95312 33.1875 5.375 31.7812 5.51562C33.3281 4.53125 34.4531 3.19531 35.0156 1.4375C33.5391 2.28125 31.9922 2.91406 30.3047 3.19531C29.6016 2.49219 28.7578 1.92969 27.8438 1.50781C26.9297 1.08594 25.9453 0.875 24.8906 0.875C23.5547 0.875 22.3594 1.22656 21.2344 1.85938C20.1094 2.5625 19.1953 3.47656 18.5625 4.60156C17.8594 5.72656 17.5781 6.99219 17.5781 8.25781C17.5781 8.82031 17.5781 9.38281 17.7188 9.94531C14.6953 9.80469 11.8828 9.10156 9.21094 7.69531C6.53906 6.35938 4.35938 4.53125 2.53125 2.21094C1.82812 3.40625 1.47656 4.67188 1.47656 5.9375C1.47656 7.20312 1.75781 8.39844 2.39062 9.45312C2.95312 10.5781 3.79688 11.4219 4.78125 12.125C3.58594 12.125 2.46094 11.7734 1.47656 11.1406V11.2812C1.47656 13.0391 2.03906 14.5859 3.16406 15.9219C4.28906 17.3281 5.69531 18.1719 7.38281 18.5234C6.67969 18.6641 6.04688 18.7344 5.41406 18.7344C4.99219 18.7344 4.5 18.7344 4.07812 18.6641C4.5 20.1406 5.34375 21.3359 6.60938 22.3203C7.875 23.3047 9.28125 23.7266 10.9688 23.7266C8.22656 25.8359 5.13281 26.8906 1.75781 26.8906C1.05469 26.8906 0.492188 26.8906 0 26.8203C3.375 29.0703 7.17188 30.125 11.3203 30.125C15.6094 30.125 19.4062 29.0703 22.7812 26.8203C25.8047 24.8516 28.1953 22.25 29.8828 18.875C31.5 15.7812 32.3438 12.4766 32.3438 9.10156C32.3438 8.67969 32.2734 8.39844 32.2734 8.1875Z" fill="white"></path>
                                    </svg>

                                    <span>Twitter</span>
                                </a>
                            </div>
                        </Col>
                        <Col sm={6} >
                            <div style={{ paddingTop: '5rem' }}>
                                <Image />
                            </div>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>

            </div>
        </div>
    </Layout >
)

export default IndexPage