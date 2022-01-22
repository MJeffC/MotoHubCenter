const Moto = require("../models/moto.model");

const createMoto = (req, res) => {
	const { body } = req;
	Moto.create(body)
		.then((newMoto) => res.json(newMoto))
		.catch((err) => res.status(400).json({ err }));
};

const findAllMoto = (req, res) => {
	Moto.find()
		.then((allMoto) => res.json(allMoto))
		.catch((err) => res.status(400).json({ errMessage: err }));
};

const getOneMoto = (req, res) => {
	const { params } = req;
	Moto.findOne({ _id: params.id }).catch((err) =>
		res.status(400).json({ errMessage: err }));
};

const updateOneMoto = (req, res) => {
    const { params } = req;
    Moto.findOneAndUpdate(
        { _id: params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then( updateMoto => res.json( updateMoto ))
        .catch((err) => res.status(400).json( err ));
};

const deleteOneMoto = (req, res) => {
    const { params } = req;
    Moto.deleteOne({ _id: params.id })
        .then( result => res.json( resullt))
        .catch((err) => res.status(400).json({ errMessage: err }));
};

module.exports = {
	createMoto,
	findAllMoto,
	getOneMoto,
	updateOneMoto,
	deleteOneMoto,
};
