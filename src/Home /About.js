import React from "react";

import CommonSection from "../mycomponents/UI/CommonSection";
import Helmet from "../mycomponents/Helmet/Helmet";
import AboutSection from "../mycomponents/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
//import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../mycomponents/UI/OurMembers";
import "../mystyles/about.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";



const About = () => {
  return (
    <>
    <Navbar/>
    
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                At our car rental company, we are dedicated to providing our 
                customers with safe and reliable transportation solutions. We understand the importance 
                of safety on the road and take it very seriously. That's why we regularly maintain and 
                service our vehicles to ensure they are in top condition. Our team is also available 24/7 to answer any questions or concerns 
                you may have. We are committed to ensuring a safe and enjoyable ride for all our customers
                </p>

                <p className="section__description">
                In addition to regular maintenance and service, we also have strict cleaning protocols in place to ensure that all our vehicles 
                are thoroughly sanitized before and after each rental. Our team takes extra care to clean and disinfect high-touch 
                areas such as door handles, steering wheels and seats. We also provide our customers with hand sanitizers 
                and face masks if needed.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+97654598765</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
       </section> 

      {/* <BecomeDriverSection /> */}

       <section> 
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section> 
      <Footer/>
    </Helmet>
    </>
  );
};

export default About;
