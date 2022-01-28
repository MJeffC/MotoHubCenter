import axios from "axios";
import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const Registration = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const postData = {
            name,
            username,
            email,
            password,
            confirmPassword,
        }

        axios.post("http://localhost:8000/api/register", postData)
            .then( (response)  => {
                console.log("SUCCESS", response);
                navigate('/login');
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
                        <label htmlFor="name" className="form-label">Name</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="form-label">Username</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
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
                    <div>
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="confirmPassword"
                            className="form-control"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div style= {{marginTop: "10px"}}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Registration;