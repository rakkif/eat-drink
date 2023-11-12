const mongoose = require("mongoose");
const mongoURI = process.env.ATLAS_URI;

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
