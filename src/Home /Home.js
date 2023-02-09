import React from "react";
import HeroSlider from "../mycomponents/UI/HeroSlider";
import Helmet from "../mycomponents/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../mycomponents/UI/FindCarForm";
import AboutSection from "../mycomponents/UI/AboutSection";
import ServicesList from "../mycomponents/UI/ServicesList";
import Testimonial from "../mycomponents/UI/Testimonial";
import BlogList from "../mycomponents/UI/BlogList";
import Footer from "../components-1/footer/Footer";
import Navbar from "../components-1/navbar/Navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h5 className="section__subtitle">Our clients say</h5>
              <h2 className="section__title"style={{"fontWeight":"800"}}>Testimonials</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
       <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h5 className="section__subtitle">Explore our blogs</h5>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section> 
      <Footer/>
    </Helmet>
    </>
    
  );
};

export default Home;
