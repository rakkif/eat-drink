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
    casual: {
      type: Boolean,
    },
    location: {
      type: String,
    },
  },
  { collection: "drink" }
);

module.exports = Drink = mongoose.model("drink", RestoSchema);
