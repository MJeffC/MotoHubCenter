import axios from "axios";
import React, { useState } from 'react';
import { navigate } from '@reach/router';

const Homepage = () => {

    const [errors, setErrors] = useState("");

    const goToRegister = () => {
        navigate('/register');
    }

    const goToLogin = () => {
        navigate('/login');
    }

    const goToLogout = () => {
        axios.post(`http://localhost:8000/api/logout`, {}, { withCredentials: true})
			.then((response) => {
                console.log(response);
				navigate("/");
			})
			.catch((err) => console.log(err));
    }

    return (
        <div className="wrapper">
            <div className="button-section">
                {/* <h3>Click button below to Register</h3> */}
                <button style={{margin: "10px"}} type="button" className="btn btn-primary" onClick={() => {goToRegister()}} >Register</button>
            </div>
            <div className="button-section">
                {/* <h3>Click button below to Login</h3> */}
                <button style={{margin: "10px"}} type="button" className="btn btn-info" onClick={() => {goToLogin()}} >Login</button>
            </div>
            <div className="button-section">
                {/* <h3>Click button below to Logout</h3> */}
                <button style={{margin: "10px"}} type="button" className="btn btn-secondary" onClick={() => {goToLogout()}} >Logout</button>
            </div>
        </div>
    )
}

export default Homepage;