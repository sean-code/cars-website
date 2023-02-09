import React, { useState } from 'react';
import './styles/style.css'

const ResetPasswordForm = (props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const[success, setSuccess] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
     setSuccess("Password Changed Succesfully😊")
    } else {
      setError('Passwords do not match😕!');
     
    }
  }
  
  return (
    <div className='resetform'>
        <h3 className='header'>RESET PASSWORD</h3>
    <form onSubmit={handleSubmit}>
      
        <input
         placeholder='New Password'
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
    <br/>
    <br/>
      
        <input
        placeholder='Confirm Password'
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
    
      <br/>
      <br/>
      {success && <p className="sucess">{success}</p>}
      {error && <p className="error">{error}</p>}
      <button id='btn' type="submit">Submit</button>
    </form>
    </div>
  );
};

export default ResetPasswordForm;