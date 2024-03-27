const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

async function connectToMongoDB() {
  const client = new MongoClient(process.env.MONGOOSE_URL, {
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    // Now you can use `client` to interact with your MongoDB database
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
}
}

connectToMongoDB();


const server = app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
