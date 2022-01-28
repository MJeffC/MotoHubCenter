const mongoose = require('mongoose');

const MotoSchema = new mongoose.Schema({
    brand: {
        type: String,
        require: [3, "Brand is required"],
        minLength: [3, "Brand must be at least 3 charactes long"],
    },
    bName: {
        type: String,
        require: [true, "Brand Name/Model is required"],
        minlength: [3, "Brand Name/Model must be at least 3 characters long"],
    },
    category: {
        type: String,
        require: [true, "Please select Category from list"],
        enum: ["Helmet", "Gloves", "Jacket", "Pants", "Shoes", "Motorcycle", "Accessories"],
    },
    user_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    comment: {
        type: String,
        require: [true, "Must write a comment"],
        minlength: [10, "Comment must be at least 10 characters long"],
    }
    // comment_id: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Comment",
    // }]
}, {
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

const Moto = mongoose.model('Moto', MotoSchema);

module.exports = Moto;