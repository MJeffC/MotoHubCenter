const Brand = require("../models/moto.model");

const createBrand = (req, res) => {
	const { body } = req;
	Brand.create(body)
		.then((newBrand) => res.json(newBrand))
		.catch((err) => res.status(400).json({ err }));
};

const findAllBrand = (req, res) => {
	Moto.find()
		.then((allBrand) => res.json(allBrand))
		.catch((err) => res.status(400).json({ errMessage: err }));
};

const getOneBrand = (req, res) => {
	const { params } = req;
	Brand.findOne({ _id: params.id })
		.then(( oneBrand) => res.json( oneBrand ))
		.catch((err) => res.status(400).json({ errMessage: err }));
};

const updateOneBrand = (req, res) => {
	const { params } = req;
	Brand.findOneAndUpdate({ _id: params.id }, req.body, {
		new: true,
		runValidators: true,
	})
		.then((updateBrand) => res.json(updateBrand))
		.catch((err) => res.status(400).json(err));
};

const deleteOneBrand = (req, res) => {
	const { params } = req;
	Brand.deleteOne({ _id: params.id })
		.then((result) => res.json(resullt))
		.catch((err) => res.status(400).json({ errMessage: err }));
};

module.exports = {
	createBrand,
	findAllBrand,
	getOneBrand,
	updateOneBrand,
	deleteOneBrand,
};
