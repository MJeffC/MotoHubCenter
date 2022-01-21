const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [5, "Name must be at least 5 characters long"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [5, "Name must be at least 5 characters long"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validators: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: 'Please enter a valid email',
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8,"Password must be at least 8 characters long"],
    },
    moto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Moto",
    },
    comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }
}, {
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
});

UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidae('confirmPassword', "Password must match")
    }

    next();
})

UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10)
    .then((hash) => {
        this.password = hash;
        next();
    })
    .catch((err) => {
        console.log(err);
    })
})

const User = model('User', UserSchema);

module.exports = User;