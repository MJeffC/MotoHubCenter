const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Brand Name is required"],
        minlength: [3, "Brand Name must be at least 3 characters long"],
    },
    moto_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Moto",
    }]
}, {
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

const Brand = mongoose.model('Brand', BrandSchema);

module.exports = Brand;