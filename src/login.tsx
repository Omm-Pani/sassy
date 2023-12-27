import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
       console.log('Login Attempt:', email, password);

      try {
        const {data} = await axios.post("http://localhost:8000/login",{
            email,
            password,
        });
        console.log(data);
        navigate("/dashboard");
        
      } catch (error) {
        console.log(error);
        
      }

    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Sassy Login</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Log In</button>
                <p className="signup-link">
                    Not a member? <span onClick={()=>{
                        navigate("/signup")
                    }}>Sign up now</span>
                </p>
            </form>
        </div>
    );
};

export default Login;
