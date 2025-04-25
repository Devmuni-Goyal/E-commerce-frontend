import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate();
   const [err, setErr] = useState(false);
    const [msg, setMsg] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    async function signup(e) {
      e.preventDefault();
      try {
        const res = await axios.post('https://e-commerce-backend-74fz.onrender.com/api/signup', {
          email,
          password,
          confirmPassword,
          name
        });
        // Axios gives you parsed data in res.data
        console.log(res.data);
        navigate('/login');
        // Example: setMsg(res.data.message);
      } catch (err) {
        // If server sends an error response, it's in err.response.data
        console.error(err.response?.data || err.message);
        setMsg(err.response?.data?.message || "Something went wrong");
        setErr(true);
      }
    }
    return (
      <div className="App">
        <header className="App-header">
        <header class="header">
    </header>
  
    <main class="login-container">
      {err&&<p>{msg}</p>}
      <form class="login-form" onSubmit={signup} >
        <div class="phone-input">
        <div>Name: </div>
        <input type="" name = "name" placeholder="Enter your name" required onChange={(e)=>setName(e.target.value)}/>
          <div>Email: </div>
          <input type="" name = "email" placeholder="Enter your email" required onChange={(e)=>{setEmail(e.target.value)}} />
          <div>password: </div>
          <input type="" name = "password" placeholder="Enter your password" required onChange={(e)=>setPassword(e.target.value)}/>
          <div>Confirm Password: </div>
          <input type="" name = "password" placeholder="Enter your password" required onChange={(e)=>setConfirmPassword(e.target.value)}/>
        </div>
        <button type="submit" class="next-btn">Register</button>
      </form>
    </main>
  
        </header>
      </div>
    );
}

export default Signup;