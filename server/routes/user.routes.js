const userController = require('../controllers/user.controller');

module.exports = app => {
    app.post("/api/register", userController.register);
    app.post("/api/login", userController.login);
    app.post("/api/logout", userController.logout);
    app.get("/api/user/", userController.findAllUsers);
    app.get("/api/user/:id", userController.getOneUser);
    app.put("/api/user/:id", userController.updateOneUser);
    app.delete("/api/user/:id", userController.deleteOneUser);
};