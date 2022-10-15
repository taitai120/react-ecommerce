const Product = require("../models/productModel");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        return res.status(200).json({
            status: "success",
            results: products.length,
            data: {
                data: products,
            },
        });
    } catch (err) {
        console.log(err.message);
    }
};

const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);

        return res.status(201).json({
            status: "success",
            data: {
                data: newProduct,
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
    getProducts,
    createProduct,
};
