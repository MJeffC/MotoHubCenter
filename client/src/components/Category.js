import axios from "axios";
import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const Category = (props) => {
    const cat = props.category;
    const [motos, setMotos] = useState([]);
    const [errors, setErrors] = useState("");
    console.log("props1: ", {cat});
    console.log("props2: ", props.category);

    // const [triggerRequest, setTriggerRequest] = useState(false);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/moto/cat/${cat}`)
            .then(res => {
                console.log("useEffect: ", res.data);
                setMotos(res.data);
            })
            // .catch(err => console.log(err.res));
    }, []);

    const editMoto = (moto_id) => {
        console.log("in Edit Moto");
        axios.get(`http://localhost:8000/api/moto/${moto_id}`)
            .then((response) => {
                navigate(`/moto/${moto_id}/edit`);
                console.log("transferred to edit");
            })
            .catch((err) => setErrors(err.response));
    };

    const detailMoto = (moto_id) => {
        axios.get(`http://localhost:8000/api/moto/${moto_id}`)
            .then((response) => {
                navigate(`/moto/${moto_id}/detail`);
                console.log("transferred to detail");
            })
            .catch((err) => setErrors(err.response));
    };

    const deleteMoto = (moto_id) => {
        axios.delete(`http://localhost:8000/api/moto/${moto_id}`)
            .then((response) => {
                console.log(response);
                // setTriggerRequest(!triggerRequest);
                navigate('/userProfile');
            })
            .catch((err) => setErrors(err.response));
    };

    return (
        <div className="container">
            <h3>Category: {cat}</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th style={{width: "100px"}}>Brand</th>
                        <th style={{width: "250px"}}>Name/Model</th>
                        <th style={{width: "200px"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {motos.map((moto, index) => {
                        return (
                        <tr key={index}>
                            <td>{moto.brand}</td>
                            <td>{moto.bName}</td>
                            <td>
                                <button type="button" style={{ margin: "0px 15px 0px 15px", height: "25px", padding: "0px 10px" }} className="btn btn-primary" onClick={(e) => {detailMoto(moto._id)}} >Details</button>
                                <button type="button" style={{ margin: "0px 15px 0px 15px", height: "25px", padding: "0px 10px" }} className="btn btn-secondary" onClick={(e) => {editMoto(moto._id)}} >Edit</button>
                                <button type="button" style={{ margin: "0px 15px 0px 15px", height: "25px", padding: "0px 10px" }} className="btn btn-danger" onClick={(e) => {deleteMoto(moto._id)}} >Delete</button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Category;