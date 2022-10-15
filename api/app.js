const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const productRouter = require("./routes/productRoutes");
const categoryRouter = require("./routes/categoryRoutes");

const app = express();

// 1) GLOBAL MIDDLEWARES

// Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Reading data from body into req.body
app.use(express.json());

// Serving static files
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    // console.log(req.headers);
    next();
});

// 2) ROUTES
app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);

app.all("*", (req, res, next) => {
    return res.end("Page not found");
});

module.exports = app;
