import axios from "axios";
import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";

const DetailMoto = (props) => {
    const {id} = props;
    const [brand, setBrand] = useState("");
    const [bName, setBName] = useState("");
    const [category, setCategory] = useState("");
    const [comment, setComment] = useState("");
    const [updatedAt, setUpdatedAt] = useState("");

    const [errors, setErrors] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/moto/${id}`)
            .then( res => {
                setBrand(res.data.brand);
                setBName(res.data.bName);
                setCategory(res.data.category);
                setComment(res.data.comment);
                setUpdatedAt(res.data.updated_at);
            })
            .catch(err => console.log(err));
    }, [])

    const deleteMoto = (moto_id) => {
        axios.delete(`http://localhost:8000/api/moto/${moto_id}`)
            .then((response) => {
                console.log(response);
                navigate('/moto/cat/${category');
            })
            .catch((err) => setErrors(err.response));
    };


    return (
        <div className="container">
            <h2>Details about {brand} - {bName}</h2>
            <table className="table table-hover">
                <tbody>
                    <tr>
                        <td style={{ width: "150px" }}>Brand</td>
                        <td>{brand}</td>
                    </tr>
                    <tr>
                        <td style={{ width: "150px" }}>Name/Model</td>
                        <td>{bName}</td>
                    </tr>
                    <tr>
                        <td style={{ width: "150px" }}>Category</td>
                        <td>{category}</td>
                    </tr>
                    <tr>
                        <td style={{ width: "150px" }}>Comment</td>
                        <td>{comment}</td>
                    </tr>
                    <tr>
                        <td style={{ width: "150px" }}>Last Updated</td>
                        {/* <td>{new Intl.DateTimeFormat('en-GB', { 
                            month: 'long', 
                            day: '2-digit',
                            year: 'numeric', 
                            }).format(new Date({updatedAt}))}</td> */}
                        <td>{updatedAt}</td>
                    </tr>

                </tbody>
            </table>
            <button type="button" className="btn btn-danger" onClick={(e) => {deleteMoto(id)}} >Delete</button>
        </div>
    )
}

export default DetailMoto;