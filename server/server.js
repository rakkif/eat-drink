require("dotenv").config({ path: "./config.env" });
const express = require("express");
// const mongoose = require("mongoose");
const connectDB = require("./db/conn");
const app = express();
// console.log(process.env.ATLAS_URI);
// const mongoURI =
//   "mongodb+srv://akifrabeea:Orange23@cluster0.0zkgiuf.mongodb.net/?retryWrites=true&w=majority";

const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(require("./routes/api/restos"));
// app.use(require("./routes/record"));

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Connect to the MongoDB database
connectDB();
// const db = mongoose.connection;

// db.on("error", (err) => {
//   console.error(`MongoDB connection error: ${err}`);
// });

// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// Define your Mongoose schema and models here
// For example, you can create a schema and a model like this:
// const Schema = mongoose.Schema;
// const exampleSchema = new Schema({
//   name: String,
//   age: Number,
// });
// const ExampleModel = mongoose.model('Example', exampleSchema);

// Your API routes and other server logic can go here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
