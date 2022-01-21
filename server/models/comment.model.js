const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    phrase: {
        type: String,
        minLength: [10, "Comment must be at least 10 characters long"],
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    moto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Moto",
    }
}, {
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;