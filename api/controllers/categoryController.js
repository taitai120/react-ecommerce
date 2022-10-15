const Category = require("../models/categoryModel");

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();

        return res.status(200).json({
            status: "success",
            results: categories.length,
            data: {
                data: categories,
            },
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};

const createCategory = async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);

        return res.status(200).json({
            status: "success",
            data: {
                data: newCategory,
            },
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};

module.exports = {
    getCategories,
    createCategory,
};
