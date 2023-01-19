import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../mycomponents/Helmet/Helmet";
import CommonSection from "../mycomponents/UI/CommonSection";
import BlogList from "../mycomponents/UI/BlogList";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Blog = () => {
  return (
    <>
    <Navbar/>
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
    <Footer/>
    </>
  );
};

export default Blog;
