import './App.css';
import React,{useState,useEffect} from 'react';
import Login from './components-2/Login'
import Contact from './components-1/contact/Contact';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Appointment from './components-1/appointment/Appointment';
import CarListing from './components-1/hire/CarListing';
import Details from './components-1/pages/Details';
import Error from './components-1/error-page/Error';
import Payment from './components-1/pages/payment/CardPayment';
import AllPayment from './components-1/pages/payment/AllPayments';
import Mpesa from './components-1/pages/payment/Mpesa';

import Home from './Home /Home';
import About from './Home /About';
import Blog from './Home /Blog';
import BlogDetails from './Home /BlogDetails';
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  // Authentication Part

  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/blogs' element={<Blog/>}></Route>
          <Route path='/blogs/:slug' element={<BlogDetails/>}></Route>
          <Route path='/contacts' element={<Contact/>}></Route>
          <Route path='/services/appointment' element={<Appointment />}></Route>
          <Route path='/services/hire' element={<CarListing />}/>
          <Route path="/cars/:slug" element={<Details />}/>
          <Route path="*" element={<Error />} />
          <Route path="/cars/:slug/payment" element={<AllPayment />} />
          <Route path="/cars/:slug/payment/card" element={<Payment/>} />
          <Route path="/cars/:slug/payment/mpesa" element={<Mpesa/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
