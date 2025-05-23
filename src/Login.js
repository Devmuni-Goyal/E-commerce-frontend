import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
   const [err, setErr] = useState(false);
    const [msg, setMsg] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function login(e) {
      e.preventDefault();
      try {
        const res = await axios.post('https://e-commerce-backend-74fz.onrender.com/api/login', {
          email,
          password
        });
        // Axios gives you parsed data in res.data
        console.log(res.data);
        navigate('/home');
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
      <form class="login-form" onSubmit={login} >
        <div class="phone-input">
          <div>Email: </div>
          <input type="" name = "email" placeholder="Enter your email" required onChange={(e)=>{setEmail(e.target.value)}} />
          <div>password: </div>
          <input type="" name = "password" placeholder="Enter your password" required onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" class="next-btn">Login</button>
      </form>
    </main>
  
        </header>
      </div>
    );
}

export default Login;