import { useParams } from 'react-router-dom';
import React from 'react';
import './Details.css';
import carsData from '../data/CarsData';
import Hire from './Hire';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';


const Details = () => {
    const { slug } = useParams();
    const singleCarItem = carsData.find((item) => item.make === slug);

    return(
        <>
            <Navbar />            
            <div className="title">
                <h2>
                    Hire this <span>{singleCarItem.make}{' '}{singleCarItem.model}</span>
                </h2>
            </div>
            <div className="app">
                <div className="image-car">
                    <img src ={singleCarItem.image} alt="This is a screenshot" />
                </div>
                <div className="description">
                    <h3>Overview</h3>
                    <p className='desc'>The <span>{singleCarItem.make}{' '}{singleCarItem.model}</span> has a mileage of <span>{singleCarItem.mileage}</span> kpml. 
                        The <span>{singleCarItem.fuel_type}</span> car is of <span>{singleCarItem.transmission}</span><br/>transmission 
                        and encompasses an engine size of <span>{singleCarItem.engine_size}</span>. Enjoy this <span>{singleCarItem.year}</span><br /> manufactured car,
                        only at $<span>{singleCarItem.price}</span> per day!
                    </p>
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                    <div className="info">
                        <ul>
                            <li><strong>Make: </strong>{singleCarItem.make}</li>
                            <li><strong>Model: </strong>{singleCarItem.model}</li>
                            <li><strong>Price: {''} </strong>${singleCarItem.price}</li>
                        </ul>
                        <ul>
                            <li><strong>Mileage: </strong> {singleCarItem.mileage}</li>
                            <li><strong>Year of Manufacture: </strong>{singleCarItem.year}</li>
                        </ul>
                    </div>
                </div>
		    </div>
            <Hire />
            <Footer />
        </>
    )

}

export default Details;