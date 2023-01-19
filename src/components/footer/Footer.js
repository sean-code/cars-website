import React from "react";
import './Footer.css';
import facebook from './icons/facebook.svg';
import instagram from './icons/instagram.svg';
import mail from './icons/mail.svg';
import locale from './icons/map-pin.svg';
import phone from './icons/phone.svg';
import tweet from './icons/twitter.svg';
import { Link } from "react-router-dom";

const Footer = ()=> {
    return (
        <>
            <div className='footer'>
                <ul className="main-footer">
                    <li>
                        Company
                        <ul className='f-submenu'>
                            <Link to='/about'>
                                <li>About</li>
                            </Link>
                            <Link to='/contacts'>
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </li>
                    <li>
                        Services
                        <ul className="f-submenu">
                            <Link to='/services/hire'>
                                <li>
                                    Hire
                                </li>
                            </Link>
                            <Link to='/services/appointment'>
                                <li>Appointment</li>
                            </Link>
                        </ul>
                    </li>
                    <li>
                        Stalk us on
                        <ul className="f-submenu">
                            <li>
                                <img src={instagram} alt='instagram' style={{'backgroundColor': 'white'}}/>{' '}Instagram</li>
                            <li>
                                <img src={tweet} alt='tweet' style={{'backgroundColor': 'white'}}/>{' '}Twitter</li>
                            <li>
                                <img src={facebook} alt='meta' style={{'backgroundColor': 'white'}}/>{' '}Meta</li>
                        </ul>
                    </li>
                    <li>
                        Contact us
                        <ul className="f-submenu">
                            <li>
                                <img src={phone} alt='phone' style={{'backgroundColor': 'white'}}/>{' '}
                                +97654598765
                            </li>
                            <li>
                                <img src={mail} alt='mail' style={{'backgroundColor': 'white'}}/>{' '}
                                info@carental.com
                            </li>
                            <li>
                                <img src={locale} alt='locale' style={{'backgroundColor': 'white'}}/>{' '}
                                Nairobi, KE
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="copyright">
                 © Copyright 2023, Moringa. All rights reserved.
                </p>
            </div>

        </>
    )
}

export default Footer;
