const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, `Review is required!`],
    },
    rating: {
        type: Number,
        default: 1,
        min: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        defaukt: Date.Now,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Review must belong to a user."],
    },
    product: {
        type: mongoose.mongo.Schema.ObjectId,
        ref: "Product",
        required: [true, "Review must belong to a product."],
    },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
