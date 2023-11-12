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
    cuisine: {
      type: String,
    },
    expense: {
      type: Number,
    },
    casual: {
      type: Boolean,
    },
    location: {
      type: String,
    },
  },
  { collection: "eat" }
);

module.exports = Resto = mongoose.model("eat", RestoSchema);
