const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    code: {
        type: Number,
        unique: true,
        required: [true, "Code is required"],
    },
    name: {
        type: String,
        require: [true, "Name is required"],
    },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
