import React, {useState} from 'react';
import './styles/style.css'
import image from './images/carlogo.svg'

const LoginForm = ({onLogin}) =>{ 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [showLogin, setShowLogin] = useState(true);
    
      function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("https://homefitback-production-9d5d.up.railway.app/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
    return ( 
      
      <div className="login-card" style={{maxWidth: "300px", borderRadius:"6px"}} > 
      <div>
      <div className='card-body'>
        <h3 className='header'><img src={image} style={{width: "35px", height: "25px"}} />RANITE </h3>
        <form  onSubmit={handleSubmit}>
          <div className='form-group'>
            <input  type="username" id='username' placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)}   required className='form-control' />
          </div><br/>
          <div className='form-group'>
            <input type="password" required name='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}  className='form-control' />
          </div><br/>
          <div>
            <button id='btn' type='submit' >{isLoading ? "Loading..." : "Login"}</button>
          </div> 
        </form> 
        <div>
            {errors?.map((err) => (
            <div className='error-altert'key={err}>{err}</div>
            ))}
        </div>
      </div>
    </div>
  </div>    
      );
    }

export default LoginForm;