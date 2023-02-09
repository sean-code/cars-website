import './Mpesa.css';
import { useParams } from 'react-router-dom';
import carsData from '../../data/CarsData';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';


const Mpesa = () => {

    const { slug } = useParams();
    const singleCarItem = carsData.find((item) => item.make === slug);

    return(
        <>
            <Navbar />
            <div class="mainscreen">
                <div class="payment-card">
                    <div class="leftside">
                        <div className='product'>
                            <img src='https://play-lh.googleusercontent.com/bRZF74-13jknePwUd1xam5ZCSdAJVuI_wqtkrisBgu7EEh1jobh2boZihlk-4ikY_S3V' style={{width: "300px"} } alt="lipa-na-mpesa"/>
                        </div>
                    </div>
                    <div class="rightside">
                        <form action="">
                            <h1>Pay Via M-Pesa</h1>
                            <h2>Payment Information</h2>
                            <h3>Total Price: <span>${singleCarItem.price}</span></h3>
                            <span><p><i>
                                YOU WILL BE PROMPTED TO ENTER YOUR PIN VIA AN STK PUSH
                            </i></p></span>
                                <p>Phone Number</p>
                            <input 
                                type="number"  
                                name="number"
                                class="inputbox" 
                                id="card_number" 
                                required 
                            />
                            <button type="submit" class="checkout-button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Mpesa;