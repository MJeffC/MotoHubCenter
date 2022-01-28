import axios from "axios";
import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";

const EditMoto = props => {
    const {id} = props;
    const [brand, setBrand] = useState("");
    const [bName, setBName] = useState("");
    const [category, setCategory] = useState("");
    const [comment, setComment] = useState("");

    const [errors, setErrors] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/moto/${id}`)
            .then( res => {
                setBrand(res.data.brand);
                setBName(res.data.bName);
                setCategory(res.data.category);
                setComment(res.data.comment);
            })
            .catch(err => console.log(err));
    }, [])

    const updateMoto = (e) => {
        e.preventDefault();
        const postData = {
            brand,
            bName,
            category,
            comment,
        }
        console.log(postData);
        axios.put(`http://localhost:8000/api/moto/${id}`, postData)
            .then(response => {
                console.log(postData);
                navigate(`/moto/cat/${category}`);
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div className="container">
            <form onSubmit={updateMoto}>
                <h3>Edit {brand} - {bName}</h3>
                <div>
                    <label htmlFor="brand" className="form-label" style={{ margin: "10px" }}>
                        Brand
                    </label>
                </div>
                <div>
                    <input
                        style={{ border: "double" }}
                        type="text"
                        id="brand"
                        className="form-control"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="bName" className="form-label" style={{ margin: "10px" }}>
                        Name/Model
                    </label>
                </div>
                <div>
                    <input
                        style={{ border: "double" }}
                        type="text"
                        id="bName"
                        className="form-control"
                        value={bName}
                        onChange={(e) => setBName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="category" className="form-label" style={{ margin: "10px" }}>
                        Category
                    </label>
                </div>
                <div>
                    <select
                        style={{ border: "double" }}
                        value={category}
                        className="form-control"
                        id="category"
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="">
                            Open this select menu
                        </option>
                        <option value="Helmet">Helmet</option>
                        <option value="Gloves">Gloves</option>
                        <option value="Jacket">Jacket</option>
                        <option value="Pants">Pants</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Motorcycle">Motorcycle</option>
                        <option value="Accessories">Accessories</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="comment" className="form-label" style={{ margin: "10px" }}>
                        Comment
                    </label>
                </div>
                <div>
                    <textarea
                        style={{ border: "double" }}
                        type="text"
                        id="comment"
                        className="form-control"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditMoto;