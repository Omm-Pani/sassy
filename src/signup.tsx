import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
    const navigate = useNavigate(); 
    const [full_name, setFull_name] = useState('')
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Signup Attempt:', phone, email, password);

      try {
        const {data} = await axios.post("https://sassy-server.onrender.com/register",{
            full_name,
            phone,
            email,
            password,
        });
        console.log(data);
        if (data) {
            navigate("/dashboard")
        }
      } catch (error) {
        console.log(error);
      }



    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Create Account</h2>
                <div className="input-group">
                    <label htmlFor="Full_name">Full_name</label>
                    <input
                        type="tel"
                        id="full_name"
                        value={full_name}
                        onChange={(e) => setFull_name(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
