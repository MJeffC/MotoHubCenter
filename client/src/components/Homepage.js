import axios from "axios";
import React from 'react';
import { navigate } from '@reach/router';

const Homepage = () => {
    const goToRegister = () => {
        navigate('/register');
    }

    const goToLogin = () => {
        navigate('/login');
    }

    return (
        <div className="container">
            <button style={{margin: "10px"}} type="button" className="btn btn-primary" onClick={(e) => {goToRegister()}} >Register</button>
            <button style={{margin: "10px"}} type="button" className="btn btn-info" onClick={(e) => {goToLogin()}} >Login</button>
        </div>
    )
}

export default Homepage;