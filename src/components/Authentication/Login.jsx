import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { styles }from '../Authentication/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }

    return(
        <>
            <main >

                    <div className="box">
                        <div className="header">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img  className="moving-car" src="data:image/png;base64,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" alt="" />
                        </div>
                            <h1 className="header-text">Log In</h1>
                            <p style={{textAlign: 'center'}}>Welcome!!</p>
                        </div>

                        <form className="login-Form" action="/login" method="post">

                        <div className="email-input">
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />
                        </div>

                        <div className="password-input">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>

                        <div className="login-btn">
                            <button type="submit" name="button" onClick={onLogin}>
                                Log in
                            </button>
                        </div>

                        </form>

                        <div className="choose">
                        <p>
                            Need an account? { ` ` }
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                        <p>
                            Or go <a href="/">Home</a>.
                        </p>
                        </div>


                    </div>
                </main>
            </>
            )
        }

export default Login
