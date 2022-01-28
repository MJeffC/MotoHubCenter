import axios from "axios";
import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [err, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErr("");
        setSuccessMsg("");
        const postData = {
            email,
            password,
        }

        // axios.post("http://localhost:8000/api/login", postData, { withCredentials: true })
        axios.post("http://localhost:8000/api/login", postData)
            .then( (response)  => {
                // console.log("SUCCESS", response);
                // console.log("Success", response.data.message);
                setSuccessMsg(response.data.message);
                navigate('/userProfile');
            })
            .catch(( err ) => {
                console.log(err.response.data.err);
                setErr(err.response.data.err)
            });
    };

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <h2>Login</h2>
                {err && <h2 style={{ color: "red" }}>{err}</h2>}
                {successMsg.lenth > 0 && (<h2 style={{ color: "green" }}>{successMsg}</h2>)}
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