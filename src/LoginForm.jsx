import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


const LoginForm = (props) => { 
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, pass });
      const { token } = response.data;
      const decodedToken = jwt_decode(token);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(decodedToken.user));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input  type="email" name="email" id="email" placeholder="youremail@.com" value={email} onChange={(event) => setEmail(event.target.value)} />

                <label htmlFor="password">Password</label>
                <input  type="password" name="password" id="password" placeholder="******" value={pass} onChange={(event) => setPass(event.target.value)}/>

                <button type="Submit">Login</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>   
  );
};

export default LoginForm;
