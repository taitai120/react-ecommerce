const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const PORT = process.env.PORT || 5001;
const DB = process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
    })
    .then(() => console.log("DB connection successful"));

const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});

process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! Shuting down...");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
