import React from "react";
import { useState } from "react";
import './Contact.css';
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import NavBar from "../navbar/Navbar";




const Contact = () => {

    // const [message, setMessage] = useState('');

    // const handleSubmit = event => {
    //   // 👇️ prevent page refresh
    //   event.preventDefault();
  
    //   alert('form submitted ✅');
    // };

    return(
        <>
            <NavBar/>
           <div className="contact-background">
                <div className="contact-container">  
                    <form id="contact" action="https://app.headlessforms.cloud/api/v1/form-submission/4Ra8v1A1ij" method="post">
                        <h3>Contact Us</h3>                    
                        <input className='input1' placeholder="   NAME:" type="text" name="Name"  required="required"></input>
                        <input className='input1' placeholder="   EMAIL:" type="email" name="Email" tabindex="2"  required="required"></input>
                        <input className='input2' placeholder="   TYPE YOUR MESSAGE:" name="Message" tabindex="5"  required="required"></input>
                            <button name="submit" type="submit" id="contact-submit">Submit</button>
                    </form>
                </div>
           </div>
            <Footer />
        </>
    )
}

export default Contact;