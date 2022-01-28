const motoController = require('../controllers/moto.controller');
const { authenticate } = require('../middleware/jwt.config');

module.exports = app => {
    // app.post("/api/moto", authenticate, motoController.createMoto);
    app.post("/api/moto", motoController.createMoto);
    app.get("/api/moto", motoController.findAllMoto);
    app.get("/api/moto/:id", motoController.getOneMoto);
    app.put("/api/moto/:id", motoController.updateOneMoto);
    app.delete("/api/moto/:id", motoController.deleteOneMoto);
    app.get("/api/moto/cat/:category", motoController.findCatMoto);
};