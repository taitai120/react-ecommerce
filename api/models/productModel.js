const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A product must have a name"],
        unique: true,
        trim: true,
        maxlength: [
            40,
            "A product name must have less or equal then 40 characters",
        ],
        minlength: [
            10,
            "A product name must have more or equal then 10 characters",
        ],
    },
    category_name: {
        type: String,
    },
    description: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "A product must have a price"],
    },
    discount: {
        type: Number,
        validate: {
            validator: function (val) {
                return val < this.price;
            },
            message: "Discount price ({VALUE}) should be below regular price",
        },
    },
    ratingsAverage: {
        type: Number,
        default: 4.5,
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"],
        set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
        type: Number,
        default: 0,
    },
    releasedAt: {
        type: Date,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
    expiredOffer: {
        type: Date,
    },
    specialOffer: {
        type: String,
    },
    membership: {
        type: String,
    },
    bankOffer: {
        type: String,
    },
    images: [String],
    colors: [String],
    sizes: [String],
    brand: {
        type: String,
    },
    sku: {
        type: String,
    },
    terms: [String],
    tags: [String],
    // reviews: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Review",
    //     },
    // ],
    status: {
        type: Number,
    },
    status_name: {
        type: String,
    },
    stock: {
        type: Number,
    },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
