const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const userRoutes = require("./routes/userRoutes");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes)


mongoose.
connect(process.env.MONGOOSE_URL,{
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(() => {
  console.log("db connection successfully");
})
.catch((err)=>{
  console.log(err.messgae);
})

// async function connectToMongoDB() {
//   const mongoose = new MongoClient(process.env.MONGOOSE_URL, {
//     useUnifiedTopology: true,
//   });

//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//     // Now you can use `client` to interact with your MongoDB database
// } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
// }
// }

// connectToMongoDB();


const server = app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
