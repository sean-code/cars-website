import './AllPayment.css';
import { Link } from 'react-router-dom';
import carsData from '../../data/CarsData';
import { useParams } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

const AllPayment = () => {
    const { slug } = useParams();
    const singleCarItem = carsData.find((item) => item.make === slug);

    return(
        <>
            <Navbar />
            <div className='mn-container'>
                <div className='btn-container'>
                <Link to={`/cars/${singleCarItem.make}/payment/mpesa`}>
                    <a className='btn-links' href={`/cars/${singleCarItem.make}/payment/mpesa`}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/2560px-M-PESA_LOGO-01.svg.png' style={{width: "70px"}}/>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Pay Via M-Pesa
                    </a>
                </Link>
                   
                    <Link to={`/cars/${singleCarItem.make}/payment/card`}>
                        <a className= 'btn-links' href={`/cars/${singleCarItem.make}/payment/card`}>
                            <img src='https://cdn3d.iconscout.com/3d/premium/thumb/credit-card-5706064-4755619.png' style={{width: "50px"}}/>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Pay Via Card
                        </a>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllPayment;