const brandController = require('../controllers/brand.controller');

module.exports = app => {
    app.post("/api/brand", brandController.createBrand);
    app.get("/api/brand", brandController.findAllBrand);
    app.get("/api/brand/:id", brandController.getOneBrand);
    app.put("/api/brand/:id", brandController.updateOneBrand);
    app.delete("/api/brand/:id", brandController.deleteOneBrand);
};