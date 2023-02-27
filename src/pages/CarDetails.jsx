import React, { useEffect } from "react";

import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import AllPayment from "../components/UI/AllPayment";


const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.make === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.make}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.image} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">Hire this {singleCarItem.make}{' '}{singleCarItem.model}</h2>
                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    Ksh.{singleCarItem.price} / Week
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    (Year of Manufacture:{' '}{singleCarItem.year})             </span>
                </div>

                <p className="section__description" style={{color:'#000', fontSize:'1.2 rem'}}>
                <h3>Overview</h3>
                    <p className='desc'>The <span>{singleCarItem.make}{' '}{singleCarItem.model}</span> has a mileage of <span>{singleCarItem.mileage}</span> kpml. 
                        The <span>{singleCarItem.fuel_type}</span> car is of <span>{singleCarItem.transmission}</span><br/>transmission 
                        and encompasses an engine size of <span>{singleCarItem.engine_size}</span>. Enjoy this <span>{singleCarItem.year}</span><br /> manufactured car,
                        only at $<span>{singleCarItem.price}</span> per day!
                    </p>
                  {singleCarItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.transmission}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.mileage} mileage
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.fuel_type}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.make}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Method</h5>
                {/* <PaymentMethod /> */}
              </div>


              <AllPayment />





            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
