import { Fragment } from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './Appointment.css';

function Appointment(){

        const handleSubmit = event => {
      // prevent page refresh
      event.preventDefault();
    }

    return(
        <Fragment>
            <Navbar />
            <div className="appointment">
                <form className='appointment-form' onSubmit={handleSubmit}>
                    <div className="bannerr">
                        <h2>Appointment Form</h2>
                    </div>
                    <p>Our fleet consists of a wide range of Saloon’s, Mid SUVs, SUVs, Double Cabins, Vans and Buses. 
                        <br />All our vehicles are maintained to exceptional standards and are regularly updated to the latest models.
                        <br />Kindly fill the form below to book an appointment for a test drive
                    </p>
                    <br/>
                    <div className="columns">
                        <div className="item">
                            <label for="fname" className='name-tags'>First Name<span>*</span></label>
                            <input id="fname" type="text" name="fname" />
                        </div>
                        <div className="item">
                            <label for="lname" className='name-tags'> Last Name<span>*</span></label>
                            <input id="lname" type="text" name="lname" />
                        </div>
                        <div className="item">
                            <label for="address" className='name-tags'>Email Address<span>*</span></label>
                            <input id="address" type="text"   name="address" />
                        </div>
                        <div className="item">
                            <label for="zip" className='name-tags'>Phone Number<span>*</span></label>
                            <input id="zip" type="text"   name="zip" required/>
                        </div>
                        <br/>
                    </div>
                    <div className="columns">
                        <div className="item">
                            <label for="checkindate" className='name-tags'>Check-in Date <span>*</span></label>
                            <input id="checkindate" type="date" name="checkindate" />
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div className="item">
                            <p className='name-tags'>Check-in Time </p>
                            <select>
                                <option value="" disabled selected>Select time</option>
                                <option value="1" >Morning</option>
                                <option value="2">Afternoon</option>
                                <option value="3">Evening</option>
                            </select>
                        </div>   
                        <div className="item">
                            <p className='name-tags'>Persons Capacity</p>
                            <select>
                                <option value="8" disabled selected>Number of adults</option>
                                <option value="1 person">1 Person</option>
                                <option value="2 person">2 Person</option>
                                <option value="3 person">3 Person</option>
                                <option value="4 person">4 Person</option>
                                <option value="5+ person">5+ Person</option>
                            </select>
                        </div>          
                    </div>
                    <div className="item">
                        <label for="instruction" className='textarea-appointment'>Any Additional Information</label>
                        <textarea id="instruction" rows="4"></textarea>
                    </div>
                    <div className="btn-block">
                        <button type="submit" href="/">Submit</button>
                    </div>
                </form>
            </div>
            <Footer />
        </Fragment>

    )
}

export default Appointment;