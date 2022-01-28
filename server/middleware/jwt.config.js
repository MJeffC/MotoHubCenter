const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    jwt.verify(req.cookies.userToken, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            console.log("user not authenticated");
            res.status(401).json({ verified: false});
        } else {
            console.log("user is authenticated");
            next();
        }
    });
};

module.exports = {
    authenticate,
}