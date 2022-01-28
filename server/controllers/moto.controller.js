const Moto = require("../models/moto.model");
const jwt = require("jsonwebtoken");

const createMoto = async (req, res) => {
	const { body } = req;
	let newMoto = new Moto(body);

	// const decodeJwt = jwt.decode(req.cookies.usertoken, { complete: true });
	// console.log(decodeJwt);

	// newMoto.user_id = decodeJwt.payload.id;
	console.log("newMoto: ", newMoto);

	try {
		newMoto = await newMoto.save();
		res.json(newMoto);
	} catch (error) {
		res.status(400).json(error);
	}

};

const findAllMoto = (req, res) => {
	Moto.find()
		.then((allMoto) => res.json(allMoto))
		.catch((err) => res.status(400).json({ errMessage: err }));
};

const getOneMoto = (req, res) => {
	const { params } = req;
	Moto.findOne({ _id: params.id })
		.then((oneMoto) => res.json(oneMoto))
		.catch((err) => res.status(400).json({ errMessage: err }));
};

const updateOneMoto = (req, res) => {
	const { params } = req;
	Moto.findOneAndUpdate({ _id: params.id }, req.body, {
		new: true,
		runValidators: true,
	})
		.then((updateMoto) => res.json(updateMoto))
		.catch((err) => res.status(400).json(err));
};

const deleteOneMoto = (req, res) => {
	const { params } = req;
	Moto.deleteOne({ _id: params.id })
		.then((result) => res.json(result))
		.catch((err) => res.status(400).json({ errMessage: err }));
};

const findCatMoto = (req, res) => {
	const { params } = req;
	console.log("paramsController: ", params.category);
	Moto.find({ category: params.category})
		.then(( allCatMoto ) => {
			console.log("allCatMoto: ", allCatMoto);
			res.json( allCatMoto );
			})
		.catch((err) => res.status(400).json({ errMessage: err }));
};

module.exports = {
	createMoto,
	findAllMoto,
	getOneMoto,
	updateOneMoto,
	deleteOneMoto,
	findCatMoto,
};
