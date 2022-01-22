const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = (req, res) => {
	const { body } = req;

	User.findOne({ email: body.email })
		.then((query) => {
			if (query) {
				res.status(400).json({ error: "Email already in use" });
				return;
			}
		})
		.catch((error) => res.status(400).json(err));

	const newUser = new User(body);

	newUser
		.save()
		.then((newlyCreatedUser) => res.json(newlyCreatedUser))
		.catch((err) => res.status(400).json(err));
};

const login = async (req, res) => {
	const { body } = req;
	if (!body.email) {
		res.status(400).json({ error: "No email provided" });
		return;
	}

	let userQuery;
	try {
		userQuery = await User.findOne({ email: body.email });
	} catch (err) {
		res.status(400).json({ error: "Email not Found" });
	}

	if (userQuery === null) {
		res.status(400).json({ error: "Email not Found" });
		return;
	}

	const passwordCheck = bcrypt.compareSync(
		body.password,
		userQuery.password
	);

	if (!passwordCheck) {
		res.status(400).json({ error: "Email and Password do not match" });
		return;
	}

	const userToken = jwt.sign({ id: userQuery._id }, process.env.SECRET_KEY);
	res.cookie("usertoken", userToken, process.env.SECRET_KEY, {
		httpOnly: true,
		expires: new Date(Date.now() + 10000000),
	}).json({ message: "Successfully logged in" });
};

const logout = (req, res) => {
	res.clearCookie("usertoken");
	res.json({ message: "Logout Successful" });
};

const findAllUsers = (req, res) => {
	User.find()
		.then((allUsers) => res.json(allUsers))
		.catch((err) => res.status(404).json({ errMessage: err }));
};

const getOneUser = (req, res) => {
	const { params } = req;
	User.findOne({ _id: params.id })
		.then((oneUser) => res.json(oneUser))
		.catch((err) => res.status(404).json({ errMessage: err }));
};

const updateOneUser = (req, res) => {
	const { params } = req;
	User.findOneAndUpdate({ _id: params.id }, req.body, {
		new: true,
		runValidators: true,
	})
		.then((updatedUser) => res.json(updatedUser))
		.catch((err) => res.status(404).json(err));
};

const deleteOneUser = (req, res) => {
	const { params } = req;
	User.deleteOne({ _id: params.id })
		.then((result) => res.json(result))
		.catch(( err ) => res.status(400).json({ errMessage: err }));
};

module.exports = {
	register,
	login,
	logout,
	findAllUsers,
	getOneUser,
	updateOneUser,
    deleteOneUser,
};
