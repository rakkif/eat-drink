const mongoose = require("mongoose");

const RestoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    g_star: {
      type: Number,
    },
    r_star: {
      type: Number,
    },
    expense: {
      type: Number,
    },
    location: {
      type: String,
    },
  },
  { collection: "coffee" }
);

module.exports = Coffee = mongoose.model("coffee", RestoSchema);
