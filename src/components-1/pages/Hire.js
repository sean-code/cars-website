import './Hire.css';
import { Link, useParams } from 'react-router-dom';
import carsData from '../data/CarsData';



const Hire = () =>{

    const handleSubmit = event => {
        // prevent page refresh
        event.preventDefault();
      }

      const { slug } = useParams();
      const singleCarItem = carsData.find((item) => item.make === slug);
  
    return(
        <>
            <div className="testbox">
                <form className='booking-form' action="https://app.headlessforms.cloud/api/v1/form-submission/4Ra8v1A1ij" method="POST">
                    <br/>
                    <h2> Booking Form </h2>
                    <p>Total: ${" "}{singleCarItem.price}</p>
                    <div className="columns">
                        <div className="item">
                            <label for="fname">Make of Car Hired<span>*</span></label>
                            <input id="fname" type="text" name="Make" value={singleCarItem.make} />
                        </div>
                        <div className="item">
                            <label for="fname">Model of Car Hired<span>*</span></label>
                            <input id="fname" type="text" name="Model" value={singleCarItem.model} />
                        </div>
                        <div className="item">
                            <label for="fname">Fuel Type<span>*</span></label>
                            <input id="fname" type="text" name="Fuel-Type" value={singleCarItem.fuel_type} />
                        </div>
                        <div className="item">
                            <label for="fname">Year of Manufacture<span>*</span></label>
                            <input id="fname" type="text" name="YOM" value={singleCarItem.year} />
                        </div>
                        <div className="item">
                            <label for="fname">First Name<span>*</span></label>
                            <input id="fname" type="text" name="first-name" />
                        </div>
                        <div className="item">
                            <label for="lname"> Last Name<span>*</span></label>
                            <input id="lname" type="text" name="last-name" />
                        </div>
                        <div className="item">
                            <label for="address">Email Address<span>*</span></label>
                            <input id="address" type="text"   name="address" />
                        </div>
                        <div className="item">
                            <label for="zip">Phone Number<span>*</span></label>
                            <input id="zip" type="text"   name="zip" required/>
                        </div>
                        <div className="item">
                            <label for="phone">From Address<span>*</span></label>
                            <input id="phone" type="tel"   name="phone" />
                        </div>
                        <div className="item">
                            <label for="phone">To Address<span>*</span></label>
                            <input id="phone" type="tel"   name="phone" />
                        </div>
                        <br/>
                    </div>
                    <div className="columns">
                        <div className="item">
                            <label for="checkindate">Check-in Date <span>*</span></label>
                            <input id="checkindate" type="date" name="checkindate" />
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div className="item">
                            <label for="checkoutdate">Check-out Date <span>*</span></label>
                            <input id="checkoutdate" type="date" name="checkoutdate" />
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div className="item">
                            <p>Check-in Time </p>
                            <select>
                                <option value="" disabled selected>Select time</option>
                                <option value="1" >Morning</option>
                                <option value="2">Afternoon</option>
                                <option value="3">Evening</option>
                            </select>
                        </div>
                        <div className="item">
                            <p>Check-out Time </p>
                            <select>
                                <option  value="4" disabled selected>Select time</option>
                                <option value="5" >Morning</option>
                                <option value="6">Afternoon</option>
                                <option value="7">Evening</option>
                            </select>
                        </div>             
                    </div>
                    <div className="item">
                        <label for="instruction">Any Additional Information</label>
                        <textarea id="instruction" rows="3"></textarea>
                    </div>
                    <div className="btn-block">
                    <button type="submit" href={`/cars/${singleCarItem.make}/payment`} >
                            <Link to={`/cars/${singleCarItem.make}/payment`}>
                                <a href={`/cars/${singleCarItem.make}/payment`} >
                                    Submit
                                </a>
                            </Link>
                        </button>
                            
                        
                    </div>
                </form>
            </div>
        </>
    )
}

export default Hire;