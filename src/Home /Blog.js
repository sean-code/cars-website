import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components3/Helmet/Helmet";
import CommonSection from "../components3/UI/CommonSection";
import BlogList from "../components3/UI/BlogList";
import Navbar from "../components-1/navbar/Navbar";
import Footer from "../components-1/footer/Footer";

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
