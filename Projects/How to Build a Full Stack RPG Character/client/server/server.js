require("dotenv").config();
const mongoString = process.env.DATABASE_URL;

const mongoose = require("mongoose");
mongoose.connect(mongoString, { useNewUrlParser: true });
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

database.once("open", () => console.log("Database is Open!"));

const express = require("express");
const server = express();
server.use(express.json());

server.get("/", (req, res) => res.send("Hello World!"));

server.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

const router = require("./characters");
server.use("/characters", router);

const cors = require("cors");
server.use(cors());
