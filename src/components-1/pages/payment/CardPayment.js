import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import './CardPayment.css';
import carsData from '../../data/CarsData';
import { useParams } from 'react-router-dom';
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useState } from 'react';


const Payment = () =>{

    const { slug } = useParams();
    const singleCarItem = carsData.find((item) => item.make === slug);

    const [data, setData] = useState({
        name: "",
        number: "",
        cvc: "",
        type: "",
        expiry: "",
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    return(
        <>
            <Navbar />
            <div className="mainscreen">
                <div className="payment-card">
                    <div className="leftside">
                        <div className='product'>
                            <Cards 
                                cvc={data.cvc}
                                expiry={data.expiry}
                                name={data.name}
                                number={data.number}
                                type={data.type}
                            />
                        </div>
                    </div>
                    <div className="rightside">
                        <form action="">
                            <h1>Pay With Card</h1>
                            <h3>Total Price: <span>${singleCarItem.price}</span></h3>
                            <h2>Payment Information</h2>
                            <p>Cardholder Name</p>
                            <input 
                                type="text"
                                name="name" 
                                className="inputbox" 
                                onChange={handleChange}
                            />
                                <p>Card Number</p>
                            <input 
                                type="number"  
                                name="number"
                                className="inputbox" 
                                id="card_number" 
                                required
                                onChange={handleChange}  
                            />

                            
                            <div className="expcvc">
                                <p className="expcvv_text">Expiry</p>
                                <input 
                                    type="date"
                                    name="expiry" 
                                    className="inputbox" 
                                    id="exp_date" 
                                    required
                                    onChange={handleChange}
                                />
                                    <p className="expcvv_text2">CVC</p>
                                <input 
                                    type="password" 
                                    className="inputbox" 
                                    name="cvc" 
                                    id="cvv" 
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="checkout-button">CheckOut</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Payment;