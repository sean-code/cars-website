import React from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <img src={masterCard} alt="" />
      </div>
    </>
  );
};

export default PaymentMethod;
