const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Username is required."],
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    avatar: {
        type: String,
        default: "default.jpg",
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
            validator: function (val) {
                return val === this.password;
            },
            message: "Passwords are not the same",
        },
    },
    active: {
        type: Boolean,
        default: true,
        select: false,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
