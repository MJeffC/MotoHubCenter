import axios from "axios";
import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";

const UserProfile = () => {
	const [brand, setBrand] = useState("");
	const [bName, setBName] = useState("");
	const [category, setCategory] = useState("");
	const [comment, setComment] = useState("");
	const [authErrors, setAuthErrors] = useState("");
	const [errors, setErrors] = useState("");

	const [collections, setCollections] = useState("");
	const [users, setUsers] = useState("");

	// useEffect(() => {
	// 	axios.get("http://localhost:8000/api/moto")
	// 	.then( (res) => {
	// 		setCollections(res.data);
	// 	});
	// }, [])

	// const handleMotoSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const postData = {
	// 		brand,
	// 		bName,
	// 		category,
	// 	}

	// 	console.log("postData", postData);

	// 	try {
	// 		// const newPost = await axios.post("https://localhost:8000/api/moto",postData,{withCredentials: true,});
	// 		const newPost = await axios.post("http://localhost:8000/api/moto", postData);
	// 		console.log(newPost);
	// 		navigate(`/category/${category}`);
	// 	} catch (error) {
	// 		console.log(error.message);
	// 		if (error.response.status === 401) {
	// 			console.log("401");
	// 			setAuthErrors("You must be logged in to add new item");
	// 		} else {
	// 			console.log("Success");
	// 			setErrors(error.response.data.errors);
	// 		}
	// 	}
	// };

	const handleMotoSubmit = (e) => {
		e.preventDefault();
		const postData = {
			brand,
			bName,
			category,
			comment,
		}

	console.log("postData, ", postData);

	axios.post("http://localhost:8000/api/moto", postData)
		.then( (response) => {
			console.log("Success", response);
			navigate(`/moto/cat/${category}`);
		})
		.catch((err) => {
			console.log(err.response.data.errors);
			setErrors(err.response.data.errors);
		});
	}

	const goToLogout = () => {
        // axios.post(`http://localhost:8000/api/logout`, {}, { withCredentials: true})
		axios.post(`http://localhost:8000/api/logout`)
			.then((response) => {
                console.log(response);
				navigate("/");
			})
			.catch((err) => console.log(err));
    }

	return (
		<div className="container">
			{/* <div>
				<button 
					style={{margin: "10px"}} 
					type="button" 
					className="btn btn-secondary" 
					onClick={() => {goToLogout()}} >
						Logout
				</button>
			</div> */}
			<div>
				<h2><i>Add New Item</i></h2>
			</div>
			<div>
				<form onSubmit={handleMotoSubmit}>
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
							className="form-control"
							id="category"
							onChange={(e) => setCategory(e.target.value)} >
							<option value="" selected>
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
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </div>
					<div style={{ marginTop: "10px" }}>
						<button type="submit" className="btn btn-primary">
							Add Item
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default UserProfile;
