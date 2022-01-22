import axios from "axios";
import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const Category = () => {
    const [moto, setMoto] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/moto")
            .then((res) => {
                setMoto(res.data);
            });
    }, [])

    return (
        <div className="container">

        </div>
    )
}

export default Category;