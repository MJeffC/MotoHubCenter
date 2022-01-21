const mongoose = require('mongoose');

const MotoSchema = new mongoose.Schema({
    brand: {
        type: String,
        require: [true, "Brand is required"],
        minlength: [2, "Brand must be at least 2 characters long"],
    },
    brandName: {
        type: String,
        require: [true, "Brand Name/Model is required"],
        minlength: [3, "Brand Name/Model must be at least 3 characters long"],
    },
    category: {
        type: String,
        require: [true, "Please select Category from list"],
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }
}, {
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

const Moto = mongoose.model('Moto', MotoSchema);

module.exports = Moto;