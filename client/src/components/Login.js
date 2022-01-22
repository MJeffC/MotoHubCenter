import axios from "axios";
import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const postData = {
            email,
            password,
        }

        axios.post("http://localhost:8000/api/login", postData)
            .then( (response)  => {
                console.log("SUCCESS", response);
                navigate('/');
            })
            .catch(( err ) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            });
    };

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <h2>Register</h2>
                <div style={{ width: "45%" }}>
                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label">Password</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div style= {{marginTop: "10px"}}>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;